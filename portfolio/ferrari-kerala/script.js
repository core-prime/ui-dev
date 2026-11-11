/**
 * FERRARI KERALA — FUTURISTIC 296 GTB CONCEPT
 * Cyber Telemetry, 3D Perspective Tilt, Audio Engine, & UI Controller
 */

// ==========================================
// 1. STATE & DOM REFERENCES
// ==========================================
const languageButton = document.getElementById("language-button");
const menuButton = document.getElementById("menu-button");
const menuPanel = document.getElementById("site-menu");
const audioToggle = document.getElementById("audio-toggle");
const heroRevBtn = document.getElementById("hero-rev-btn");
const preloader = document.getElementById("preloader");
const preloaderBar = document.getElementById("preloader-bar");
const preloaderText = document.getElementById("preloader-text");

// Hero elements
const sceneImage = document.getElementById("scene-image");
const heroScene = document.getElementById("hero-scene");
const slideTitle = document.getElementById("slide-title");
const slideKicker = document.getElementById("slide-kicker");
const slideDescription = document.getElementById("slide-description");
const carouselCount = document.getElementById("carousel-count");
const carouselDots = document.querySelectorAll(".carousel-dot");

// Model Inspection Bay
const modelMainImg = document.getElementById("model-main-img");
const viewTabs = document.querySelectorAll(".view-tab");
const emanettinoBtns = document.querySelectorAll(".emanettino-btn");
const modeStatusText = document.getElementById("mode-status-text");
const visualCaptionText = document.getElementById("visual-caption-text");
const hotspots = document.querySelectorAll(".hotspot");

// Slides Data
const slides = [
  {
    kicker: "01 // KINETIC ARRIVAL",
    kickerMalayalam: "01 // സങ്കൽപ്പത്തിലെ വരവ്",
    title: "Redefining Speed<br>for the <em>Western Ghats.</em>",
    titleMalayalam: "വേഗത്തിന്റെ പുതിയ മുഖം,<br>കേരളത്തിനായി <em>സങ്കൽപ്പിച്ചത്.</em>",
    english: "A cinematic, futuristic vision fusing Maranello engineering with the monsoon soul of Kerala. 830 CV unleashed on coastal tarmac.",
    malayalam: "മാരനെല്ലോയുടെ എഞ്ചിനീയറിംഗും കേരളത്തിന്റെ പ്രകൃതി സൗന്ദര്യവും സമന്വയിക്കുന്ന സിനിമാറ്റിക് പോർട്ട്ഫോളിയോ ആശയം. 830 കുതിരശക്തിയുടെ വിസ്മയം.",
    image: "assets/kerala-car.jpg",
    label: "Illustrative photograph of a red Ferrari for an independent Kerala launch concept"
  },
  {
    kicker: "02 // 296 GTB ARCHITECTURE",
    kickerMalayalam: "02 // 296 GTB ആർക്കിടെക്ചർ",
    title: "Sculpted by<br>the <em>Wind Tunnel.</em>",
    titleMalayalam: "കാറ്റിന്റെ വേഗത്തിൽ<br>കൊത്തിയെടുത്ത <em>രൂപഭംഗി.</em>",
    english: "Compact proportions, active aerodynamics, and unprecedented plug-in hybrid dynamics.",
    malayalam: "ഒതുക്കമുള്ള രൂപവും ആക്ടീവ് എയറോഡൈനാമിക്സും നൽകുന്ന സമാനതകളില്ലാത്ത പ്രകടനം.",
    image: "assets/ferrari-296-side.jpg",
    label: "Photograph of a yellow Ferrari 296 GTB side profile"
  },
  {
    kicker: "03 // ACOUSTIC HARMONICS",
    kickerMalayalam: "03 // സംഗീതം പോലൊരു ഗർജ്ജനം",
    title: "The Piccolo V12<br><em>Soundtrack.</em>",
    titleMalayalam: "ചെറിയ V12 എന്നറിയപ്പെടുന്ന<br><em>മാന്ത്രിക ശബ്ദം.</em>",
    english: "A 120-degree V6 engine delivering the acoustic purity of a naturally aspirated V12 engine.",
    malayalam: "120 ഡിഗ്രി V6 എഞ്ചിൻ സമ്മാനിക്കുന്ന പ്രകൃതിദത്ത V12 ശബ്ദസൗകുമാര്യം.",
    image: "assets/ferrari-296-front.jpg",
    label: "Photograph of a dark gray Ferrari 296 GTB"
  }
];

let currentSlide = 0;
let audioEnabled = false;
let audioCtx = null;

// ==========================================
// 2. WEB AUDIO API SYNTHESIZER ENGINE
// ==========================================
function initAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

