function safeJsonParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

const I18N = {
  en: {
    "nav.projects": "Projects",
    "nav.offers": "Offers",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "cta.letsTalk": "Let’s talk",
    "cta.viewProjects": "View projects",
    "cta.wixport": "WixPort Pro (extension)",
    "cta.whatsappNow": "WhatsApp now",
    "hero.eyebrow": "Full Stack Engineer • Java/Spring Boot • React",
    "hero.h1":
      "I build scalable web apps, fast APIs, and pixel-accurate UI—focused on reliability and real users.",
    "hero.lead":
      "5+ years delivering healthcare workforce platforms in Agile teams. Strong on REST API design, performance tuning, and clean frontend engineering.",
    "hero.sub": "Based in Sri Lanka • Focused on Italy (Bologna) small-business websites and web apps",
    "chip.rank": "Island Rank 46 (A/L)",
    "chip.health": "Healthcare SaaS",
    "chip.api": "API optimization",
    "chip.ux": "UI/UX fidelity",
    "chip.dm": "Digital Marketing Master's (Bologna University)",
    "link.copyEmail": "Copy email",
    "link.call": "Call",
    "card.role": "Full Stack Engineer",
    "card.loc": "Sri Lanka • Remote-friendly",
    "stat.software": "Software engineering",
    "stat.react": "Performance + DX",
    "projects.h2": "Selected projects",
    "projects.sub": "A mix of production work and visual engineering demos.",
    "showcase.badge": "Featured",
    "showcase.h3": "Live demo gallery",
    "showcase.p":
      "Click a demo to preview instantly, then open it in a new tab. This is front-end craftsmanship: motion, lighting, responsiveness, and polish.",
    "showcase.openCamp": "Preview Camp Walk",
    "showcase.openForest": "Preview Forest Scene",
    "wix.sub": "Wix → Shopify migration toolkit (local CSV processing).",
    "wix.b1": "Smart field mapping, HTML cleaning, SEO handles",
    "wix.b2": "Privacy-first: browser-local processing",
    "wix.b3": "Product landing + pricing/policies ready for launch",
    "wix.view": "View live site",
    "wix.repo": "GitHub repo",
    "dinesh.h3": "Dinesh B&B Cleaning (Bologna)",
    "dinesh.sub": "Conversion-focused local business website for an Italian cleaning service.",
    "dinesh.b1": "Italian-first message, trust blocks, and instant WhatsApp/Call CTAs",
    "dinesh.b2": "Dark premium visual style optimized for mobile visitors",
    "dinesh.b3": "Built for fast quote requests and social sharing",
    "dinesh.view": "View live site",
    "dinesh.repo": "GitHub repo",
    "italy.h3": "Italy-ready Local Website Formula",
    "italy.sub": "A reusable layout pattern I use for local businesses in Italy.",
    "italy.b1": "Service clarity in first 5 seconds",
    "italy.b2": "WhatsApp-first conversion strategy",
    "italy.b3": "Social-proof blocks and fast quote UX",
    "italy.cta": "Request this style",
    "italy.repo": "View live site",
    "offers.h2": "Packages that close fast",
    "offers.sub": "Transparent pricing in EUR, built for small businesses in Italy.",
    "offers.starter.tag": "Most requested for new businesses",
    "offers.starter.h3": "Starter Website",
    "offers.starter.b1": "1-page modern website (mobile optimized)",
    "offers.starter.b2": "WhatsApp + Call + Google Maps integration",
    "offers.starter.b3": "Delivery in 3-4 days",
    "offers.business.tag": "Best value (hard to say no)",
    "offers.business.h3": "Business Growth Site",
    "offers.business.b1": "Everything in Starter + up to 5 pages",
    "offers.business.b2": "Basic SEO setup + conversion copy",
    "offers.business.b3": "1 promotional poster + social post kit",
    "offers.webapp.tag": "For custom digital workflows",
    "offers.webapp.h3": "Small Web App / Software",
    "offers.webapp.b1": "Booking, quoting, dashboard, or automation tool",
    "offers.webapp.b2": "Custom frontend + backend API",
    "offers.webapp.b3": "Phased delivery and support options",
    "offers.cta": "Lock your slot on WhatsApp",
    "offers.note": "Launch offer: free revision round + fast response within 1 hour (8:00-22:00 Italy time).",
    "poster.h2": "Poster package included",
    "poster.sub":
      "I created a separate poster package you can share in Facebook groups, WhatsApp statuses, and local pages.",
    "poster.open": "Open poster package",
    "camp.sub": "Hand-crafted animation: character walk cycle, fire FX, smoke.",
    "camp.b1": "2D canvas rendering + procedural motion",
    "camp.b2": "Responsive viewport scaling",
    "camp.b3": "Fire glow, embers, smoke simulation",
    "forest.sub": "Parallax scene composition + interaction design.",
    "forest.b1": "Layered gradients, lighting, depth cues",
    "forest.b2": "Portal overlay experience",
    "forest.b3": "Polished UI micro-interactions",
    "demo.preview": "Preview",
    "demo.open": "Open demo",
    "exp.h2": "Experience",
    "exp.sub": "Focused on scalable systems, clean delivery, and mentoring.",
    "exp.role1": "Software Engineer",
    "exp.company1": "Care Systems South Asia (Remote — New York, USA) • Apr 2020 — Present",
    "exp.b11": "Architected and maintained workforce management systems in healthcare.",
    "exp.b12": "Built optimized REST APIs with Spring Boot; improved reliability via validation and testing.",
    "exp.b13": "Delivered responsive React UIs; translated Figma designs with high UI/UX fidelity.",
    "exp.b14": "Mentored junior engineers on debugging and clean code practices.",
    "exp.role2": "Freelance Educator (Mathematics & ICT)",
    "exp.company2": "Online • 2018 — Present",
    "exp.b21": "Created structured learning paths; strengthened communication and leadership.",
    "skills.h2": "Technical skills",
    "skills.sub": "A practical stack for shipping production systems.",
    "contact.h2": "Contact",
    "contact.sub":
      "If you’re hiring or want to collaborate, I’ll reply quickly with availability and examples.",
    "contact.linkedin": "LinkedIn profile",
    "contact.itHint": "Short intro for Italy:",
    "contact.itLine":
      "“Sono uno sviluppatore full stack (Java/React). Mi piace costruire prodotti affidabili e UI precise.”",
    "pitch.h3": "Quick pitch",
    "pitch.p":
      "I’m a full stack engineer with strong Java/Spring Boot backend skills and a frontend focus on React performance and UX detail. I’ve shipped healthcare SaaS features end-to-end, improved API reliability, and mentor teammates.",
    "modal.title": "Demo preview",
    "modal.openNewTab": "Open in new tab",
    "modal.close": "Close",
    "toast.emailCopied": "Email copied",
    "toast.copyFailed": "Copy failed",
    "edu.h3": "Education & certifications",
    "edu.d1": "BSc (Hons) in ICT",
    "edu.d1s": "University of Sri Jayewardenepura, Sri Lanka",
    "edu.d2": "A/L (Engineering Technology)",
    "edu.d2s": "St. Thomas’ College, Matale",
    "edu.d2x": "(Island Rank 46, District Rank 3 • Z-Score 2.6116)",
    "edu.d3": "Master in Digital Marketing",
    "edu.d3x": "(modules completed)",
    "edu.d3s": "University of Bologna, Italy",
    "edu.d4": "IELTS",
    "edu.d4s": "Overall Band 7.0 (British Council)",
    "edu.d5": "Languages",
    "edu.d5s": "English (Professional), Sinhalese (Native), Italian (Beginner)",
    "toast.useServer": "Tip: open the portfolio via http://127.0.0.1:4173/portfolio/ for live previews.",
    "care.h3": "Healthcare Mobile Dashboard",
    "care.sub": "Mobile-first UI for workforce management (React).",
    "care.b1": "Designed clean navigation and quick actions for daily use",
    "care.b2": "Optimized layout for small screens with accessible touch targets",
    "care.b3": "Delivered pixel-accurate UI aligned to product requirements",
    "care.seeExp": "See related experience"
  },
  it: {
    "nav.projects": "Progetti",
    "nav.offers": "Offerte",
    "nav.experience": "Esperienza",
    "nav.skills": "Competenze",
    "nav.contact": "Contatto",
    "cta.letsTalk": "Parliamone",
    "cta.viewProjects": "Vedi progetti",
    "cta.wixport": "WixPort Pro (estensione)",
    "cta.whatsappNow": "Scrivimi su WhatsApp",
    "hero.eyebrow": "Full Stack Engineer • Java/Spring Boot • React",
    "hero.h1":
      "Costruisco web app scalabili, API veloci e UI precise—con focus su affidabilità e utenti reali.",
    "hero.lead":
      "5+ anni su piattaforme healthcare in team Agile. Forte su design REST API, performance tuning e frontend engineering pulito.",
    "hero.sub": "Basato in Sri Lanka • Focus su siti e web app per piccole attività in Italia (Bologna)",
    "chip.rank": "46° posto nazionale (A/L)",
    "chip.health": "SaaS healthcare",
    "chip.api": "Ottimizzazione API",
    "chip.ux": "Fedeltà UI/UX",
    "chip.dm": "Master in Digital Marketing (Università di Bologna)",
    "link.copyEmail": "Copia email",
    "link.call": "Chiama",
    "card.role": "Full Stack Engineer",
    "card.loc": "Sri Lanka • Disponibile da remoto",
    "stat.software": "Ingegneria software",
    "stat.react": "Performance + DX",
    "projects.h2": "Progetti selezionati",
    "projects.sub": "Un mix di lavoro reale e demo di visual engineering.",
    "showcase.badge": "In evidenza",
    "showcase.h3": "Galleria demo live",
    "showcase.p":
      "Clicca una demo per l’anteprima immediata, poi aprila in una nuova scheda. Qui trovi cura dei dettagli: movimento, luce, reattività e rifinitura.",
    "showcase.openCamp": "Anteprima Camp Walk",
    "showcase.openForest": "Anteprima Forest Scene",
    "wix.sub": "Toolkit Wix → Shopify (CSV processato localmente nel browser).",
    "wix.b1": "Mappatura campi, pulizia HTML, handle SEO",
    "wix.b2": "Privacy-first: tutto locale nel browser",
    "wix.b3": "Landing + pricing/policies pronte per il lancio",
    "wix.view": "Apri il sito",
    "wix.repo": "Repo GitHub",
    "dinesh.h3": "Dinesh Pulizie B&B (Bologna)",
    "dinesh.sub": "Sito locale orientato alla conversione per un servizio di pulizie in Italia.",
    "dinesh.b1": "Messaggio in italiano, blocchi fiducia e CTA immediate WhatsApp/Chiamata",
    "dinesh.b2": "Stile premium dark ottimizzato per mobile",
    "dinesh.b3": "Pensato per richieste preventivo rapide e condivisione social",
    "dinesh.view": "Apri il sito",
    "dinesh.repo": "Repo GitHub",
    "italy.h3": "Formula sito locale pronta per l'Italia",
    "italy.sub": "Un layout riutilizzabile che uso per attività locali italiane.",
    "italy.b1": "Servizio chiaro nei primi 5 secondi",
    "italy.b2": "Strategia conversione con priorità a WhatsApp",
    "italy.b3": "Blocchi prova sociale e UX preventivo rapido",
    "italy.cta": "Richiedi questo stile",
    "italy.repo": "Apri sito live",
    "offers.h2": "Pacchetti che chiudono velocemente",
    "offers.sub": "Prezzi trasparenti in EUR, pensati per piccole attività in Italia.",
    "offers.starter.tag": "Il più richiesto per nuove attività",
    "offers.starter.h3": "Sito Starter",
    "offers.starter.b1": "Sito moderno 1 pagina (ottimizzato mobile)",
    "offers.starter.b2": "Integrazione WhatsApp + Chiamata + Google Maps",
    "offers.starter.b3": "Consegna in 3-4 giorni",
    "offers.business.tag": "Miglior valore (difficile dire no)",
    "offers.business.h3": "Sito Business Growth",
    "offers.business.b1": "Tutto lo Starter + fino a 5 pagine",
    "offers.business.b2": "Setup SEO base + copy orientato conversione",
    "offers.business.b3": "1 poster promozionale + kit social post",
    "offers.webapp.tag": "Per flussi digitali personalizzati",
    "offers.webapp.h3": "Piccola Web App / Software",
    "offers.webapp.b1": "Tool per prenotazioni, preventivi, dashboard o automazioni",
    "offers.webapp.b2": "Frontend + backend API su misura",
    "offers.webapp.b3": "Consegna a fasi con opzioni supporto",
    "offers.cta": "Blocca ora il tuo slot su WhatsApp",
    "offers.note": "Offerta lancio: 1 revisione gratuita + risposta rapida entro 1 ora (8:00-22:00 ora Italia).",
    "poster.h2": "Pacchetto poster incluso",
    "poster.sub":
      "Ho creato un pacchetto poster separato da condividere in gruppi Facebook, stati WhatsApp e pagine locali.",
    "poster.open": "Apri pacchetto poster",
    "camp.sub": "Animazione artigianale: walk cycle, fuoco, fumo.",
    "camp.b1": "Canvas 2D + movimento procedurale",
    "camp.b2": "Responsive su qualsiasi schermo",
    "camp.b3": "Glow del fuoco, braci, simulazione fumo",
    "forest.sub": "Composizione parallax + interaction design.",
    "forest.b1": "Gradienti, luce, profondità",
    "forest.b2": "Esperienza portal overlay",
    "forest.b3": "Micro-interazioni curate",
    "demo.preview": "Anteprima",
    "demo.open": "Apri demo",
    "exp.h2": "Esperienza",
    "exp.sub": "Sistemi scalabili, consegna pulita, mentoring.",
    "exp.role1": "Software Engineer",
    "exp.company1": "Care Systems South Asia (Da remoto — New York, USA) • Apr 2020 — Oggi",
    "exp.b11": "Progettazione e manutenzione di sistemi di workforce management in ambito healthcare.",
    "exp.b12": "Sviluppo di REST API ottimizzate con Spring Boot; maggiore affidabilità con validazioni e test.",
    "exp.b13": "UI React responsive; traduzione dei design Figma con alta fedeltà UI/UX.",
    "exp.b14": "Mentoring su debugging e clean code per i membri junior del team.",
    "exp.role2": "Educatore freelance (Matematica & ICT)",
    "exp.company2": "Online • 2018 — Oggi",
    "exp.b21": "Percorsi di apprendimento strutturati; crescita in comunicazione e leadership.",
    "skills.h2": "Competenze tecniche",
    "skills.sub": "Uno stack pratico per prodotti in produzione.",
    "contact.h2": "Contatto",
    "contact.sub":
      "Se stai assumendo o vuoi collaborare, rispondo rapidamente con disponibilità ed esempi.",
    "contact.linkedin": "Profilo LinkedIn",
    "contact.itHint": "Intro breve per l’Italia:",
    "contact.itLine":
      "“Sono uno sviluppatore full stack (Java/React). Mi piace costruire prodotti affidabili e UI precise.”",
    "pitch.h3": "Pitch rapido",
    "pitch.p":
      "Sono un full stack engineer con solide competenze backend Java/Spring Boot e un focus frontend su performance React e dettagli UX. Ho rilasciato funzionalità SaaS in ambito healthcare end-to-end, migliorato l’affidabilità delle API e supporto i colleghi con mentoring.",
    "modal.title": "Anteprima demo",
    "modal.openNewTab": "Apri in nuova scheda",
    "modal.close": "Chiudi",
    "toast.emailCopied": "Email copiata",
    "toast.copyFailed": "Copia non riuscita",
    "edu.h3": "Formazione & certificazioni",
    "edu.d1": "Laurea (Hons) in ICT",
    "edu.d1s": "University of Sri Jayewardenepura, Sri Lanka",
    "edu.d2": "A/L (Ingegneria Tecnologica)",
    "edu.d2s": "St. Thomas’ College, Matale",
    "edu.d2x": "(46° nazionale, 3° distretto • Z-Score 2.6116)",
    "edu.d3": "Master in Digital Marketing",
    "edu.d3x": "(moduli completati)",
    "edu.d3s": "Università di Bologna, Italia",
    "edu.d4": "IELTS",
    "edu.d4s": "Band complessivo 7.0 (British Council)",
    "edu.d5": "Lingue",
    "edu.d5s": "Inglese (professionale), Singalese (madrelingua), Italiano (base)",
    "toast.useServer": "Suggerimento: apri il portfolio con http://127.0.0.1:4173/portfolio/ per le anteprime live.",
    "care.h3": "Dashboard mobile healthcare",
    "care.sub": "UI mobile-first per workforce management (React).",
    "care.b1": "Navigazione chiara e azioni rapide per l’uso quotidiano",
    "care.b2": "Layout ottimizzato per schermi piccoli e touch target accessibili",
    "care.b3": "UI precisa e coerente con i requisiti di prodotto",
    "care.seeExp": "Vedi esperienza correlata"
  }
};

