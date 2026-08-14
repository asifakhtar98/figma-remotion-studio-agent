#!/bin/bash
# Fast parallel height audit with correct remotion CLI syntax
set -euo pipefail
cd "$(dirname "$0")/.."

OUTDIR="tmp/height-audit"
rm -rf "$OUTDIR"
mkdir -p "$OUTDIR"

# Get all still composition IDs
IDS=$(node -e "
const r = require('./viewer/src/compositionRegistry.json');
r.filter(c => c.isStill).forEach(c => console.log(c.id));
")

echo "Rendering all stills in parallel (4 at a time)..."

# Correct syntax: npx remotion still src/index.ts <compositionId> <outputPath>
export OUTDIR
render_one() {
  if npx remotion still src/index.ts "$1" "$OUTDIR/$1.png" --log=error 2>/dev/null; then
    echo "  OK: $1"
  else
    echo "  FAIL: $1"
  fi
}
export -f render_one
echo "$IDS" | xargs -P4 -I{} bash -c 'render_one "$@"' _ {}

echo ""
echo "Measuring content heights..."
echo ""

python3 -c "
from PIL import Image
import json, os

outdir = '$OUTDIR'
with open('viewer/src/compositionRegistry.json') as f:
    comps = json.load(f)

stills = [c for c in comps if c.get('isStill', False)]

clipped = []
excess = []
ok_list = []

for comp in sorted(stills, key=lambda c: c['id']):
    cid = comp['id']
    w, h = comp['width'], comp['height']
    path = os.path.join(outdir, f'{cid}.png')
    if not os.path.exists(path):
        print(f'  MISSING: {cid}')
        continue
    
    img = Image.open(path).convert('RGB')
    iw, ih = img.size
    
    is_web = 'Web' in cid or w >= 1920
    scale = iw / w
    x_start = int((280 if is_web else 20) * scale)
    x_end = iw - int(20 * scale)
    step_x = max(1, (x_end - x_start) // 60)
    
    last_content_row = 0
    for y in range(ih - 1, -1, -1):
        pixels = [img.getpixel((x, y)) for x in range(x_start, x_end, step_x)]
        for px in pixels:
            r, g, b = px
            if not ((min(r,g,b) > 235) or (max(r,g,b) < 25)):
                last_content_row = y
                break
            if max(r,g,b) - min(r,g,b) > 15:
                last_content_row = y
                break
        if last_content_row == y:
            break
    
    margin = ih - last_content_row
    ideal = ((last_content_row + 40 + 19) // 20) * 20
    
    if margin < 10:
        clipped.append((cid, w, h, last_content_row, margin, ideal))
    elif margin > 120:
        excess.append((cid, w, h, last_content_row, margin, ideal))
    else:
        ok_list.append(cid)

print(f'OK: {len(ok_list)}  |  CLIPPED: {len(clipped)}  |  EXCESS: {len(excess)}')

if clipped:
    print()
    print('CLIPPED (content cut off — must increase height):')
    for cid, w, h, ce, m, ideal in clipped:
        print(f'  {cid:50s}  current={h:5d}  content_end={ce}  margin={m}px  ideal={ideal}')

if excess:
    print()
    print('EXCESS (too much empty space — should decrease height):')
    for cid, w, h, ce, m, ideal in excess:
        print(f'  {cid:50s}  current={h:5d}  content_end={ce}  margin={m}px  ideal={ideal}')
"
