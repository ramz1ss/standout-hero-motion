---
name: standout-hero-motion
description: Design and implement distinctive, polished website hero sections with custom CSS and GSAP. Use when building or improving a landing-page hero, adding branded motion, or creating reusable hero animation patterns for Manus websites.
---

# Standout Hero Motion

Create memorable hero sections through art direction, hierarchy, and purposeful motion—not animation volume. Adapt the bundled CSS and JavaScript templates to the project's framework, brand, assets, and DOM. Do not overwrite an existing design system or add GSAP when a suitable motion library is already installed.

## Workflow

1. **Inspect the project.** Identify its framework, entry point, existing styles, installed animation libraries, hero markup, asset conventions, and responsive breakpoints. Reuse existing components and dependencies where practical.
2. **Choose a visual concept.** Establish one clear focal point, a strong headline, concise supporting copy, and one or two ownable visual motifs. Use custom, relevant imagery or product visuals where available; avoid generic gradients, floating shapes, and stock art as default decoration.
3. **Design static-first.** Make the hero complete and legible without animation. Preserve meaningful heading order, link/button semantics, visible focus states, contrast, and responsive composition.
4. **Implement motion as enhancement.** Prefer a short, coordinated entrance sequence (headline, supporting copy, CTA, visual) and one restrained ongoing detail only if it reinforces the concept. Animate `transform` and `opacity` where possible. Keep interactions predictable; do not hijack scrolling or block controls behind an intro.
5. **Honor accessibility and performance.** Respect `prefers-reduced-motion`; content must remain visible if JavaScript or GSAP fails. Avoid animating layout-heavy properties, long delays, excessive parallax, and automatic looping that competes with reading. Keep tap targets and focus indicators usable.
6. **Validate in context.** Check desktop and narrow mobile layouts, reduced-motion behavior, keyboard access, missing-library/failure fallback, and console/build diagnostics. Remove unused CSS, listeners, and animation code.

## Integration rules

- Use the existing dependency manager and project conventions. For a bundled app, add GSAP through that package manager only when needed. In plain HTML, load a pinned, approved GSAP version through the project's established asset strategy; never inject a second GSAP copy.
- Scope selectors to the hero and use semantic, stable data attributes or component refs rather than broad global selectors.
- Prefer GSAP context/scoped cleanup in component frameworks. Revert animations and event listeners when a component unmounts or is reinitialized.
- Keep semantic content in the DOM; do not require SplitText, paid plugins, or text duplication for the base effect.
- Prevent flash-of-invisible-content: the initial page must show all content. Hide/reveal only after the animation runtime is confirmed, and always restore visibility on failure or reduced motion.
- Keep animation timing brisk and intentional. Match easing and movement to the brand; avoid one-size-fits-all bounce effects.
- If the user supplies a visual reference or explicit direction, honor it. Do not invent business claims or change copy without permission.

## Bundled starter

Read `templates/hero-motion.css` and `templates/hero-motion.js` for an accessible, framework-neutral baseline. Treat them as adaptable examples, not a required aesthetic. Replace placeholder selectors/content with the project's actual markup, and ensure GSAP is already loaded before initializing the script.

## Deliverable

Implement the hero in the requested project when available. Briefly summarize the visual concept, motion behavior, reduced-motion/fallback handling, files changed, and checks performed. If no project is provided, give the user the complete CSS/JS starter plus minimal markup assumptions and clearly identify what must be customized.