function setTheme(theme) {
  const root = document.documentElement;
  if (theme === "light") root.setAttribute("data-theme", "light");
  else root.removeAttribute("data-theme");
  localStorage.setItem("portfolio.theme", JSON.stringify(theme));
}

function getInitialTheme() {
  const stored = safeJsonParse(localStorage.getItem("portfolio.theme"));
  if (stored === "light" || stored === "dark") return stored;
  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
  return prefersLight ? "light" : "dark";
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;
  const nodes = document.querySelectorAll("[data-i18n]");
  for (const n of nodes) {
    const key = n.getAttribute("data-i18n");
    if (!key) continue;
    const val = dict[key];
    if (typeof val === "string") n.textContent = val;
  }
}

function setLang(lang) {
  const next = lang === "it" ? "it" : "en";
  const root = document.documentElement;
  root.setAttribute("data-lang", next);
  root.setAttribute("lang", next === "it" ? "it" : "en");
  localStorage.setItem("portfolio.lang", JSON.stringify(next));

  const enBtn = document.getElementById("langEN");
  const itBtn = document.getElementById("langIT");
  if (enBtn) {
    enBtn.setAttribute("aria-pressed", String(next === "en"));
    enBtn.textContent = "EN";
    enBtn.setAttribute("translate", "no");
  }
  if (itBtn) {
    itBtn.setAttribute("aria-pressed", String(next === "it"));
    itBtn.textContent = "IT";
    itBtn.setAttribute("translate", "no");
  }

  applyI18n(next);
}

