(function () {
  var root = document.documentElement;

  // Theme toggle (persists choice; otherwise follows the OS setting).
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.dataset.theme ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Mobile menu.
  var navToggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (navToggle && links) {
    navToggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open);
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Header border once the page scrolls.
  var header = document.querySelector(".site-header");
  var onScroll = function () { header.classList.toggle("scrolled", scrollY > 8); };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Fade-in on scroll and active nav highlighting.
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var revealer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add("in"); revealer.unobserve(entry.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { revealer.observe(el); });

  var navLinks = document.querySelectorAll('.nav-links a[href*="#"]');
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (a) {
        a.classList.toggle("active", a.hash === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });
})();