// Synthesize high-tech telemetry UI click
function playUiBlip(freq = 800, type = "sine", duration = 0.06) {
  if (!audioEnabled) return;
  try {
    initAudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.4, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    console.warn("Audio unavailable:", err);
  }
}

// Synthesize Ferrari Twin-Turbo V6 Hybrid Engine Rev
function playEngineRev(mode = "hybrid") {
  initAudioContext();
  if (!audioCtx) return;

  try {
    const now = audioCtx.currentTime;
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const subOsc = audioCtx.createOscillator();
    const filter = audioCtx.createBiquadFilter();
    const gain = audioCtx.createGain();

    // Harmonic settings
    osc1.type = "sawtooth";
    osc2.type = "triangle";
    subOsc.type = "sine";

    let baseFreq = 85;
    let peakFreq = 260;
    let duration = 1.6;

    if (mode === "edrive") {
      // Futuristic EV turbine sweep
      osc1.type = "sine";
      osc2.type = "sine";
      baseFreq = 300;
      peakFreq = 950;
      duration = 1.8;
    } else if (mode === "qualify") {
      baseFreq = 110;
      peakFreq = 420;
      duration = 2.0;
    }

    // Pitch sweep
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(peakFreq, now + duration * 0.45);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 1.1, now + duration);

    osc2.frequency.setValueAtTime(baseFreq * 1.5, now);
    osc2.frequency.exponentialRampToValueAtTime(peakFreq * 1.5, now + duration * 0.45);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 1.6, now + duration);

    subOsc.frequency.setValueAtTime(baseFreq * 0.5, now);
    subOsc.frequency.exponentialRampToValueAtTime(peakFreq * 0.5, now + duration * 0.45);
    subOsc.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, now + duration);

    // Filter sweep (Turbo resonance)
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(mode === "edrive" ? 1800 : 800, now);
    filter.frequency.exponentialRampToValueAtTime(mode === "edrive" ? 4500 : 3200, now + duration * 0.45);
    filter.frequency.exponentialRampToValueAtTime(600, now + duration);

    // Gain envelope
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(mode === "edrive" ? 0.08 : 0.16, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc1.start(now);
    osc2.start(now);
    subOsc.start(now);

    osc1.stop(now + duration);
    osc2.stop(now + duration);
    subOsc.stop(now + duration);
  } catch (err) {
    console.warn("Engine sound error:", err);
  }
}

// Audio Toggle Event
if (audioToggle) {
  audioToggle.addEventListener("click", () => {
    audioEnabled = !audioEnabled;
    audioToggle.classList.toggle("audio-active", audioEnabled);
    const label = audioToggle.querySelector(".audio-label");
    const lang = document.documentElement.lang;

    if (audioEnabled) {
      initAudioContext();
      playUiBlip(1200, "sine", 0.08);
      label.textContent = lang === "ml" ? "ശബ്ദം : ഓൺ" : "AUDIO : ON";
    } else {
      label.textContent = lang === "ml" ? "ശബ്ദം : ഓഫ്" : "AUDIO : OFF";
    }
  });
}

// Hero Engine Rev Button
if (heroRevBtn) {
  heroRevBtn.addEventListener("click", () => {
    const currentMode = document.body.dataset.driveMode || "hybrid";
    playEngineRev(currentMode);
  });
}

// ==========================================
// 3. PRELOADER & TELEMETRY BOOT
// ==========================================
async function startExperience() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 18) + 10;
    if (progress > 100) progress = 100;
    if (preloaderBar) preloaderBar.style.width = `${progress}%`;
    if (preloaderText) preloaderText.textContent = `SYSTEM INITIALIZATION: ${progress}%`;

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        document.body.classList.add("is-visible");
        if (preloader) preloader.classList.add("is-hidden");
        document.body.classList.remove("is-loading");
        initCounterAnimations();
      }, 400);
    }
  }, 120);

  showSlide(0);
}

// ==========================================
// 4. CUSTOM CYBER CURSOR WITH TRAIL
// ==========================================
const cursor = document.getElementById("custom-cursor");
const cursorTrail = document.getElementById("cursor-trail");
let mouseX = -100, mouseY = -100;
let trailX = -100, trailY = -100;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (cursor) {
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  }
});

function renderCursorTrail() {
  trailX += (mouseX - trailX) * 0.18;
  trailY += (mouseY - trailY) * 0.18;

  if (cursorTrail) {
    cursorTrail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;
  }
  requestAnimationFrame(renderCursorTrail);
}
requestAnimationFrame(renderCursorTrail);

// Cursor hover state triggers
const interactiveElements = document.querySelectorAll("a, button, [data-tilt], .hotspot-trigger, .carousel-dot, .emanettino-btn");
interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    document.body.classList.add("cursor-hover");
    playUiBlip(1600, "triangle", 0.04);
  });
  el.addEventListener("mouseleave", () => {
    document.body.classList.remove("cursor-hover");
  });
});

