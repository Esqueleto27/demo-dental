/* Dental Smile — interacciones en JS DOM puro (sin frameworks) */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Nav: glassmorphism al hacer scroll ---- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add('nav-scrolled');
    else nav.classList.remove('nav-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Menú móvil ---- */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileMenu.classList.add('hidden')));
  }

  /* ---- Scroll reveal (IntersectionObserver) ---- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

  /* ---- Sliders antes / después ---- */
  document.querySelectorAll('[data-ba]').forEach(card => {
    const range = card.querySelector('input[type="range"]');
    const beforeLayer = card.querySelector('.ba-clip');
    const divider = card.querySelector('.ba-divider');
    const apply = (v) => {
      beforeLayer.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
      divider.style.left = v + '%';
    };
    range.addEventListener('input', (e) => apply(+e.target.value));
    apply(+range.value);
  });

  /* ---- Formulario de reserva: confirmación inline ---- */
  const form = document.getElementById('booking-form');
  const formCard = document.getElementById('booking-card');
  const confirmView = document.getElementById('booking-confirm');
  const resetBtn = document.getElementById('booking-reset');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.classList.add('hidden');
      confirmView.classList.remove('hidden');
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      confirmView.classList.add('hidden');
      form.classList.remove('hidden');
      form.reset();
    });
  }
});
