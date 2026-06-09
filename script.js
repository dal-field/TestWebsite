/* ============================================================
   Dallin Littlefield — AI Consulting site
   ============================================================ */

/* ------------------------------------------------------------
   CONFIG — set these two values to fully activate lead capture.
   Until then, the site still works:
     • "Book a consult" buttons smooth-scroll to the contact form.
     • The contact form falls back to opening a pre-filled email.
   ------------------------------------------------------------ */
const CONSULT = {
  // Your scheduling link (Calendly, Cal.com, etc.). Leave "" to scroll to the form instead.
  BOOKING_URL: 'https://calendly.com/dallin-litflow/30min',
  // A static-friendly form endpoint. Easiest: Web3Forms (https://web3forms.com) — free, no backend.
  //   FORM_ENDPOINT: 'https://api.web3forms.com/submit'
  //   WEB3FORMS_KEY: 'your-access-key'
  // (Formspree also works: set FORM_ENDPOINT to your form URL and leave WEB3FORMS_KEY empty.)
  FORM_ENDPOINT: '',
  WEB3FORMS_KEY: '11c55cb5-392b-438e-a2b0-8afb70a559b3',
  EMAIL: 'dallin@litflow.io',
};

/* ---- Project data (Pocket Defender is featured separately in HTML) ---- */
const projects = [
  {
    title: 'Budgerton',
    domain: 'budgerton.com',
    tag: 'AI',
    ai: true,
    emoji: '💸',
    grad: 'linear-gradient(135deg, rgba(45,212,191,0.28), rgba(56,189,248,0.28))',
    desc: 'A personal-finance app that finally makes budgeting make sense. Connect your accounts and cards via Plaid, and Claude-powered AI auto-categorizes every transaction — learning from your own habits and plain-language descriptions to get more accurate over time.',
    badges: ['Claude AI', 'Plaid', 'Vercel'],
    url: 'https://budgerton.com',
    status: 'Beta',
  },
  {
    title: 'Tooele County Resources',
    domain: 'tooelecountyresources.com',
    tag: 'Civic · Data',
    emoji: '⚖️',
    grad: 'linear-gradient(135deg, rgba(56,189,248,0.28), rgba(139,92,246,0.28))',
    desc: "Built in my role as Director of Tooele County's Criminal Justice Coordinating Council. A public resource hub aimed at reducing recidivism, plus a secure dashboard that analyzes 10+ years of county jail booking data for council members. Live and used by the courts.",
    badges: ['Supabase', 'Vercel', 'Data Dashboard', 'Auth'],
    url: 'https://tooelecountyresources.com',
    status: 'Live',
  },
  {
    title: 'Blackrock Law',
    domain: 'blackrocklaw.net',
    tag: 'Full-stack',
    emoji: '🏛️',
    grad: 'linear-gradient(135deg, rgba(139,92,246,0.28), rgba(45,212,191,0.28))',
    desc: 'The site for my own estate-planning firm — not just a landing page. It includes a custom admin login and dashboard where firm staff receive and track event registrations, schedule events, and view registration analytics.',
    badges: ['GitHub', 'Vercel', 'Auth', 'Analytics'],
    url: 'https://blackrocklaw.net',
    status: 'Live',
  },
  {
    title: 'Ward App',
    domain: 'Congregation management',
    tag: 'Web App',
    emoji: '📋',
    grad: 'linear-gradient(135deg, rgba(45,212,191,0.28), rgba(139,92,246,0.28))',
    desc: 'A tool for LDS congregation leaders to run meetings, take notes, and assign and track tasks. Member inputs are automatically aggregated into a live, public meeting-agenda page. In active weekly use by a congregation today.',
    badges: ['Railway', 'Auth', 'Automation'],
    url: 'https://ward-app-production.up.railway.app/bishopric-followup',
    status: 'Live',
  },
  {
    title: 'Littlefield Legal',
    domain: 'littlefieldlegal.com',
    tag: 'Website',
    emoji: '👨‍⚖️',
    grad: 'linear-gradient(135deg, rgba(56,189,248,0.28), rgba(45,212,191,0.28))',
    desc: 'My own solo law practice site, live for 2+ years. Clean and straightforward, with a contact/question form wired up through Resend for instant email delivery. Built with Claude Design + Claude Code.',
    badges: ['Claude Code', 'Resend', 'GitHub'],
    url: 'https://littlefieldlegal.com',
    status: 'Live',
  },
  {
    title: 'Littlefield Accounting',
    domain: 'littlefieldacct.com',
    tag: 'Client Work',
    emoji: '📊',
    grad: 'linear-gradient(135deg, rgba(139,92,246,0.28), rgba(56,189,248,0.28))',
    desc: "A bookkeeping-services site I built solo for my brother's business. Live and already drawing customer traffic, with a question/intake form powered by Resend.",
    badges: ['Resend', 'Vercel', 'GitHub'],
    url: 'https://littlefieldacct.com',
    status: 'Live',
  },
];

