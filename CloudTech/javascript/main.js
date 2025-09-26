document.addEventListener('DOMContentLoaded', () => {
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
});
// footer year
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// nav toggle (mobile)
(() => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
