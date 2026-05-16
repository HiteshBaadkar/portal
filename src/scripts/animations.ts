import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // ── Hero load sequence ──────────────────────────────────────────
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.8 })
    .from('.hero-line', { y: 60, opacity: 0, duration: 1, stagger: 0.15 }, '-=0.4')
    .from('.hero-body', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
    .from('.hero-cta', { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')
    .from('.hero-trust', { opacity: 0, duration: 0.6 }, '-=0.3');

  // ── Generic fade-up on scroll ────────────────────────────────────
  gsap.utils.toArray<HTMLElement>('.anim-up').forEach(el => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ── Staggered children ────────────────────────────────────────────
  gsap.utils.toArray<HTMLElement>('.anim-stagger').forEach(parent => {
    const children = parent.querySelectorAll(':scope > *');
    gsap.from(children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: parent,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ── Image scale reveal ───────────────────────────────────────────
  gsap.utils.toArray<HTMLElement>('.anim-img').forEach(el => {
    gsap.from(el, {
      scale: 1.08,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ── Horizontal line draw ─────────────────────────────────────────
  gsap.utils.toArray<HTMLElement>('.anim-line').forEach(el => {
    gsap.from(el, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
      },
    });
  });

  // ── Process step cards ────────────────────────────────────────────
  gsap.utils.toArray<HTMLElement>('.process-card').forEach((card, i) => {
    gsap.from(card, {
      y: 70,
      opacity: 0,
      duration: 0.9,
      delay: i * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ── SVG stitch animation ──────────────────────────────────────────
  const stitchPath = document.querySelector<SVGPathElement>('.stitch-path');
  if (stitchPath) {
    const length = stitchPath.getTotalLength();
    gsap.set(stitchPath, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(stitchPath, {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#stitch-trigger',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });
    // Needle dot follows the path
    const needle = document.querySelector<HTMLElement>('.stitch-needle');
    if (needle) {
      gsap.to({ progress: 0 }, {
        progress: 1,
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: function () {
          const pt = stitchPath.getPointAtLength(this.targets()[0].progress * length);
          needle.style.left = pt.x + 'px';
          needle.style.top = pt.y + 'px';
        },
        scrollTrigger: {
          trigger: '#stitch-trigger',
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }

  // ── Instagram grid tiles pop in ───────────────────────────────────
  const igGrid = document.querySelector('.ig-grid');
  if (igGrid) {
    const tiles = igGrid.querySelectorAll('a');
    gsap.from(tiles, {
      scale: 0.85,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.4)',
      stagger: { amount: 0.5, from: 'center' },
      scrollTrigger: {
        trigger: igGrid,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }
}
