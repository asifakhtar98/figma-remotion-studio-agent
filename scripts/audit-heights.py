#!/usr/bin/env python3
"""Render every still composition and detect clipped content.

For each composition:
1. Render a still at the current frame size
2. Scan from bottom up to find where content ends
3. Report if content is clipped (touches frame edge) or has too much empty space
"""
import subprocess
import json
import os
import sys

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow", "-q"])
    from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Load composition registry
registry_path = os.path.join(ROOT, "viewer", "src", "compositionRegistry.json")
with open(registry_path) as f:
    compositions = json.load(f)

stills = [c for c in compositions if c.get("isStill", False)]
print(f"Found {len(stills)} still compositions to check\n")

results = []
for comp in stills:
    comp_id = comp["id"]
    w = comp["width"]
    h = comp["height"]
    
    # Render still
    out_path = os.path.join(ROOT, "tmp", "height-audit", f"{comp_id}.png")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    
    try:
        subprocess.run(
            ["npx", "remotion", "still", "--composition", comp_id, "--output", out_path,
             "--log", "error"],
            cwd=ROOT, capture_output=True, timeout=30
        )
    except Exception as e:
        print(f"  SKIP {comp_id}: render failed ({e})")
        continue
    
    if not os.path.exists(out_path):
        print(f"  SKIP {comp_id}: no output file")
        continue
    
    img = Image.open(out_path).convert("RGB")
    iw, ih = img.size
    
    # Determine scan region (skip sidebar for web screens)
    is_web = "Web" in comp_id or w >= 1920
    if is_web:
        # Skip sidebar region (~260px on 1920 wide)
        scale = iw / w
        x_start = int(280 * scale)
    else:
        x_start = int(20 * (iw / w))
    x_end = iw - int(20 * (iw / w))
    step_x = max(1, (x_end - x_start) // 60)
    
    # Find last row with non-background content
    # Background is typically white-ish (>235 in all channels) or very dark (<25)
    last_content_row = 0
    for y in range(ih - 1, -1, -1):
        row_pixels = [img.getpixel((x, y)) for x in range(x_start, x_end, step_x)]
        has_content = False
        for px in row_pixels:
            r, g, b = px
            # Not near-white AND not near-black
            if not ((min(r, g, b) > 235) or (max(r, g, b) < 25)):
                has_content = True
                break
            # Also check for colored pixels even if they're somewhat light/dark
            if max(r, g, b) - min(r, g, b) > 15:
                has_content = True
                break
        if has_content:
            last_content_row = y
            break
    
    margin_bottom = ih - last_content_row
    clipped = margin_bottom < 10
    too_much_space = margin_bottom > 100
    
    # Calculate ideal height (round up to nearest 20, add 40px padding)
    ideal = ((last_content_row + 40 + 19) // 20) * 20
    
    status = "CLIPPED" if clipped else ("EXCESS" if too_much_space else "OK")
    
    results.append({
        "id": comp_id,
        "frame": f"{w}x{h}",
        "content_end": last_content_row,
        "frame_h": ih,
        "margin": margin_bottom,
        "ideal": ideal,
        "status": status,
    })
    
    if status != "OK":
        print(f"  {status:8s} {comp_id:50s} {w}x{h} content_end={last_content_row} margin={margin_bottom}px ideal={ideal}")

print("\n--- SUMMARY ---")
clipped = [r for r in results if r["status"] == "CLIPPED"]
excess = [r for r in results if r["status"] == "EXCESS"]
ok = [r for r in results if r["status"] == "OK"]

print(f"OK: {len(ok)}  |  CLIPPED: {len(clipped)}  |  EXCESS: {len(excess)}")

if clipped:
    print("\nCLIPPED (content cut off — increase height):")
    for r in clipped:
        print(f"  {r['id']:50s} current={r['frame_h']}  →  ideal={r['ideal']}")

if excess:
    print("\nEXCESS (too much empty space — decrease height):")
    for r in excess:
        print(f"  {r['id']:50s} current={r['frame_h']}  margin={r['margin']}px  →  ideal={r['ideal']}")
