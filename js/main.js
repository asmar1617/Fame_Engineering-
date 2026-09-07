// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu after tapping a nav link
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Shadow under the sticky header once the page is scrolled
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const setHeaderState = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });
}

// Fade sections in as they scroll into view.
// The .reveal class is added here (not in the HTML) so that if JS is
// disabled or fails, everything stays visible instead of blank.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const revealTargets = document.querySelectorAll(
    '.section-head, .service-card, .why-panel, .why-list li, .about-art, .about-copy, .contact-panel, .brands-label'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach((el, index) => {
    el.classList.add('reveal');
    // Slight stagger so grouped items cascade rather than popping together
    el.style.transitionDelay = `${(index % 4) * 70}ms`;
    observer.observe(el);
  });
}

// Contact form (submits to Formspree without a page reload)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Honeypot: if this hidden field got filled in, silently drop it (bot).
    const honeypot = contactForm.querySelector('.form-hp');
    if (honeypot && honeypot.value) return;

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    formStatus.textContent = '';
    formStatus.className = 'form-status';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        formStatus.textContent = "Thanks! Your message has been sent — we'll get back to you soon.";
        formStatus.classList.add('success');
        contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      formStatus.textContent =
        "Something went wrong sending your message. Please call or WhatsApp us instead.";
      formStatus.classList.add('error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}