// ==========================================
// 5. 3D PERSPECTIVE TILT ON HOVER
// ==========================================
const tiltElements = document.querySelectorAll("[data-tilt]");

tiltElements.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

    // Specular Glare position
    const glare = el.querySelector(".card-glare");
    if (glare) {
      glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.28) 0%, transparent 60%)`;
    }
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  });
});

// ==========================================
// 6. HERO SLIDESHOW LOGIC
// ==========================================
function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  const slide = slides[currentSlide];
  const lang = document.documentElement.lang;

  slideKicker.textContent = lang === "ml" ? slide.kickerMalayalam : slide.kicker;
  slideTitle.innerHTML = lang === "ml" ? slide.titleMalayalam : slide.title;
  slideDescription.textContent = lang === "ml" ? slide.malayalam : slide.english;
  sceneImage.style.backgroundImage = `url("${slide.image}")`;
  heroScene.setAttribute("aria-label", slide.label);
  carouselCount.innerHTML = `0${currentSlide + 1} <i>/</i> 0${slides.length}`;

  carouselDots.forEach((dot, dotIndex) => {
    const active = dotIndex === currentSlide;
    dot.classList.toggle("is-active", active);
    if (active) {
      dot.setAttribute("aria-current", "true");
    } else {
      dot.removeAttribute("aria-current");
    }
  });
}

document.getElementById("previous-slide")?.addEventListener("click", () => {
  playUiBlip(700, "sine");
  showSlide(currentSlide - 1);
});

document.getElementById("next-slide")?.addEventListener("click", () => {
  playUiBlip(800, "sine");
  showSlide(currentSlide + 1);
});

carouselDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    playUiBlip(900, "sine");
    showSlide(Number(dot.dataset.slide));
  });
});

// ==========================================
// 7. KINETIC COUNTER ANIMATION
// ==========================================
function initCounterAnimations() {
  const counters = document.querySelectorAll(".counter");
  const speed = 40;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseFloat(counter.getAttribute("data-target"));
          const isDecimal = target % 1 !== 0;

          let count = 0;
          const increment = target / speed;

          const updateCounter = () => {
            count += increment;
            if (count < target) {
              counter.innerText = isDecimal ? count.toFixed(1) : Math.ceil(count);
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerText = target;
            }
          };

          updateCounter();
          obs.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => observer.observe(c));
}

// ==========================================
// 8. MODEL INSPECTION BAY & ANGLE SWITCHER
// ==========================================
const angleImages = {
  side: {
    src: "assets/ferrari-296-side.jpg",
    en: "SIDE PROFILE & AERO BALANCE: Assetto Fiorano configuration with carbon ceramic package.",
    ml: "സൈഡ് പ്രൊഫൈൽ: കാർബൺ സെറാമിക് പാക്കേജും അസെറ്റോ ഫിയോറാനോ കോൺഫിഗറേഷനും."
  },
  front: {
    src: "assets/ferrari-296-front.jpg",
    en: "FRONT TEATRAY SPLITTER: Integrated tea-tray aero creating high localized downforce.",
    ml: "ഫ്രണ്ട് ടീട്രേ സ്പ്ലിറ്റർ: ഉയർന്ന ഡൗൺഫോഴ്സ് നൽകുന്ന എയറോഡൈനാമിക് ഘടന."
  },
  rear: {
    src: "assets/ferrari-296-rear.jpg",
    en: "ACTIVE SPOILER & DIFFUSER: Generates 360 kg downforce at high speed with central exhaust.",
    ml: "ആക്ടീവ് സ്പോയിലറും ഡിഫ്യൂസറും: അതിവേഗത്തിൽ 360 കി.ഗ്രാം ഡൗൺഫോഴ്സ് നൽകുന്നു."
  },
  detail: {
    src: "assets/ferrari-296-detail.jpg",
    en: "COCKPIT CRAFT & DETAIL: Ergonomic driver-centric display with haptic touch controls.",
    ml: "കോക്ക്പിറ്റ് ഡിസൈൻ: ഡ്രൈവർ കേന്ദ്രീകൃത ഡിജിറ്റൽ ഡിസ്പ്ലേയും സ്പർശന നിയന്ത്രണങ്ങളും."
  }
};

viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    viewTabs.forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");

    const angle = tab.getAttribute("data-angle");
    const data = angleImages[angle];
    const lang = document.documentElement.lang;

    playUiBlip(1000, "triangle", 0.08);

    if (data && modelMainImg) {
      modelMainImg.style.opacity = "0.2";
      setTimeout(() => {
        modelMainImg.src = data.src;
        modelMainImg.style.opacity = "1";
      }, 180);

      if (visualCaptionText) {
        visualCaptionText.textContent = lang === "ml" ? data.ml : data.en;
      }
    }
  });
});

// ==========================================
// 9. eMANETTINO DRIVE MODE SYSTEM
// ==========================================
const modeDescriptions = {
  edrive: {
    en: "eDRIVE MODE ACTIVE: Full electric propulsion. 25 km silent range up to 135 km/h.",
    ml: "ഇ-ഡ്രൈവ് മോഡ്: പൂർണ്ണ ഇലക്ട്രിക് പ്രവർത്തനം. 25 കി.മീ നിശബ്ദ റേഞ്ച്."
  },
  hybrid: {
    en: "HYBRID MODE ACTIVE: Intelligent energy management between V6 and MGU-K electric motor.",
    ml: "ഹൈബ്രിഡ് മോഡ്: V6 എഞ്ചിനും ഇലക്ട്രിക് മോട്ടോറും തമ്മിലുള്ള കാര്യക്ഷമമായ ഊർജ്ജ വിനിയോഗം."
  },
  performance: {
    en: "PERFORMANCE MODE ACTIVE: Combustion engine continuously engaged with rapid battery replenishment.",
    ml: "പെർഫോമൻസ് മോഡ്: V6 എഞ്ചിൻ പൂർണ്ണ കരുത്തിൽ, വേഗത്തിലുള്ള ബാറ്ററി ചാർജിംഗ്."
  },
  qualify: {
    en: "QUALIFY MODE ACTIVE: 830 CV total unrestricted power unleashed for peak lap times.",
    ml: "ക്വാളിഫൈ മോഡ്: പരമാവധി 830 കുതിരശക്തി അൺലോക്ക് ചെയ്യുന്നു."
  }
};

emanettinoBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    emanettinoBtns.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const mode = btn.getAttribute("data-mode");
    document.body.dataset.driveMode = mode;

    const lang = document.documentElement.lang;
    const desc = modeDescriptions[mode];

    if (modeStatusText && desc) {
      modeStatusText.textContent = lang === "ml" ? desc.ml : desc.en;
    }

    if (audioEnabled) {
      playEngineRev(mode);
    } else {
      playUiBlip(1200, "sawtooth", 0.08);
    }
  });
});

// ==========================================
// 10. HOTSPOT INTERACTION (MOBILE & DESKTOP)
// ==========================================
hotspots.forEach((hotspot) => {
  const trigger = hotspot.querySelector(".hotspot-trigger");
  if (trigger) {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = hotspot.classList.contains("is-open");
      hotspots.forEach((h) => h.classList.remove("is-open"));
      if (!isOpen) {
        hotspot.classList.add("is-open");
        playUiBlip(1400, "sine", 0.05);
      }
    });
  }
});

document.addEventListener("click", () => {
  hotspots.forEach((h) => h.classList.remove("is-open"));
});

// ==========================================
// 11. NAVIGATION DRAWER & KEYBOARD ACCESS
// ==========================================
if (menuButton && menuPanel) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isOpen);
    menuPanel.classList.toggle("is-open", !isOpen);
    playUiBlip(950, "sine", 0.06);
  });

  menuPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuPanel.classList.remove("is-open");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuPanel.classList.contains("is-open")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuPanel.classList.remove("is-open");
      menuButton.focus();
    }
  });
}

// ==========================================
// 12. BILINGUAL LOCALIZATION (EN / ML)
// ==========================================
if (languageButton) {
  languageButton.addEventListener("click", () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === "en" ? "ml" : "en";
    document.documentElement.lang = newLang;

    // Toggle all data-en / data-ml attributes
    document.querySelectorAll("[data-en][data-ml]").forEach((element) => {
      element.textContent = element.dataset[newLang];
    });

    languageButton.textContent = newLang === "en" ? "മലയാളം" : "English";
    languageButton.setAttribute("aria-label", newLang === "en" ? "Switch to Malayalam" : "Switch to English");

    // Update active slide
    showSlide(currentSlide);

    // Update audio label
    if (audioToggle) {
      const audioLabel = audioToggle.querySelector(".audio-label");
      if (audioLabel) {
        audioLabel.textContent = audioEnabled
          ? newLang === "ml" ? "ശബ്ദം : ഓൺ" : "AUDIO : ON"
          : newLang === "ml" ? "ശബ്ദം : ഓഫ്" : "AUDIO : OFF";
      }
    }

    // Update active eManettino description
    const currentMode = document.body.dataset.driveMode || "hybrid";
    if (modeStatusText && modeDescriptions[currentMode]) {
      modeStatusText.textContent = modeDescriptions[currentMode][newLang];
    }

    playUiBlip(1100, "sine", 0.05);
  });
}

// Boot Experience on Load
startExperience();