/* ---- Render project cards ---- */
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const grid = document.getElementById('projectGrid');
if (grid) {
  grid.innerHTML = projects.map((p) => {
    const slug = slugify(p.title);
    const badges = p.badges.map((b) => `<span class="badge">${b}</span>`).join('');
    return `
      <article class="card">
        <div class="card__media" style="--card-grad:${p.grad}">
          <span class="card__tag ${p.ai ? 'card__tag--ai' : ''}">${p.tag}</span>
          <img src="images/${slug}.png" alt="${p.title} screenshot"
               onerror="this.closest('.card__media').classList.add('is-missing')" />
          <span class="card__media-fallback" aria-hidden="true">${p.emoji}</span>
        </div>
        <div class="card__body">
          <h3 class="card__title">${p.title}</h3>
          <p class="card__domain">${p.domain} · ${p.status}</p>
          <p class="card__desc">${p.desc}</p>
          <div class="card__badges">${badges}</div>
          <a class="card__link" href="${p.url}" target="_blank" rel="noopener">
            Visit site <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>`;
  }).join('');
}

/* ---- Sticky nav state ---- */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ---- Mobile menu ---- */
const toggle = document.getElementById('navToggle');
const links = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

/* ---- Reveal on scroll ---- */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* ---- Flagship carousel ---- */
(function () {
  const root = document.getElementById('pdCarousel');
  if (!root) return;
  const slides = Array.from(root.querySelectorAll('.carousel__slide'));
  const dotsWrap = document.getElementById('pdDots');
  const prev = document.getElementById('pdPrev');
  const next = document.getElementById('pdNext');
  let i = 0;
  let timer;

  const dots = slides.map((_, idx) => {
    const b = document.createElement('button');
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Screenshot ${idx + 1}`);
    b.addEventListener('click', () => { go(idx); restart(); });
    dotsWrap.appendChild(b);
    return b;
  });

  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle('is-active', idx === i));
    dots.forEach((d, idx) => d.classList.toggle('is-active', idx === i));
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => go(i + 1), 5000);
  }

  prev.addEventListener('click', () => { go(i - 1); restart(); });
  next.addEventListener('click', () => { go(i + 1); restart(); });
  go(0);
  restart();
  root.addEventListener('mouseenter', () => clearInterval(timer));
  root.addEventListener('mouseleave', restart);
})();

/* ---- "Book a consult" buttons ---- */
(function () {
  const bookEls = document.querySelectorAll('.js-book');
  const form = document.getElementById('consultForm');
  bookEls.forEach((el) => {
    if (CONSULT.BOOKING_URL) {
      el.setAttribute('href', CONSULT.BOOKING_URL);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    } else {
      el.addEventListener('click', (e) => {
        const contact = document.getElementById('contact');
        if (!contact) return;
        e.preventDefault();
        contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const first = form && form.querySelector('input, textarea');
        if (first) setTimeout(() => first.focus({ preventScroll: true }), 600);
      });
    }
  });
})();

/* ---- Contact form ---- */
(function () {
  const form = document.getElementById('consultForm');
  if (!form) return;
  const note = document.getElementById('formNote');
  const submit = form.querySelector('.form__submit');

  const setNote = (msg, kind) => {
    note.textContent = msg;
    note.className = 'form__note' + (kind ? ' is-' + kind : '');
  };

  const fieldEls = () => ({
    name: form.querySelector('#cf-name'),
    email: form.querySelector('#cf-email'),
    company: form.querySelector('#cf-company'),
    help: form.querySelector('#cf-help'),
    message: form.querySelector('#cf-msg'),
    botcheck: form.querySelector('input[name="botcheck"]'),
  });

  const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = fieldEls();

    // honeypot — silently accept bots, do nothing
    if (f.botcheck && f.botcheck.checked) { setNote("Thanks — I'll be in touch.", 'success'); return; }

    // validate
    let ok = true;
    [f.name, f.email, f.message].forEach((el) => {
      const bad = !el.value.trim() || (el === f.email && !validEmail(el.value.trim()));
      el.classList.toggle('invalid', bad);
      if (bad) ok = false;
    });
    if (!ok) { setNote('Please add your name, a valid email, and a short message.', 'error'); return; }

    const data = {
      name: f.name.value.trim(),
      email: f.email.value.trim(),
      company: f.company.value.trim(),
      help: f.help.value,
      message: f.message.value.trim(),
    };

    // Fallback: open a pre-filled email so the form always does something useful
    const mailtoFallback = () => {
      const subject = encodeURIComponent(`Consult request — ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        (data.company ? `Company/firm: ${data.company}\n` : '') +
        `Interested in: ${data.help}\n\n` +
        `${data.message}\n`
      );
      window.location.href = `mailto:${CONSULT.EMAIL}?subject=${subject}&body=${body}`;
      setNote('Opening your email app… if nothing happens, email me at ' + CONSULT.EMAIL + '.', 'success');
    };

    // Path A: real async submission to a form endpoint (Web3Forms / Formspree)
    const endpoint = CONSULT.FORM_ENDPOINT || (CONSULT.WEB3FORMS_KEY ? 'https://api.web3forms.com/submit' : '');
    if (endpoint) {
      submit.disabled = true;
      setNote('Sending…', '');
      try {
        const payload = {
          ...data,
          subject: `New consult request from ${data.name} — dallinlittlefield.com`,
          from_name: data.name,
        };
        if (CONSULT.WEB3FORMS_KEY) payload.access_key = CONSULT.WEB3FORMS_KEY;
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        const result = await res.json().catch(() => ({}));
        if (res.ok && result.success) {
          form.reset();
          setNote("Thanks — your message is on its way. I'll reply personally, usually within a day.", 'success');
        } else {
          mailtoFallback();
        }
      } catch (err) {
        mailtoFallback();
      } finally {
        submit.disabled = false;
      }
      return;
    }

    // Path B (default): no endpoint configured — use the mailto fallback
    mailtoFallback();
  });

  // clear the invalid state as the user fixes a field
  form.addEventListener('input', (e) => {
    if (e.target.classList) e.target.classList.remove('invalid');
  });
})();

/* ---- Email link: copy to clipboard with feedback (null-safe) ---- */
(function () {
  const link = document.getElementById('contactEmail');
  if (!link) return;
  const email = link.dataset.email || link.textContent.trim();
  const original = link.textContent;
  let resetTimer;
  link.addEventListener('click', () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => {
        link.textContent = 'Copied to clipboard!';
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => { link.textContent = original; }, 2000);
      }).catch(() => {});
    }
  });
})();

/* ---- Footer year ---- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
