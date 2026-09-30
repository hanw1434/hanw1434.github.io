// Theme toggle + scroll-spy for the single-page nav.
// To add a new section: add a <section id="..."> to index.html and a
// matching <li><a class="nav-link" href="#..."> to the nav.

(function () {
  // --- theme toggle ---
  const root = document.documentElement;
  const btn = document.querySelector(".theme-toggle");
  const icon = () => (btn.textContent = root.dataset.theme === "dark" ? "☀" : "☾");

  btn.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    icon();
  });
  icon();

  // --- highlight the nav link for the section in view ---
  const links = [...document.querySelectorAll(".site-nav a.nav-link")];
  const sections = links.map((l) => document.querySelector(l.getAttribute("href")));

  let ticking = false;
  let current = -1;
  function update() {
    ticking = false;
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    let i = 0;
    if (atBottom) {
      i = sections.length - 1;
    } else {
      const line = window.innerHeight * 0.35;
      sections.forEach((s, k) => {
        if (s.getBoundingClientRect().top <= line) i = k;
      });
    }
    if (i === current) return;
    current = i;
    links.forEach((l, k) => l.classList.toggle("active", k === i));

    // keep the active link visible in the scrollable mobile nav
    const ul = links[i].closest("ul");
    if (ul.scrollWidth > ul.clientWidth) {
      const a = links[i].getBoundingClientRect();
      const u = ul.getBoundingClientRect();
      const target = ul.scrollLeft + (a.left - u.left) - (u.width - a.width) / 2;
      ul.scrollTo({ left: target, behavior: "smooth" });
    }
  }

  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
