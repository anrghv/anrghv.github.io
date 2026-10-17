/* Progressive enhancements: theme switching, mobile navigation,
   header state, and scroll reveals. Everything degrades without JS. */
(function () {
  "use strict";

  var root = document.documentElement;

  function store(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {}
  }

  function read(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  /* ── Theme ───────────────────────────────────────────── */
  var themeToggle = document.querySelector("[data-theme-toggle]");
  var themeLabels = {
    light: "Switch to dark theme",
    dark: "Switch to light theme"
  };

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    if (persist) store("theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", themeLabels[theme]);
      themeToggle.setAttribute("title", themeLabels[theme]);
    }
  }

  applyTheme(currentTheme(), false);

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });
  }

  var scheme = window.matchMedia("(prefers-color-scheme: dark)");
  function followSystem(event) {
    if (!read("theme")) applyTheme(event.matches ? "dark" : "light", false);
  }
  if (scheme.addEventListener) scheme.addEventListener("change", followSystem);
  else if (scheme.addListener) scheme.addListener(followSystem);

  /* ── Mobile navigation ───────────────────────────────── */
  var header = document.querySelector("[data-header]");
  var navToggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  function setNav(open) {
    if (!navToggle || !header) return;
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    header.classList.toggle("is-open", open);
    document.body.classList.toggle("is-nav-open", open);
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setNav(navToggle.getAttribute("aria-expanded") !== "true");
    });
  }

  if (nav) {
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setNav(false);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setNav(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) setNav(false);
  });

  /* ── Header scroll state ─────────────────────────────── */
  if (header) {
    var syncHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
  }

  /* ── Entrance stagger ────────────────────────────────── */
  /* The animation itself lives in CSS; this only offsets siblings so a row of
     cards does not rise all at once. */
  var revealables = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

  revealables.forEach(function (element) {
    var siblings = Array.prototype.slice.call(element.parentNode.children);
    var index = Math.min(siblings.indexOf(element), 4);
    element.style.setProperty("--reveal-delay", index * 60 + "ms");
  });

  /* ── Print button (CV page) ──────────────────────────── */
  var printTrigger = document.querySelector("[data-print]");
  if (printTrigger) {
    printTrigger.addEventListener("click", function (event) {
      event.preventDefault();
      window.print();
    });
  }
})();
