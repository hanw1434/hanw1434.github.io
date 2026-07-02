// Shared navigation bar.
// To add a new section to the site: add an entry here and create the
// matching HTML page (copy an existing one and swap out the <main> content).
const NAV_LINKS = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Projects", href: "projects.html" },
  { label: "Resume", href: "resume.html" },
];

(function renderNav() {
  const current = location.pathname.split("/").pop() || "index.html";

  const nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.innerHTML = `
    <div class="nav-inner">
      <a class="brand" href="index.html">Han<span>&nbsp;Wu</span></a>
      <ul>
        ${NAV_LINKS.map(
          (l) => `
          <li>
            <a class="nav-link${l.href === current ? " active" : ""}" href="${l.href}">
              ${l.label}
            </a>
          </li>`
        ).join("")}
      </ul>
    </div>`;

  document.body.prepend(nav);
})();
