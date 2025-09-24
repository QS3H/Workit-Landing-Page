// Scroll reveal using IntersectionObserver
(function () {
  if ("IntersectionObserver" in window === false) {
    // Fallback: reveal immediately
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("is-visible");
    });
    return;
  }

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          // Stagger via CSS transition-delay using index attribute if present
          target.classList.add("is-visible");
          obs.unobserve(target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: prefersReduced ? 0 : 0.15,
    }
  );

  document.querySelectorAll(".reveal").forEach((el, index) => {
    // Add a small stagger for siblings
    el.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    observer.observe(el);
  });
})();
