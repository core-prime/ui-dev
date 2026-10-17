/* ═══════════════════════════════════════════
   ROJAN ROY — PORTFOLIO INTERACTIONS
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Dynamic Copyright Year ───
  const copyrightEl = document.querySelector('.footer__copyright');
  if (copyrightEl) {
    copyrightEl.textContent = `© ${new Date().getFullYear()} Rojan Roy. All rights reserved.`;
  }

  // ─── Mobile Navigation Toggle ───
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });
  }

  // ─── Smooth Scroll for Anchor Links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = 64;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without scroll jump
        history.pushState(null, '', targetId);
      }
    });
  });

  // ─── Scroll Reveal Animation ───
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    // Add fade-in class to elements
    const animateElements = [
      '.hero__content',
      '.hero__images',
      '.projects__header',
      '.project-card',
      '.featured__text',
      '.featured__visual',
      '.approach__header',
      '.approach__card',
      '.experience__block',
      '.skills__block',
      '.resume-download',
      '.strengths__heading',
      '.strengths__item',
      '.contact__container',
    ];

    animateElements.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add('fade-in');
      });
    });

    // Add stagger class to grids
    document.querySelectorAll('.projects__grid, .approach__cards, .strengths__grid').forEach(el => {
      el.classList.add('stagger');
    });

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }

  // ─── Active Navigation Highlight ───
  const sections = document.querySelectorAll('section[id]');
  const navLinkElements = document.querySelectorAll('.nav__link');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 80;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinkElements.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Throttled scroll listener
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ─── Nav background on scroll ───
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 1px 8px rgba(0, 0, 0, 0.04)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });

})();