function getInitialLang() {
  const stored = safeJsonParse(localStorage.getItem("portfolio.lang"));
  if (stored === "it" || stored === "en") return stored;
  return "it";
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "true");
  el.style.position = "fixed";
  el.style.opacity = "0";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

function toast(message) {
  const t = document.createElement("div");
  t.textContent = message;
  t.style.position = "fixed";
  t.style.left = "50%";
  t.style.bottom = "22px";
  t.style.transform = "translateX(-50%)";
  t.style.zIndex = "999";
  t.style.padding = "10px 12px";
  t.style.borderRadius = "999px";
  t.style.border = "1px solid rgba(255,255,255,0.16)";
  t.style.background = "rgba(10, 12, 20, 0.78)";
  t.style.backdropFilter = "blur(10px)";
  t.style.color = "rgba(255,255,255,0.92)";
  t.style.boxShadow = "0 14px 40px rgba(0,0,0,0.35)";
  t.style.fontSize = "13px";
  t.style.maxWidth = "calc(100% - 40px)";
  t.style.textAlign = "center";

  if (document.documentElement.getAttribute("data-theme") === "light") {
    t.style.border = "1px solid rgba(12,18,40,0.16)";
    t.style.background = "rgba(255,255,255,0.78)";
    t.style.color = "rgba(12,18,40,0.90)";
  }

  document.body.appendChild(t);
  window.setTimeout(() => {
    t.style.transition = "opacity 0.3s ease";
    t.style.opacity = "0";
    window.setTimeout(() => t.remove(), 350);
  }, 1200);
}

