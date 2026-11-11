/* ═══════════════════════════════════════════════════════════════════
   ROJAN ROY — CREATIVE PORTFOLIO INTERACTIONS
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Project Case Studies Data ───
  const CASE_STUDIES = {
    ferrari: {
      tag: "Creative Development · Automotive UI/UX",
      title: "Ferrari 296 GTB — Kerala Edition Futuristic Concept",
      tagline: "“Where Maranello aerodynamic precision meets the soul of Kerala.”",
      image: "ferrari-kerala/assets/ferrari-296-side.jpg",
      role: "Creative Developer & UI Designer",
      duration: "November 2026",
      tools: "HTML5, Advanced CSS3, Web Audio API, Vanilla JS",
      overview: "An independent, high-performance web experience reimagining the Ferrari 296 GTB sports car tailored for Kerala's landscapes. Incorporating real-time audio synthesis, dynamic eManettino drive themes, 3D perspective mouse-tilt physics, and bilingual Malayalam/English telemetry HUD.",
      problem: "Traditional automotive landing pages are often static and non-interactive, missing the visceral excitement, roar, and precision engineering that define Ferrari.",
      solution: "Engineered an immersive, futuristic web experience featuring interactive 360° inspection views, pulsing telemetry hotspots, a native browser Web Audio API engine rev synthesizer, and dynamic drive mode toggles that transform the entire site's lighting and acoustics.",
      steps: [
        "1. Interactive eManettino Switcher: 4 distinct drive modes (eDrive, Hybrid, Performance, Qualify) dynamically updating site theme colors and specs.",
        "2. Native Web Audio Engine: Synthesizes hybrid V6 engine roars and tactile HUD acoustic clicks with zero external audio assets.",
        "3. Virtual Inspection Bay: Interactive vehicle angle switcher with pulsing HUD hotspots detailing engine, aero, and braking components.",
        "4. 3D Perspective Tilt & Specular Lighting: Physics-based mouse tracking and dynamic lighting sheen across all presentation cards.",
        "5. Full Bilingual Localization: English and Malayalam typography and telemetry readouts."
      ],
      link: "ferrari-kerala/",
      linkText: "Launch Live Interactive Website 🚀"
    },

    nanora: {
      tag: "UI/UX Case Study · Concept Project",
      title: "Nanora — Childcare & Early Learning Marketplace",
      tagline: "“Trust first, clarity second, convenience third.”",
      image: "assets/projects/nanora-brand.jpg",
      role: "UX/UI Designer",
      duration: "Concept Design (2026)",
      tools: "Figma, Miro, Adobe Illustrator",
      overview: "Nanora is a two-sided childcare platform concept that connects families with verified nanny-tutors and specialized caregivers. Designed for children ages 1–5, the experience anchors itself in UNICEF Early Childhood Development frameworks—combining nurturing safety with cognitive early learning.",
      problem: "Finding trustworthy childcare is fraught with anxiety. Existing platforms lack transparent vetting criteria, fail to provide granular filtering for specialized needs (like developmental disabilities or learning support), and treat caregiving as a generic transaction rather than a relationship of trust.",
      solution: "We designed an information architecture centered on a 5-step user journey, paired with a 4-tier caregiver vetting badge system. The platform distinguishes between three distinct care services: Nanny-Tutors, Specialized Care, and Respite Care.",
      steps: [
        "1. Tell us what you need: Child age, care type, schedule, and specialized requirements.",
        "2. Discover caregivers: High-transparency filtering by verified credentials and availability.",
        "3. Compare & understand: In-depth caregiver profiles with parent reviews and care philosophies.",
        "4. Request & book: Real-time schedule integration and inquiry channels.",
        "5. Manage ongoing care: Integrated schedule tracking, daily notes, and family messaging."
      ],
      sitemap: "The complete sitemap encompasses 12 dedicated pages—balancing dual onboarding flows for parents and caregivers, a trust & safety center, and transparent service tiers.",
      link: "case-nanora.html",
      figmaLink: "https://www.figma.com/design/klnUPGZXtfZLhOvzbqwynk/Nanora-%E2%80%94-Landing-Page?node-id=0-1&t=Zf918zWOVC3KPX6T-1"
    },

    nexora: {
      tag: "UI/UX Design · Group Mobile App Project",
      title: "Nexora — All-in-One Planner & Travel Companion",
      tagline: "Streamlining daily productivity, habits, and complex travel workflows.",
      image: "assets/projects/nexora-travel-ui.png",
      role: "UI/UX Designer (Group Project)",
      duration: "2026",
      tools: "Figma, Miro, iOS Design System",
      overview: "Nexora is a comprehensive personal planning ecosystem designed to bring tasks, habits, and itineraries into a single seamless mobile interface. The showcased module focuses on the high-fidelity Travel Planner interface.",
      problem: "Users often juggle multiple disconnected apps for flight bookings, itinerary planning, packing lists, and trip budgets, causing confusion and missed details during travels.",
      solution: "Nexora unifies travel management with an active countdown hero card ('Bali, Indonesia 🌴'), quick action hubs (Itinerary, Packing List, Budget Tracker, Travel Docs), and live completion progress meters.",
      steps: [
        "User Persona & Empathy Mapping across frequent travelers and busy professionals.",
        "Card sorting to consolidate disparate productivity tasks into 4 primary navigation hubs.",
        "High-fidelity iOS design system with high-contrast dark mode, violet gradient accents (#7C3AED), and tactile card micro-interactions."
      ],
      link: null,
      figmaLink: "https://www.figma.com/design/Gj42Sg2bZHQEIdlUqwu649/02-NEXORA---Group-project?node-id=0-1&t=zrcPDKEJQ16pHXGn-1",
      protoLink: "https://www.figma.com/proto/Gj42Sg2bZHQEIdlUqwu649/02-NEXORA---Group-project?node-id=2038-5&t=XMoTofQCBeOGoGYm-1&scaling=scale-down&content-scaling=fixed&page-id=126%3A55&starting-point-node-id=2194%3A376&show-proto-sidebar=1"
    },

    dasandco: {
      tag: "Brand Identity · Graphic Design",
      title: "Dasandco — Luxury Footwear & Packaging System",
      tagline: "“Step Into Elegance” — Timeless craftsmanship meets modern luxury.",
      image: "assets/projects/dasandco-brand.png",
      role: "Lead Brand Identity Designer",
      duration: "2025",
      tools: "Adobe Illustrator, Adobe Photoshop",
      overview: "A luxury footwear brand guidelines and identity system. Built around themes of genuine craftsmanship, full-grain leather, and timeless silhouette design.",
      problem: "Creating an identity that feels simultaneously heritage-rooted and contemporary, capable of scaling across embossed shoe packaging, metal blade signage, and digital storefronts.",
      solution: "Designed a bespoke monogram 'D' that gracefully incorporates the silhouette of a handcrafted dress shoe. Developed a high-contrast luxury palette (Pitch Black, Metallic Gold #D4AF37, Saddle Leather Brown #5A3A22) and tactile matte black packaging with gold foil debossing.",
      steps: [
        "Crafted primary monogram and wordmark typography using tracked Poppins bold.",
        "Specified comprehensive brand guidelines including color formulas and clear space rules.",
        "Designed physical touchpoints: premium shoe boxes, shopping bags, and exterior signage."
      ],
      link: null
    },

    quor: {
      tag: "Brand Identity · Packaging & Merchandise",
      title: "Quor House — Artisanal Coffee Roastery",
      tagline: "360-degree brand experience for a boutique coffee house founded in 2022.",
      image: "assets/projects/quor-house-brand-cover.jpg",
      role: "Brand & Graphic Designer",
      duration: "2024",
      tools: "Illustrator, Photoshop, 3D Product Mockups",
      overview: "An end-to-end brand identity system for Quor House, an artisanal roastery and cafe. The project extends from the core coffee bean logomark across physical stationery, packaging, merchandise, and digital app touchpoints.",
      problem: "Designing an earthy yet sophisticated brand identity that stands out in a crowded specialty coffee market.",
      solution: "Created a distinctive custom serif wordmark integrating a roasted coffee bean into the negative space of the letter 'Q'. Paired a rich Forest Green (#1E5631) and Terracotta Brown (#A0522D) with organic kraft paper textures.",
      steps: [
        "Brand Guidelines & Identity Standards V.1 defining clear space, hierarchy, and core color system.",
        "Logo Construction & Geometry: Precise modular grid balancing serif letterforms with coffee bean aperture.",
        "Corporate Stationery: Grid-aligned letterhead with minimalist branding on warm recycled kraft stock.",
        "Digital Touchpoints: Dedicated favicon mark engineered for crisp pixel-level clarity across browsers."
      ],
      gallery: [
        { src: "assets/projects/quor-house-construction.png", caption: "Grid & Geometry — Precision Logo Construction" },
        { src: "assets/projects/quor-house-cup.png", caption: "3D Product Application — Ceramic Takeaway Roastery Mug" },
        { src: "assets/projects/quor-house-letterhead-guidelines.jpg", caption: "Brand Stationery — Official Letterhead & Layout Guidelines" },
        { src: "assets/projects/quor-house-favicon.png", caption: "Digital Favicon & Browser Interface Touchpoint" },
        { src: "assets/projects/quor-house-cards.png", caption: "Tactile Business Cards on Basalt Presentation" }
      ],
      link: null
    },

    royal: {
      tag: "Logo Design · Negative Space Identity",
      title: "Royal Upholstery — Bespoke Tailoring & Furniture Mark",
      tagline: "A delicate ligature combining needle, thread, and shears.",
      image: "assets/projects/royal-upholstery-sign.png",
      role: "Graphic Designer",
      duration: "2024",
      tools: "Adobe Illustrator, Photoshop",
      overview: "A clever conceptual monogram and architectural signage for Royal Upholstery, a high-end bespoke upholstery and furniture atelier.",
      problem: "Communicating precision tailoring, craftsmanship, and regal sophistication in a single unified mark.",
      solution: "Formed the letter 'R' from a threading needle and loop of fabric ribbon, which curls seamlessly into the letter 'U' where tailoring shears cut cleanly through the ribbon tip. Rendered in deep royal blue to indigo gradients.",
      steps: [
        "Extensive pencil sketching exploring negative-space scissors and needle loops.",
        "Vector geometric bezier curve refinement for crisp scaling at any resolution.",
        "3D exterior hanging blade sign visualization on limestone masonry."
      ],
      link: null
    },

    wolfx: {
      tag: "Logo Design · Brand Identity",
      title: "WOLFX Bikes — Final Year Brand Identity Project",
      tagline: "Explore the world of WOLFX Bikes.",
      image: "assets/projects/wolfx-logo.jpg",
      role: "Lead Graphic Designer",
      duration: "2024 — Final Year Project",
      tools: "Adobe Illustrator, Photoshop",
      overview: "WOLFX is a bold, high-energy brand identity for a mountain biking company, built around a geometric wolf-head emblem integrated into a custom wordmark. From a clean black-and-white logo system to full brand applications across merch, event posters, and outdoor advertising.",
      problem: "Design a brand mark that captures raw power, precision, and the adrenaline of mountain biking — using a bold typeface anchored by an iconic, integrated symbol.",
      solution: "A geometric wolf-head icon that slots inside the letter 'O' of WOLFX, referencing speed and predatory agility. The stark black-and-white palette keeps the mark versatile across all surfaces — from jersey prints to billboard hoardings.",
      steps: [
        "Sketched and refined the wolf-head geometry — bold, angular, and legible at small sizes.",
        "Developed full brand applications: business cards, event posters, social ads, merchandise (sneakers, caps, T-shirts), and outdoor billboards."
      ],
      gallery: [
        { src: "assets/projects/wolfx-applications.jpg", caption: "Brand Rollout — Merch, Apparel, Event Collateral & Mega-Stadium Billboard" }
      ],
      link: null
    }
  };

  // ─── Drawer Elements ───
  const drawer = document.getElementById('caseDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const drawerClose = document.getElementById('drawerClose');
  const drawerContent = document.getElementById('drawerContent');

  function openDrawer(projectId) {
    const data = CASE_STUDIES[projectId];
    if (!data) return;

    let stepsHtml = '';
    if (data.steps && data.steps.length) {
      stepsHtml = `
        <h3 class="drawer-section-h3">Key Deliverables & Process</h3>
        <ul class="drawer-list">
          ${data.steps.map(s => `<li>${s}</li>`).join('')}
        </ul>
      `;
    }

    let actionsHtml = '';
    if (data.link || data.figmaLink || data.protoLink) {
      actionsHtml = `
        <div style="margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--line-subtle); display: flex; flex-direction: column; gap: 12px;">
          ${data.protoLink ? `
            <a href="${data.protoLink}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="width: 100%; justify-content: center; gap: 8px;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Run Interactive Prototype 📱
            </a>
          ` : ''}
          ${data.figmaLink ? `
            <a href="${data.figmaLink}" target="_blank" rel="noopener noreferrer" class="btn ${data.protoLink ? 'btn--ghost' : 'btn--primary'}" style="width: 100%; justify-content: center; gap: 8px;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 2a4 4 0 0 0 0 8h4V2H8zm8 0h-4v8h4a4 4 0 1 0 0-8zm-8 8a4 4 0 0 0 0 8h4v-8H8zm8 0h-4v8a4 4 0 1 0 4-4 4 4 0 0 0 0-4zm-8 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4H8z"/></svg>
              ${data.protoLink ? 'Inspect Design File in Figma ↗' : 'Explore Live in Figma ↗'}
            </a>
          ` : ''}
          ${data.link ? `
            <a href="${data.link}" ${data.linkText ? 'target="_blank" rel="noopener noreferrer"' : ''} class="btn ${data.linkText ? 'btn--primary' : 'btn--ghost'}" style="width: 100%; justify-content: center; gap: 8px;">
              ${data.linkText || 'Open Dedicated Case Study Page →'}
            </a>
          ` : ''}
        </div>
      `;
    }

    let galleryHtml = '';
    if (data.gallery && data.gallery.length > 0) {
      galleryHtml = `
        <h3 class="drawer-section-h3">Visual Artifacts & Brand Standards</h3>
        <div class="drawer-gallery">
          ${data.gallery.map(item => `
            <div class="drawer-gallery__item">
              <img src="${item.src}" alt="${item.caption || data.title}" class="drawer-gallery__img" loading="lazy" />
              ${item.caption ? `<div class="drawer-gallery__caption">${item.caption}</div>` : ''}
            </div>
          `).join('')}
        </div>
      `;
    }

    drawerContent.innerHTML = `
      <span class="drawer-tag">${data.tag}</span>
      <h2 class="drawer-title">${data.title}</h2>
      <p class="drawer-tagline">${data.tagline}</p>

      <img src="${data.image}" alt="${data.title}" class="drawer-hero-img" />

      <div class="drawer-meta-grid">
        <div class="drawer-meta-item">
          <span>Role</span>
          <strong>${data.role}</strong>
        </div>
        <div class="drawer-meta-item">
          <span>Timeline</span>
          <strong>${data.duration}</strong>
        </div>
        <div class="drawer-meta-item">
          <span>Toolstack</span>
          <strong>${data.tools}</strong>
        </div>
      </div>

      <h3 class="drawer-section-h3">Project Overview</h3>
      <p class="drawer-p">${data.overview}</p>

      <div class="drawer-quote">
        ${data.problem}
      </div>

      <h3 class="drawer-section-h3">Design Solution</h3>
      <p class="drawer-p">${data.solution}</p>

      ${stepsHtml}

      ${galleryHtml}

      ${actionsHtml}
    `;

    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    drawer.setAttribute('aria-hidden', 'false');
    backdrop.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    drawer.setAttribute('aria-hidden', 'true');
    backdrop.setAttribute('aria-hidden', 'true');
  }

  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Attach click to all work cards and hero strip items
  document.querySelectorAll('[data-project]').forEach(el => {
    el.addEventListener('click', () => {
      const pId = el.getAttribute('data-project');
      openDrawer(pId);
    });
  });

  // ─── Works Category Filtering ───
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');

      workCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
          setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ─── Mobile Navigation Toggle ───
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ─── Smooth Scrolling for Anchor Links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = 90;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
        history.pushState(null, '', targetId);
      }
    });
  });

  // ─── Active Navigation Link on Scroll ───
  const sections = document.querySelectorAll('section[id]');
  const navLinksList = document.querySelectorAll('.glass-nav__link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinksList.forEach(l => {
          l.classList.remove('active');
          if (l.getAttribute('href') === `#${id}`) {
            l.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  // ─── Footer Year ───
  const yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = `© ${new Date().getFullYear()}`;
  }

  // ─── Dual CV Dropdown Interactions ───
  const cvDropdowns = document.querySelectorAll('.cv-dropdown');
  cvDropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.cv-dropdown__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      // close all dropdowns
      cvDropdowns.forEach(d => {
        d.classList.remove('open');
        const btn = d.querySelector('.cv-dropdown__trigger');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        dropdown.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close dropdowns on outside click or escape
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.cv-dropdown')) {
      cvDropdowns.forEach(d => {
        d.classList.remove('open');
        const btn = d.querySelector('.cv-dropdown__trigger');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cvDropdowns.forEach(d => {
        d.classList.remove('open');
        const btn = d.querySelector('.cv-dropdown__trigger');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

})();
