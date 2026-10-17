/* ═══════════════════════════════════════════════════════════════════
   ROJAN ROY — CREATIVE PORTFOLIO INTERACTIONS
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Project Case Studies Data ───
  const CASE_STUDIES = {
    nanora: {
      tag: "UI/UX Case Study · Concept Project",
      title: "Nanora — Childcare & Early Learning Marketplace",
      tagline: "“Trust first, clarity second, convenience third.”",
      image: "assets/projects/nanora-logo.png",
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
      link: "case-nanora.html"
    },

    nexora: {
      tag: "UI/UX Design · Mobile App Concept",
      title: "Nexora — All-in-One Planner & Travel Companion",
      tagline: "Streamlining daily productivity, habits, and complex travel workflows.",
      image: "assets/projects/nexora-travel-ui.png",
      role: "UI/UX Designer (Group Concept)",
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
      link: null
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
      image: "assets/projects/quor-house-cup.png",
      role: "Brand & Graphic Designer",
      duration: "2024",
      tools: "Illustrator, Photoshop, 3D Product Mockups",
      overview: "An end-to-end brand identity system for Quor House, an artisanal roastery and cafe. The project extends from the core coffee bean logomark across physical stationery, packaging, merchandise, and digital app touchpoints.",
      problem: "Designing an earthy yet sophisticated brand identity that stands out in a crowded specialty coffee market.",
      solution: "Created a distinctive custom serif wordmark integrating a roasted coffee bean into the negative space of the letter 'Q'. Paired a rich Forest Green (#1E5631) and Terracotta Brown (#A0522D) with organic kraft paper textures.",
      steps: [
        "Dual-sided business cards staged on basalt stone cubes.",
        "Eco-friendly kraft coffee bean pouches with roast origin labeling.",
        "Embroidered polo staff uniforms and custom geometric cap apparel.",
        "Rustic wooden sidewalk A-frame chalkboard sign for foot traffic.",
        "iOS squircle app icon design for mobile loyalty ordering."
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

    tailor: {
      tag: "Graphic Design · Print Craft",
      title: "Fashion Monogram — Measuring Tape Letterpress",
      tagline: "Minimalist geometry meets tactile material craft.",
      image: "assets/projects/tailor-x-logo.png",
      role: "Graphic Designer",
      duration: "2024",
      tools: "Adobe Illustrator, Photoshop",
      overview: "A minimalist monogram concept where a flexible tailoring measuring tape forms the letterform, stamped as a deep letterpress deboss on heavy cotton rag paper.",
      problem: "Creating a stripped-down mark that celebrates the tools of the tailoring trade without visual clutter.",
      solution: "Carefully calibrated tick marks and tape finials along the diagonal stroke to produce an unmistakable tailoring motif while preserving letterform balance.",
      steps: [
        "Explored scale, measurement intervals, and negative space stroke weight.",
        "Created realistic tactile paper deboss mockups showing ink-free letterpress depth."
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

    let linkHtml = '';
    if (data.link) {
      linkHtml = `
        <div style="margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--line-subtle);">
          <a href="${data.link}" class="btn btn--primary" style="width: 100%;">
            Open Dedicated Case Study Page →
          </a>
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

      ${linkHtml}
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

})();
