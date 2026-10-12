/* Load GSAP before this file. Change selectors to match the real hero component. */
(() => {
  const hero = document.querySelector('[data-hero]');
  if (!hero || !window.gsap) return; // Static content stays visible if GSAP is unavailable.

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const targets = hero.querySelectorAll('[data-hero-reveal]');
  if (!targets.length) return;

  // GSAP's fromTo establishes a visible final state and only animates after JS is ready.
  window.gsap.fromTo(
    targets,
    { autoAlpha: 0, y: 22 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.72,
      stagger: 0.11,
      ease: 'power3.out',
      clearProps: 'transform,opacity,visibility',
      onComplete() {
        // Keep the final visual state independent of the animation engine.
        targets.forEach((element) => {
          element.style.removeProperty('opacity');
          element.style.removeProperty('visibility');
          element.style.removeProperty('transform');
        });
      },
    },
  );
})();
