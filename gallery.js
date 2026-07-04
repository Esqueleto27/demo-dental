/* Dental Smile — genera la galería antes/después y las estrellas (JS DOM puro) */

(function () {
  const starSVG = (size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#2BB6B6"><path d="M12 2l2.9 6.2 6.8.9-5 4.7 1.3 6.8L12 17.8 5.9 20.6 7.2 13.8l-5-4.7 6.8-.9z"/></svg>`;
  const stars = (size) => Array.from({ length: 5 }).map(() => starSVG(size)).join('');

  // Hero rating (insertar antes del "4.9 / 5")
  document.querySelectorAll('[data-stars]').forEach(el => el.insertAdjacentHTML('afterbegin', stars(14)));
  // Testimonios
  document.querySelectorAll('[data-stars-sm]').forEach(el => el.innerHTML = stars(14));

  // Galería antes/después
  const SMILES = [
    '1675526607070-f5cbd71dde92',
    '1677026010083-78ec7f1b84ed',
    '1663182245833-7dd667277043',
    '1769559893692-c6d0623bf8e4',
    '1670251544348-e8055a6a2bdf',
    '1567516364473-233c4b6fcfbe',
  ];
  const t = (key) => (window.i18n ? window.i18n.t(key) : key);

  const grid = document.getElementById('gallery');
  if (!grid) return;

  SMILES.forEach((id, i) => {
    const src = `https://images.unsplash.com/photo-${id}?fm=jpg&q=80&w=900&auto=format&fit=crop`;
    const n = i + 1;
    const card = document.createElement('div');
    card.className = 'space-y-3';
    card.innerHTML = `
      <div data-ba class="relative rounded-3xl overflow-hidden h-[300px] sm:h-[340px]">
        <img src="${src}" alt="Sonrisa después · caso ${n}" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
        <div class="ba-clip absolute inset-0 overflow-hidden" style="clip-path: inset(0 50% 0 0)">
          <img src="${src}" alt="Sonrisa antes · caso ${n}" loading="lazy" class="ba-before absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="ba-divider absolute top-0 bottom-0 w-[2px] bg-white shadow-glow pointer-events-none" style="left:50%; transform: translateX(-50%)">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border-[3px] border-teal grid place-items-center shadow-soft">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F8C9C" stroke-width="2.5" stroke-linecap="round"><path d="M9 6 3 12l6 6M15 6l6 6-6 6"/></svg>
          </div>
        </div>
        <div class="absolute top-4 left-4 rounded-full bg-ink/80 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1" data-i18n="gallery.badge.before">${t('gallery.badge.before')}</div>
        <div class="absolute top-4 right-4 rounded-full bg-white text-ink text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 shadow-soft" data-i18n="gallery.badge.after">${t('gallery.badge.after')}</div>
        <input type="range" min="0" max="100" value="50" class="absolute inset-0 w-full h-full cursor-ew-resize opacity-0" data-i18n-aria="gallery.compareAria" aria-label="${t('gallery.compareAria')}" />
      </div>
      <div class="flex items-center justify-between px-1">
        <div>
          <div class="font-semibold text-ink text-sm" data-i18n="gallery.title.${i}">${t('gallery.title.' + i)}</div>
          <div class="text-xs text-mute mt-0.5" data-i18n="gallery.detail.${i}">${t('gallery.detail.' + i)}</div>
        </div>
        <span class="text-xs font-semibold text-deep"><span data-i18n="gallery.case">${t('gallery.case')}</span> #${String(n).padStart(2, '0')}</span>
      </div>`;
    grid.appendChild(card);
  });
})();
