/* Dental Smile — internacionalización ES/EN (JS DOM puro) */

(function () {
  const translations = {
    es: {
      'meta.title': 'Dental Smile — Clínica dental premium en Quito',
      'meta.description': 'Atención dental profesional con tecnología de última generación en Quito. Reserva tu cita en segundos.',

      'nav.services': 'Servicios',
      'nav.clinic': 'Clínica',
      'nav.testimonials': 'Testimonios',
      'nav.results': 'Resultados',
      'nav.book': 'Reservar cita',
      'nav.menuAria': 'Menú',

      'hero.title1': 'Tu sonrisa',
      'hero.title2': 'en las',
      'hero.title3': 'mejores manos',
      'hero.subtitle': 'Atención dental profesional con tecnología de última generación. Diseñamos cada tratamiento a la medida de tu sonrisa, sin prisas y sin sorpresas.',
      'hero.ctaServices': 'Ver servicios',
      'hero.reviews': '+1.200 reseñas verificadas en Google',
      'hero.badge.warranty': 'Garantía',
      'hero.badge.warrantyDetail': '5 años en implantes',
      'hero.badge.financing': 'Financiación 0% disponible',

      'marquee.label': 'Acreditaciones y partners',

      'services.eyebrow': 'Tratamientos',
      'services.title': 'Todo lo que tu sonrisa necesita, en un solo lugar.',
      'services.subtitle': 'Cada tratamiento se planifica en digital y se ejecuta con materiales de primera. Sin sorpresas, con garantía.',
      'services.learnMore': 'Saber más',
      'services.card1.title': 'Limpieza dental',
      'services.card1.desc': 'Higiene profesional con ultrasonidos y pulido. Sin molestias, en una sola visita.',
      'services.card1.tag': 'En una visita',
      'services.card2.title': 'Ortodoncia',
      'services.card2.desc': 'Invisalign y brackets estéticos con plan de tratamiento visible desde el día uno.',
      'services.card3.title': 'Implantes',
      'services.card3.desc': 'Reemplazo permanente y natural, con planificación guiada por ordenador.',
      'services.card3.tag': 'Cirugía guiada',
      'services.card3.badge': 'Más solicitado',
      'services.card4.title': 'Blanqueamiento',
      'services.card4.desc': 'Varios tonos más en una sesión, con protocolo LED seguro para el esmalte.',
      'services.card4.tag': '45 minutos',
      'services.card5.title': 'Diseño de sonrisa',
      'services.card5.desc': 'Planificación digital a medida: previsualiza tu nueva sonrisa antes de empezar.',
      'services.card5.tag': 'Preview 3D',
      'services.cta.title': '¿No sabes qué tratamiento elegir?',
      'services.cta.desc': 'Reserva una primera visita de diagnóstico gratuita con uno de nuestros especialistas.',
      'services.cta.button': 'Diagnóstico gratuito',

      'clinic.eyebrow': 'Sobre la clínica',
      'clinic.title': 'Una década cuidando sonrisas con criterio y tecnología.',
      'clinic.desc': 'En Dental Smile combinamos un equipo multidisciplinar con las herramientas digitales más avanzadas — escáner intraoral, planificación 3D y CAD/CAM en clínica — para que cada tratamiento sea predecible, mínimamente invasivo y a tu medida.',
      'clinic.badge.tech': 'Tecnología 3D',
      'clinic.badge.scanner': 'Escáner intraoral iTero®',
      'clinic.stat1': 'años de experiencia',
      'clinic.stat2': 'pacientes felices',
      'clinic.stat3': 'atención personalizada',
      'clinic.list1': 'Diagnóstico digital 3D sin radiación adicional',
      'clinic.list2': 'Equipo multidisciplinar en un solo centro',
      'clinic.list3': 'Materiales con trazabilidad y garantía',
      'clinic.list4': 'Financiación a medida sin intereses',

      'testimonials.eyebrow': 'Testimonios',
      'testimonials.title': 'Pacientes que hoy sonríen sin pensarlo.',
      'testimonials.quote1': '"Después de años evitando sonreír en fotos, hoy lo hago sin pensarlo. El equipo me explicó cada paso del tratamiento con simulación 3D y la diferencia ha sido enorme."',
      'testimonials.role1': 'Paciente · Ortodoncia Invisalign',
      'testimonials.quote2': '"Tenía miedo a los implantes y resultó ser lo más sencillo del mundo. Atención impecable, sin dolor y con un seguimiento que da tranquilidad."',
      'testimonials.role2': 'Paciente · 2 implantes',
      'testimonials.quote3': '"Lo mejor fue ver mi nueva sonrisa antes de empezar. Cuidaron cada detalle: el color, la forma, la proporción. Vale cada dólar."',
      'testimonials.role3': 'Paciente · Diseño de sonrisa',

      'results.eyebrow': 'Antes & Después',
      'results.title1': 'Resultados reales,',
      'results.title2': 'contados en imágenes.',
      'results.subtitle': 'Desliza sobre cada caso para descubrir la transformación. Casos reales de pacientes Dental Smile, publicados con su consentimiento.',

      'gallery.badge.before': 'Antes',
      'gallery.badge.after': 'Después',
      'gallery.compareAria': 'Comparar antes y después',
      'gallery.case': 'Caso',
      'gallery.title.0': 'Diseño de sonrisa',
      'gallery.title.1': 'Ortodoncia Invisalign',
      'gallery.title.2': 'Implante unitario',
      'gallery.title.3': 'Blanqueamiento LED',
      'gallery.title.4': 'Carillas porcelana',
      'gallery.title.5': 'Rehabilitación completa',
      'gallery.detail.0': '8 carillas · 3 semanas',
      'gallery.detail.1': '12 meses',
      'gallery.detail.2': '1 sesión + corona',
      'gallery.detail.3': '45 minutos',
      'gallery.detail.4': '6 carillas · 2 semanas',
      'gallery.detail.5': '6 meses',

      'contact.eyebrow': 'Empieza hoy',
      'contact.title1': 'Agenda tu cita hoy',
      'contact.title2': 'y comienza a sonreír.',
      'contact.subtitle': 'Primera visita gratuita: diagnóstico, plan personalizado y presupuesto cerrado en menos de 45 minutos.',
      'contact.chip1': 'Sin compromiso',
      'contact.chip2': 'Financiación 0%',
      'contact.chip3': 'Respuesta en 1h',

      'form.eyebrow': 'Reserva en 30 segundos',
      'form.title': 'Cuéntanos qué necesitas',
      'form.name': 'Nombre',
      'form.namePlaceholder': 'Tu nombre',
      'form.phone': 'Teléfono',
      'form.treatment': 'Tratamiento',
      'form.option1': 'Primera visita / revisión',
      'form.option2': 'Ortodoncia (Invisalign)',
      'form.option3': 'Implante dental',
      'form.option4': 'Blanqueamiento',
      'form.option5': 'Diseño de sonrisa',
      'form.submit': 'Solicitar cita',
      'form.privacy': 'Al continuar aceptas nuestra política de privacidad.',

      'confirm.title': '¡Cita confirmada!',
      'confirm.desc': 'Hemos recibido tu solicitud. Te llamamos en menos de una hora para confirmar el horario.',
      'confirm.reset': 'Enviar otra solicitud',

      'footer.tagline': 'Clínica dental premium. Tecnología, criterio y trato humano para cuidar tu sonrisa de por vida.',
      'footer.contactHeading': 'Contacto',
      'footer.whatsapp': 'WhatsApp 24/7',
      'footer.scheduleHeading': 'Horarios',
      'footer.mondayFriday': 'Lunes – Viernes',
      'footer.saturday': 'Sábado',
      'footer.sunday': 'Domingo',
      'footer.closed': 'Cerrado',
      'footer.emergency': 'Urgencias 24h disponibles',
      'footer.clinicHeading': 'Clínica',
      'footer.aboutUs': 'Sobre nosotros',
      'footer.bookLink': 'Reservar',
      'footer.copy': '© 2026 Dental Smile · Todos los derechos reservados',
      'footer.legal': 'Aviso legal',
      'footer.privacy': 'Privacidad',
      'footer.cookies': 'Cookies',
    },
    en: {
      'meta.title': 'Dental Smile — Premium Dental Clinic in Quito',
      'meta.description': 'Professional dental care with cutting-edge technology in Quito. Book your appointment in seconds.',

      'nav.services': 'Services',
      'nav.clinic': 'Clinic',
      'nav.testimonials': 'Testimonials',
      'nav.results': 'Results',
      'nav.book': 'Book appointment',
      'nav.menuAria': 'Menu',

      'hero.title1': 'Your smile',
      'hero.title2': 'in the',
      'hero.title3': 'best hands',
      'hero.subtitle': 'Professional dental care with cutting-edge technology. We design every treatment to fit your smile, with no rush and no surprises.',
      'hero.ctaServices': 'View services',
      'hero.reviews': '+1,200 verified reviews on Google',
      'hero.badge.warranty': 'Warranty',
      'hero.badge.warrantyDetail': '5-year implant warranty',
      'hero.badge.financing': '0% financing available',

      'marquee.label': 'Accreditations & partners',

      'services.eyebrow': 'Treatments',
      'services.title': 'Everything your smile needs, in one place.',
      'services.subtitle': 'Every treatment is digitally planned and carried out with premium materials. No surprises, fully guaranteed.',
      'services.learnMore': 'Learn more',
      'services.card1.title': 'Teeth cleaning',
      'services.card1.desc': 'Professional hygiene with ultrasound and polishing. Painless, in a single visit.',
      'services.card1.tag': 'In one visit',
      'services.card2.title': 'Orthodontics',
      'services.card2.desc': 'Invisalign and aesthetic braces with a treatment plan visible from day one.',
      'services.card3.title': 'Implants',
      'services.card3.desc': 'Permanent, natural replacement, with computer-guided planning.',
      'services.card3.tag': 'Guided surgery',
      'services.card3.badge': 'Most requested',
      'services.card4.title': 'Whitening',
      'services.card4.desc': 'Several shades whiter in one session, with an enamel-safe LED protocol.',
      'services.card4.tag': '45 minutes',
      'services.card5.title': 'Smile design',
      'services.card5.desc': 'Custom digital planning: preview your new smile before you start.',
      'services.card5.tag': '3D preview',
      'services.cta.title': 'Not sure which treatment to choose?',
      'services.cta.desc': 'Book a free first diagnostic visit with one of our specialists.',
      'services.cta.button': 'Free diagnosis',

      'clinic.eyebrow': 'About the clinic',
      'clinic.title': 'A decade caring for smiles with expertise and technology.',
      'clinic.desc': 'At Dental Smile we combine a multidisciplinary team with the most advanced digital tools — intraoral scanner, 3D planning and in-house CAD/CAM — so every treatment is predictable, minimally invasive and tailored to you.',
      'clinic.badge.tech': '3D Technology',
      'clinic.badge.scanner': 'iTero® intraoral scanner',
      'clinic.stat1': 'years of experience',
      'clinic.stat2': 'happy patients',
      'clinic.stat3': 'personalized care',
      'clinic.list1': '3D digital diagnosis with no extra radiation',
      'clinic.list2': 'Multidisciplinary team under one roof',
      'clinic.list3': 'Traceable materials, fully guaranteed',
      'clinic.list4': 'Tailored interest-free financing',

      'testimonials.eyebrow': 'Testimonials',
      'testimonials.title': 'Patients who smile without hesitation today.',
      'testimonials.quote1': '"After years of avoiding smiling in photos, now I do it without thinking twice. The team explained every step of the treatment with 3D simulation and the difference has been huge."',
      'testimonials.role1': 'Patient · Invisalign orthodontics',
      'testimonials.quote2': '"I was afraid of implants and it turned out to be the easiest thing in the world. Flawless care, no pain, and follow-up that gives peace of mind."',
      'testimonials.role2': 'Patient · 2 implants',
      'testimonials.quote3': '"The best part was seeing my new smile before starting. They took care of every detail: color, shape, proportion. Worth every dollar."',
      'testimonials.role3': 'Patient · Smile design',

      'results.eyebrow': 'Before & After',
      'results.title1': 'Real results,',
      'results.title2': 'told through images.',
      'results.subtitle': 'Slide over each case to discover the transformation. Real Dental Smile patient cases, published with their consent.',

      'gallery.badge.before': 'Before',
      'gallery.badge.after': 'After',
      'gallery.compareAria': 'Compare before and after',
      'gallery.case': 'Case',
      'gallery.title.0': 'Smile design',
      'gallery.title.1': 'Invisalign orthodontics',
      'gallery.title.2': 'Single implant',
      'gallery.title.3': 'LED whitening',
      'gallery.title.4': 'Porcelain veneers',
      'gallery.title.5': 'Full rehabilitation',
      'gallery.detail.0': '8 veneers · 3 weeks',
      'gallery.detail.1': '12 months',
      'gallery.detail.2': '1 session + crown',
      'gallery.detail.3': '45 minutes',
      'gallery.detail.4': '6 veneers · 2 weeks',
      'gallery.detail.5': '6 months',

      'contact.eyebrow': 'Start today',
      'contact.title1': 'Book your appointment today',
      'contact.title2': 'and start smiling.',
      'contact.subtitle': 'Free first visit: diagnosis, personalized plan and a closed quote in under 45 minutes.',
      'contact.chip1': 'No commitment',
      'contact.chip2': '0% financing',
      'contact.chip3': 'Response within 1h',

      'form.eyebrow': 'Book in 30 seconds',
      'form.title': 'Tell us what you need',
      'form.name': 'Name',
      'form.namePlaceholder': 'Your name',
      'form.phone': 'Phone',
      'form.treatment': 'Treatment',
      'form.option1': 'First visit / check-up',
      'form.option2': 'Orthodontics (Invisalign)',
      'form.option3': 'Dental implant',
      'form.option4': 'Whitening',
      'form.option5': 'Smile design',
      'form.submit': 'Request appointment',
      'form.privacy': 'By continuing you accept our privacy policy.',

      'confirm.title': 'Appointment confirmed!',
      'confirm.desc': 'We received your request. We will call you within the hour to confirm the time.',
      'confirm.reset': 'Send another request',

      'footer.tagline': 'Premium dental clinic. Technology, expertise and human care to look after your smile for life.',
      'footer.contactHeading': 'Contact',
      'footer.whatsapp': 'WhatsApp 24/7',
      'footer.scheduleHeading': 'Hours',
      'footer.mondayFriday': 'Monday – Friday',
      'footer.saturday': 'Saturday',
      'footer.sunday': 'Sunday',
      'footer.closed': 'Closed',
      'footer.emergency': '24h emergencies available',
      'footer.clinicHeading': 'Clinic',
      'footer.aboutUs': 'About us',
      'footer.bookLink': 'Book now',
      'footer.copy': '© 2026 Dental Smile · All rights reserved',
      'footer.legal': 'Legal notice',
      'footer.privacy': 'Privacy',
      'footer.cookies': 'Cookies',
    },
  };

  const SUPPORTED = ['es', 'en'];
  const stored = localStorage.getItem('lang');
  const browser = (navigator.language || 'es').slice(0, 2);
  let currentLang = SUPPORTED.includes(stored) ? stored : (SUPPORTED.includes(browser) ? browser : 'es');

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.es[key] || key;
  }

  function updateLangToggleUI() {
    const pill = document.getElementById('lang-pill');
    const activeBtn = document.querySelector(`[data-lang-btn="${currentLang}"]`);
    if (pill && activeBtn) {
      pill.style.left = activeBtn.offsetLeft + 'px';
      pill.style.width = activeBtn.offsetWidth + 'px';
    }
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const active = btn.getAttribute('data-lang-btn') === currentLang;
      btn.classList.toggle('text-white', active);
      btn.classList.toggle('text-ink2', !active);
    });
  }

  function applyTranslations(root) {
    const scope = root || document;
    scope.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    scope.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    scope.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
  }

  function setLanguage(lang) {
    if (!SUPPORTED.includes(lang) || lang === currentLang) return;
    const scrollY = window.scrollY;
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    updateLangToggleUI();
    window.scrollTo(0, scrollY);
  }

  document.documentElement.lang = currentLang;
  applyTranslations();

  document.addEventListener('DOMContentLoaded', () => {
    updateLangToggleUI();
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang-btn')));
    });
    window.addEventListener('resize', updateLangToggleUI);
  });

  window.i18n = { t, applyTranslations, setLanguage, getLang: () => currentLang };
})();
