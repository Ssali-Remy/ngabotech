document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const panel = document.querySelector(".nav-mobile-panel");

  if (toggle && panel) {
    toggle.addEventListener("click", () => {
      panel.classList.toggle("open");
    });

    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => panel.classList.remove("open"));
    });
  }

  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));

  document.querySelectorAll(".stagger").forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      child.style.setProperty("--i", i);
    });
  });

  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
