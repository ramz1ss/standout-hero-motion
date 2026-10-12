(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const cards = [...document.querySelectorAll('.study')];
  const introTargets = [...document.querySelectorAll('[data-intro-reveal]')];
  const status = document.querySelector('#motion-status');

  // Static content is the default. Never hide anything unless GSAP is confirmed and motion is allowed.
  if (!window.gsap || reduceMotion.matches) return;

  const gsap = window.gsap;
  const replays = new Map();

  function makeTimeline(card) {
    const copy = card.querySelectorAll('[data-motion="copy"]');
    const art = card.querySelector('[data-motion="art"]');
    const trace = card.querySelector('[data-motion="trace"]');
    const node = card.querySelector('[data-motion="node"]');
    const button = card.querySelector('[data-replay]');
    const tl = gsap.timeline({ paused: true, onComplete: () => {
      card.dataset.motionPlayed = 'true';
      if (button) button.hidden = false;
    }});

    tl.fromTo(copy, { autoAlpha: 0, y: 20 }, {
      autoAlpha: 1, y: 0, duration: 0.58, stagger: 0.09,
      ease: 'power3.out', clearProps: 'transform,opacity,visibility'
    });

    if (art) {
      tl.fromTo(art, { autoAlpha: 0, y: 10, scale: 0.985 }, {
        autoAlpha: 1, y: 0, scale: 1, duration: 0.68, ease: 'power2.out',
        clearProps: 'transform,opacity,visibility'
      }, '-=0.3');
    }

    if (trace && typeof trace.getTotalLength === 'function') {
      let length = 0;
      try { length = trace.getTotalLength(); } catch (_) { length = 0; }
      if (length > 0) {
        gsap.set(trace, { strokeDasharray: length, strokeDashoffset: length });
        tl.to(trace, { strokeDashoffset: 0, duration: 1.05, ease: 'power2.inOut' }, '-=0.35');
      }
    }

    if (node) {
      tl.fromTo(node, { scale: 0.4, transformOrigin: '50% 50%', autoAlpha: 0 }, {
        scale: 1, autoAlpha: 1, duration: 0.34, ease: 'power2.out'
      }, '-=0.42');
    }

    return tl;
  }

  cards.forEach((card) => {
    const timeline = makeTimeline(card);
    replays.set(card.id, timeline);
    const button = card.querySelector('[data-replay]');
    if (button) {
      button.addEventListener('click', () => {
        timeline.restart();
        if (status) status.textContent = `Replaying ${card.id.replace('-', ' ')} hero motion.`;
      });
    }
  });

  const playCard = (card) => {
    if (card.dataset.motionPlayed === 'true') return;
    replays.get(card.id)?.play(0);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playCard(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.22, rootMargin: '0px 0px -5% 0px' });
    cards.forEach((card) => observer.observe(card));
  } else {
    cards.forEach(playCard);
  }

  gsap.fromTo(introTargets, { autoAlpha: 0, y: 18 }, {
    autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.1, ease: 'power3.out',
    clearProps: 'transform,opacity,visibility'
  });

  // Cleanly restore static content if the visitor changes their system preference while open.
  const handleMotionPreference = (event) => {
    if (!event.matches) return;
    cards.forEach((card) => {
      const timeline = replays.get(card.id);
      timeline?.kill();
      gsap.set(card.querySelectorAll('[data-motion]'), { clearProps: 'all' });
      card.querySelectorAll('[data-replay]').forEach((button) => { button.hidden = true; });
    });
    gsap.set(introTargets, { clearProps: 'all' });
  };
  reduceMotion.addEventListener?.('change', handleMotionPreference);
})();
