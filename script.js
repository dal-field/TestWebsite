/* ============================================================
   Dallin Littlefield — Portfolio interactions
   ============================================================ */

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

/* ---- Footer year ---- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