function setupDemoModal() {
  const modal = document.getElementById("demoModal");
  const frame = document.getElementById("demoFrame");
  const openNewTab = document.getElementById("demoOpenNewTab");

  if (!modal || !frame || !openNewTab) return;

  const isFileProtocol = window.location.protocol === "file:";

  function open(src) {
    if (isFileProtocol) {
      window.open(src, "_blank", "noopener,noreferrer");
      const lang = document.documentElement.getAttribute("data-lang") || "en";
      toast(I18N[lang]?.["toast.useServer"] || I18N.en["toast.useServer"]);
      return;
    }
    frame.setAttribute("src", src);
    openNewTab.setAttribute("href", src);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    frame.setAttribute("src", "about:blank");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const opener = target.closest("[data-demo-open]");
    if (opener) {
      const src = opener.getAttribute("data-demo-open");
      if (src) open(src);
      return;
    }

    if (target.closest("[data-demo-close]")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function main() {
  document.getElementById("year").textContent = String(new Date().getFullYear());

  const initialTheme = getInitialTheme();
  setTheme(initialTheme);

  const initialLang = getInitialLang();
  setLang(initialLang);

  document.getElementById("langEN")?.addEventListener("click", () => setLang("en"));
  document.getElementById("langIT")?.addEventListener("click", () => setLang("it"));

  const themeToggle = document.getElementById("themeToggle");
  themeToggle?.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    setTheme(isLight ? "dark" : "light");
  });

  const copyEmail = document.getElementById("copyEmail");
  copyEmail?.addEventListener("click", async () => {
    const email = copyEmail.getAttribute("data-copy");
    if (!email) return;
    const lang = document.documentElement.getAttribute("data-lang") || "en";
    try {
      await copyText(email);
      toast(I18N[lang]?.["toast.emailCopied"] || I18N.en["toast.emailCopied"]);
    } catch {
      toast(I18N[lang]?.["toast.copyFailed"] || I18N.en["toast.copyFailed"]);
    }
  });

  setupDemoModal();

  // Prevent iframe previews from spamming console on file://
  if (window.location.protocol === "file:") {
    const peek = document.querySelector(".showcase__peek iframe");
    if (peek) peek.setAttribute("src", "about:blank");
  }
}

main();
