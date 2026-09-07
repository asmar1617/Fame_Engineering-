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
