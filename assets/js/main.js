/* global Swiper */
import { loadShell } from "./components.js";

const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

function setTheme(mode) {
  const root = document.documentElement;
  if (mode === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem("theme", mode);
  root.dataset.theme = mode;
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") {
    setTheme(saved);
    return;
  }
  const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  setTheme(systemDark ? "dark" : "light");
}

function initThemeToggle() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-theme-toggle]");
    if (!btn) return;
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });
}

function initMobileMenu() {
  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-menu-open]");
    const closeBtn = e.target.closest("[data-menu-close]");
    const overlayClick = e.target.closest("[data-menu-overlay]");
    const link = e.target.closest("[data-menu-link]");
    const panel = document.querySelector("[data-mobile-panel]");
    if (!panel) return;

    const open = () => {
      panel.classList.remove("pointer-events-none", "opacity-0");
      panel.querySelector("[data-mobile-drawer]")?.classList.remove("translate-x-full");
      document.documentElement.classList.add("overflow-hidden");
    };
    const close = () => {
      panel.classList.add("pointer-events-none", "opacity-0");
      panel.querySelector("[data-mobile-drawer]")?.classList.add("translate-x-full");
      document.documentElement.classList.remove("overflow-hidden");
    };

    if (openBtn) open();
    if (closeBtn || overlayClick || link) close();
  });
}

function initSmoothAnchors() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function initMagneticButtons() {
  if (prefersReduced) return;
  const magnets = document.querySelectorAll(".magnet");
  magnets.forEach((el) => {
    const strength = Number(el.dataset.magnetStrength || 18);
    let anim = null;
    const onMove = (ev) => {
      const r = el.getBoundingClientRect();
      const x = ev.clientX - (r.left + r.width / 2);
      const y = ev.clientY - (r.top + r.height / 2);
      const tx = x / strength;
      const ty = y / strength;
      anim?.cancel?.();
      anim = el.animate([{ transform: `translate(${tx}px, ${ty}px)` }], {
        duration: 220,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
      });
    };
    const onLeave = () => {
      anim?.cancel?.();
      anim = el.animate([{ transform: "translate(0px, 0px)" }], {
        duration: 420,
        easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        fill: "forwards",
      });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
  });
}

function initHoverCards() {
  if (prefersReduced) return;
  const cards = document.querySelectorAll("[data-hover-card]");
  cards.forEach((card) => {
    const glow = card.querySelector("[data-card-glow]");
    let cardAnim = null;
    let glowAnim = null;
    const onEnter = () => {
      cardAnim?.cancel?.();
      cardAnim = card.animate([{ transform: "translateY(-6px) rotateX(3deg) rotateY(-3deg)" }], {
        duration: 260,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
      });
      if (glow) {
        glowAnim?.cancel?.();
        glowAnim = glow.animate([{ opacity: 1 }], { duration: 200, easing: "ease-out", fill: "forwards" });
      }
    };
    const onLeave = () => {
      cardAnim?.cancel?.();
      cardAnim = card.animate([{ transform: "translateY(0px) rotateX(0deg) rotateY(0deg)" }], {
        duration: 360,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
      });
      if (glow) {
        glowAnim?.cancel?.();
        glowAnim = glow.animate([{ opacity: 0 }], { duration: 260, easing: "ease-out", fill: "forwards" });
      }
    };
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
  });
}

// Removed scroll-reveal animation system (previously GSAP-driven).

function initSwipers() {
  if (!window.Swiper) return;

  document.querySelectorAll("[data-swiper]").forEach((el) => {
    const type = el.dataset.swiper;
    const common = {
      loop: true,
      speed: 900,
      grabCursor: true,
      watchSlidesProgress: true,
    };

    if (type === "testimonials") {
      new Swiper(el, {
        ...common,
        slidesPerView: 1,
        spaceBetween: 18,
        autoplay: { delay: 4200, disableOnInteraction: false },
        navigation: {
          nextEl: el.querySelector(".swiper-button-next"),
          prevEl: el.querySelector(".swiper-button-prev"),
        },
        breakpoints: { 768: { slidesPerView: 2, spaceBetween: 18 }, 1024: { slidesPerView: 3, spaceBetween: 22 } },
      });
    }

    if (type === "logos") {
      new Swiper(el, {
        ...common,
        slidesPerView: 2,
        spaceBetween: 14,
        autoplay: { delay: 0, disableOnInteraction: false },
        speed: 4500,
        allowTouchMove: false,
        freeMode: true,
        freeModeMomentum: false,
        breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } },
      });
    }

    if (type === "clients") {
      new Swiper(el, {
        ...common,
        slidesPerView: 2,
        spaceBetween: 18,
        centeredSlides: false,
        autoplay: { delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: true },
        speed: 650,
        allowTouchMove: true,
        navigation: {
          nextEl: el.querySelector(".swiper-button-next"),
          prevEl: el.querySelector(".swiper-button-prev"),
        },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 18 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 22 },
        },
      });
    }
  });
}

function initAccordions() {
  const accordions = document.querySelectorAll("details");
  if (!accordions.length) return;

  accordions.forEach((details) => {
    const summary = details.querySelector(":scope > summary");
    if (!summary) return;

    // Wrap all content after <summary> so we can animate height smoothly.
    let content = details.querySelector(":scope > [data-accordion-content]");
    if (!content) {
      content = document.createElement("div");
      content.dataset.accordionContent = "true";

      const toMove = [];
      for (let n = summary.nextSibling; n; n = n.nextSibling) toMove.push(n);
      toMove.forEach((n) => content.appendChild(n));
      details.appendChild(content);
    }

    const setHeight = (h) => {
      content.style.height = typeof h === "number" ? `${h}px` : h;
    };

    if (details.open) {
      // Keep initial open panels stable; JS animation will take over on interaction.
      setHeight("auto");
    } else {
      setHeight(0);
    }

    if (prefersReduced) return;

    details.addEventListener("toggle", () => {
      // Prevent the "jump": animate between explicit heights.
      const isOpen = details.open;
      const from = content.getBoundingClientRect().height;

      if (isOpen) {
        // Opening: start at current height (likely 0), animate to scrollHeight, then set auto.
        setHeight(from);
        const to = content.scrollHeight;
        requestAnimationFrame(() => {
          content.animate(
            [
              { height: `${from}px`, opacity: 0 },
              { height: `${to}px`, opacity: 1 },
            ],
            { duration: 320, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" },
          ).onfinish = () => setHeight("auto");
        });
      } else {
        // Closing: lock current height, animate to 0, then keep it at 0.
        const to = 0;
        const fromLocked = from || content.scrollHeight;
        setHeight(fromLocked);
        requestAnimationFrame(() => {
          content.animate(
            [
              { height: `${fromLocked}px`, opacity: 1 },
              { height: "0px", opacity: 0 },
            ],
            { duration: 260, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" },
          ).onfinish = () => setHeight(to);
        });
      }
    });
  });
}

async function boot() {
  initTheme();
  await loadShell();
  initThemeToggle();
  initMobileMenu();
  initSmoothAnchors();

  // Libraries are loaded via CDN; init after shell is in DOM
  initSwipers();
  initMagneticButtons();
  initHoverCards();
  initAccordions();
}

boot();
