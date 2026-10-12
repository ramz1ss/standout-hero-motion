# Standout Hero Motion

A reusable Manus skill and starter kit for building distinctive, responsive website hero sections with custom CSS and GSAP. The goal is memorable art direction and purposeful motion—not animation for its own sake.

## What’s included

- `SKILL.md` — instructions Manus can use when designing and implementing hero sections.
- `templates/hero-motion.css` — responsive dark hero layout and visual tokens.
- `templates/hero-motion.js` — a short GSAP entrance sequence with reduced-motion and missing-library safeguards.

## Quick start

1. Copy and adapt the CSS to your project's stylesheet.
2. Add the GSAP package using your existing package manager (or use the project's established script-loading approach for plain HTML).
3. Load GSAP before `hero-motion.js`.
4. Mark the hero and animated elements with the expected data attributes:

```html
<section class="hero" data-hero>
  <div class="hero__inner">
    <div>
      <p class="hero__eyebrow" data-hero-reveal>Independent studio · Est. 2024</p>
      <h1 class="hero__title" data-hero-reveal>Make room for wonder.</h1>
      <p class="hero__copy" data-hero-reveal>A concise sentence that explains what makes this product or brand different.</p>
      <div class="hero__actions" data-hero-reveal>
        <a class="hero__button" href="#work">Explore the work</a>
      </div>
    </div>
    <div class="hero__visual" data-hero-reveal>
      <img src="/images/hero-art.jpg" alt="Describe the meaningful image content" />
      <span class="hero__orb" aria-hidden="true"></span>
    </div>
  </div>
</section>
```

The example copy, image, colors, and links are placeholders—replace them with real project content and a relevant visual. The CSS and JS are framework-neutral starters; adapt them to your design system and lifecycle conventions.

## Accessibility and performance

- The page content remains visible without JavaScript or GSAP.
- Motion is skipped when `prefers-reduced-motion: reduce` is enabled.
- The CSS includes a visible keyboard focus state and a small-screen layout.
- Keep movement short and intentional. Avoid scroll hijacking, excessive parallax, and decorative motion that distracts from the message.

## Use the Manus skill

Add `SKILL.md` to your Manus skills. Use it when creating or polishing landing-page hero sections, branded CSS motion, or reusable GSAP hero patterns. The skill is a starting point; it should inspect each website's framework, brand, accessibility needs, and existing motion tools before implementation.

## License

The files in this repository are free to use, modify, and redistribute under the MIT License. See [`LICENSE`](LICENSE).
