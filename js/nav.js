// Theme preference and section navigation. No libraries or build step.
(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  let explicitTheme = false;
  try { explicitTheme = ['light', 'dark'].includes(localStorage.getItem('theme')); } catch (_) {}
  function syncThemeControl() {
    const dark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    toggle.setAttribute('aria-pressed', String(dark));
    document.querySelector('meta[name="theme-color"]').content = dark ? '#1b1a18' : '#eae2d6';
  }
  toggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    explicitTheme = true;
    try { localStorage.setItem('theme', root.dataset.theme); } catch (_) {}
    syncThemeControl();
  });
  systemTheme.addEventListener('change', (event) => {
    if (!explicitTheme) { root.dataset.theme = event.matches ? 'dark' : 'light'; syncThemeControl(); }
  });
  syncThemeControl();
  const links = [...document.querySelectorAll('.nav-link')];
  const sections = links.map((link) => document.querySelector(link.getAttribute('href')));
  const header = document.querySelector('.site-header');
  let scheduled = false;
  let activeIndex = -1;
  function updateActiveSection() {
    scheduled = false;
    const readingLine = header.getBoundingClientRect().height + 32;
    let next = 0;
    sections.forEach((section, index) => { if (section.getBoundingClientRect().top <= readingLine) next = index; });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) next = sections.length - 1;
    if (next === activeIndex) return;
    activeIndex = next;
    links.forEach((link, index) => {
      link.classList.toggle('active', index === next);
      if (index === next) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }
  function scheduleUpdate() { if (!scheduled) { scheduled = true; requestAnimationFrame(updateActiveSection); } }
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  updateActiveSection();
})();
