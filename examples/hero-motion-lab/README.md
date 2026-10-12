# Hero Motion Lab

A self-contained showcase of three hero-section directions built around the Standout Hero Motion skill: a luminous sonic-identity field, a topographic outdoor-travel journal, and a tactile furniture-atelier study.

## Run locally

From the repository root, start a simple static server:

```bash
python3 -m http.server 8000 -d examples/hero-motion-lab
```

Then open <http://localhost:8000>. The page loads GSAP 3.12.5 from jsDelivr for its coordinated entrance sequences. If that CDN is unavailable, the complete static designs remain visible. You can also open `index.html` directly in a browser; an internet connection is needed for GSAP and the optional web fonts.

## Motion and accessibility

Each hero is fully present in the HTML and CSS before animation. Copy arrives first, then its visual; the signal waveform and trail route draw once as brief concept-specific accents. After an example has played, its **Replay motion** button lets you see the entrance again. The script skips animation when `prefers-reduced-motion: reduce` is set and leaves content intact when JavaScript, GSAP, or `IntersectionObserver` is unavailable. Focus indicators, semantic headings, descriptive SVG titles, and responsive mobile layouts are included.

## Files

- `index.html` — semantic showcase markup and original inline vector artwork.
- `styles.css` — responsive styling and three distinct visual systems.
- `motion.js` — scoped, replayable GSAP timelines with reduced-motion and fallback handling.
- `logo.svg` — original signal-mark favicon.
