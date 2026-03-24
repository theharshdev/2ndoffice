# 2ndoffice — Static Site

Modern, premium, animation-heavy **multi-page** static website for **2ndoffice** (an outsourcing company providing solutions for online businesses).

## Pages

- `index.html` (Home)
- `about.html`
- `services.html`
- `blog.html` (Listing)
- `blog-detail.html`
- `reviews.html`
- `contact.html`
- `locate-us.html`
- `careers.html` (long-scroll, content-rich, heavy animations)

## Tech

- HTML5
- Tailwind CSS (CDN)
- JavaScript (ES modules)
- GSAP + ScrollTrigger (section reveals, stagger, parallax, zoom, intro)
- Swiper.js (carousels)
- Dark/Light mode toggle with `localStorage`
- Smooth anchor scrolling
- Reusable components via injected `components/navbar.html` + `components/footer.html`

## Run locally (recommended)

Because components load via `fetch()`, run a small local server (instead of opening `file://`).

### Option A (Python)

```bash
python -m http.server 5500
```

Then open `http://localhost:5500/index.html`.

### Option B (VS Code / Cursor Live Server)

- Install “Live Server”
- Right-click `index.html` → “Open with Live Server”

## Folder structure

```
assets/
  css/
    styles.css
  js/
    components.js
    main.js
components/
  navbar.html
  footer.html
*.html
```

