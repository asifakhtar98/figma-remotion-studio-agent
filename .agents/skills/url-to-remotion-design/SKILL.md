---
name: url-to-remotion-design
description: Capture live websites from URLs and transform them into 100% pixel-faithful Remotion UI compositions using 3-source capture (screenshot ground truth, HTML copy source, and DOM computed style evaluation) plus 2-pass automatic design review. Use whenever a URL or website link is provided as input.
---

# URL-to-Remotion Design Skill

This skill defines the mandatory workflow for turning a live website URL into a pixel-perfect Remotion UI screen composition.

When given a URL, **never build from HTML text alone**. Reading HTML/CSS as text and re-interpreting it visually is lossy — computed styles, runtime CSS variables, gradients, exact font rendering, and layout hierarchy are lost.

---

## 1. Mandatory Three-Source Capture

All three sources are required to build a 100% pixel-faithful reproduction:

| Source | Tool | What it provides | What it misses |
|---|---|---|---|
| **Screenshot (Visual spec)** | `chrome-devtools-mcp` (`take_screenshot`) | Rendered layout, spacing, element hierarchy, visual proportions | Exact hex colors, font-family names, text buried in markup |
| **HTML Source (Data dictionary)** | `read_url_content` | Authoritative copy text, semantic structure, link metadata | Computed CSS properties, combined background gradients, runtime styles |
| **DOM Computed Styles (Color & Token source)** | `chrome-devtools-mcp` (`evaluate_script`) | **Exact computed RGB/HEX colors, linear/radial gradients, background images, borders, box shadows, scrollHeight** | Layout positioning context & responsiveness |

---

## 2. Step-by-Step Workflow

### Step 1: Capture Full-Page Screenshot (Visual Spec)
1. Use `navigate_page` to go to the target URL.
2. Query `document.documentElement.scrollHeight` via `evaluate_script` to get exact full-page height.
3. Take a full-page screenshot (`take_screenshot` with `fullPage: true`) and save it to `src/projects/<project-name>/src/reference/`.
4. For long pages, take viewport-sized screenshots at different scroll depths as needed.

### Step 2: Read HTML Source (Copy & Data Source)
1. Fetch HTML content via `read_url_content`.
2. Extract exact headlines, paragraph text, button labels, link targets, and structured data.
3. Identify font family declarations in `<link>` or `@font-face` tags.

### Step 3: Evaluate DOM Computed Styles (Token Source)
Execute `evaluate_script` using `window.getComputedStyle()` to retrieve exact values directly from the browser runtime:

```javascript
() => {
  const getStyle = (sel, prop) => {
    const el = document.querySelector(sel);
    return el ? window.getComputedStyle(el).getPropertyValue(prop) : null;
  };
  return {
    heroBg: getStyle('#hero', 'background-color'),
    heroBgImage: getStyle('#hero', 'background-image'),
    primaryColor: getStyle('.text-primary', 'color'),
    accentColor: getStyle('.text-accent', 'color'),
    btnGradient: getStyle('.btn-pill', 'background-image'),
    btnShadow: getStyle('.btn-pill', 'box-shadow'),
    cardBorder: getStyle('.card', 'border-color'),
    cardShadow: getStyle('.card', 'box-shadow'),
    pageHeight: document.documentElement.scrollHeight
  };
}
```

### Step 4: Build Screen & Components (Pass 1)
1. Create screen and component files under `src/projects/<project-name>/src/`.
2. Apply exact extracted colors, gradients (`linear-gradient(...)`), borders, shadows, and Google Fonts (`loadFont()`).
3. Set `<Composition>` `width` and `height` in `src/Root.tsx` matching `pageHeight` (`scrollHeight`) to prevent any canvas clipping.

### Step 5: Automated 2-Pass Visual Refinement (Pass 2)
1. Render a still frame of the built composition using `npx remotion still <composition-id> <out-path>`.
2. Visually compare the rendered output side-by-side against the reference screenshot in `src/reference/`.
3. Audit and fix visual discrepancies: spacing, font scale, contrast, padding, border radius, and section alignment.
4. Verify with `npx tsc --noEmit` and `npm run sync:viewer`.

---

## 3. Strict Rules

- **Never guess hex colors or gradients.** Always run `evaluate_script` to get exact computed RGB/HEX and background-image values.
- **Prevent Canvas Clipping.** Always set composition height in `src/Root.tsx` equal to or greater than the total page content height (`scrollHeight`).
- **Font Precision.** Load exact Google Fonts via `@remotion/google-fonts` matching font families extracted from HTML/DOM.
- **The screenshot is visual spec, HTML is text spec, DOM is token spec.** Use all three in concert.
