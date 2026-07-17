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
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",
    "cta.github": "GitHub",
    "cta.architecture": "View Engineering Architecture",
    "cta.viewProjects": "Featured engineering",
    "cta.contact": "Contact",
    "hero.eyebrow": "Senior Full-Stack Engineer | Java & React Specialist",
    "hero.h1": "Senior Full-Stack Engineer | Java & React Specialist",
    "hero.lead":
      "Architecting high-performance enterprise platforms and scalable microservices. Currently pursuing MSc in Computer Science (Poland).",
    "chip.years": "5+ years production engineering",
    "chip.health": "Healthcare SaaS",
    "chip.api": "Spring Boot microservices",
    "chip.msc": "MSc Computer Science (Poland)",
    "chip.rank": "A/L Island Rank 46",
    "link.copyEmail": "Copy email",
    "link.call": "Call",
    "card.role": "Senior Full-Stack Engineer",
    "card.loc": "Sri Lanka • Remote • MSc candidate (Poland)",
    "stat.software": "Software engineering",
    "projects.h2": "Featured Engineering",
    "projects.sub": "Production systems and tooling — architecture, reliability, and delivery.",
    "feat.badge1": "Enterprise SaaS",
    "feat.arka.h3": "ArkaTask — Enterprise Workforce System",
    "feat.arka.p":
      "Full-stack SaaS for Italian market. Java/Spring Boot backend with React frontend. Features automated PDF generation, WhatsApp integration, and Supabase sync.",
    "feat.arka.b1": "Cloud sync, offline-safe local state, and disaster-recovery backups",
    "feat.arka.b2": "Scheduling, reporting, and multi-device operations for field teams",
    "feat.arka.b3": "Deployed as a static frontend with managed cloud data layer",
    "feat.arka.live": "Live system",
    "feat.arka.repo": "GitHub",
    "feat.badge2": "Browser tooling",
    "feat.wix.h3": "Wix to Shopify Migrator",
    "feat.wix.p": "Production Chrome Extension for automated e-commerce data migration.",
    "feat.wix.b1": "Local CSV processing with smart field mapping and HTML cleanup",
    "feat.wix.b2": "Privacy-first: data stays in the browser",
    "feat.wix.b3": "Built for reliable Wix → Shopify catalog transfers",
    "feat.wix.live": "Product site",
    "feat.wix.repo": "Extension repo",
    "exp.h2": "Experience",
    "exp.sub": "Enterprise delivery, clean architecture, and mentoring.",
    "exp.badge": "Primary role",
    "exp.role1": "Software Engineer",
    "exp.company1": "Care Systems South Asia (Remote — New York, USA) • Apr 2020 — Present",
    "exp.b11": "Migrated legacy monolithic architecture to Spring Boot microservices.",
    "exp.b12": "Optimized React.js frontend performance, reducing load times by 40%.",
    "exp.b13": "Designed secure REST APIs for healthcare workforce management.",
    "exp.b14": "Architected and maintained enterprise workforce platforms in healthcare.",
    "exp.b15": "Mentored junior engineers on debugging, testing, and clean code practices.",
    "skills.h2": "Technical skills",
    "skills.sub": "Stack focused on scalable backend systems and modern frontends.",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.cloud": "Cloud / DevOps",
    "skills.ways": "Ways of working",
    "edu.h3": "Education & certifications",
    "edu.d0": "MSc in Computer Science (planned)",
    "edu.d0s": "Poland · Feb 2027 intake",
    "edu.d1": "BSc (Hons) in ICT",
    "edu.d1s": "University of Sri Jayewardenepura, Sri Lanka",
    "edu.d2": "A/L (Engineering Technology)",
    "edu.d2s": "St. Thomas’ College, Matale",
    "edu.d2x": "(Island Rank 46, District Rank 3 · Z-Score 2.6116)",
    "edu.d4": "IELTS",
    "edu.d4s": "Overall Band 7.0 (British Council)",
    "edu.d5": "Languages",
    "edu.d5s": "English (Professional), Sinhalese (Native), Italian (Beginner)",
    "about.h2": "About",
    "about.p":
      "I am a performance-driven software engineer with 5+ years of experience building diverse systems from healthcare SaaS to freelance enterprise tools. My focus is on clean architecture, type safety, and scalability.",
    "contact.h2": "Contact",
    "contact.sub":
      "Open to MSc collaboration, engineering roles, and technical discussions. I reply quickly with availability and examples.",
    "contact.linkedin": "LinkedIn profile",
    "pitch.h3": "Profile summary",
    "pitch.p":
      "I am a performance-driven software engineer with 5+ years of experience building diverse systems from healthcare SaaS to freelance enterprise tools. My focus is on clean architecture, type safety, and scalability.",
    "kv.location": "Focus",
    "kv.locationVal": "MSc CS · Poland (2027)",
    "toast.emailCopied": "Email copied",
    "toast.copyFailed": "Copy failed",
  },
  it: {
    "nav.projects": "Progetti",
    "nav.experience": "Esperienza",
    "nav.skills": "Competenze",
    "nav.about": "Profilo",
    "nav.contact": "Contatto",
    "cta.github": "GitHub",
    "cta.architecture": "Vedi architettura engineering",
    "cta.viewProjects": "Engineering in evidenza",
    "cta.contact": "Contatto",
    "hero.eyebrow": "Senior Full-Stack Engineer | Specialista Java & React",
    "hero.h1": "Senior Full-Stack Engineer | Specialista Java & React",
    "hero.lead":
      "Architetture enterprise ad alte prestazioni e microservizi scalabili. In percorso verso MSc in Computer Science (Polonia).",
    "chip.years": "5+ anni di engineering in produzione",
    "chip.health": "SaaS healthcare",
    "chip.api": "Microservizi Spring Boot",
    "chip.msc": "MSc Computer Science (Polonia)",
    "chip.rank": "A/L 46° posto nazionale",
    "link.copyEmail": "Copia email",
    "link.call": "Chiama",
    "card.role": "Senior Full-Stack Engineer",
    "card.loc": "Sri Lanka • Remoto • Candidato MSc (Polonia)",
    "stat.software": "Ingegneria software",
    "projects.h2": "Engineering in evidenza",
    "projects.sub": "Sistemi e tooling in produzione — architettura, affidabilità, delivery.",
    "feat.badge1": "SaaS enterprise",
    "feat.arka.h3": "ArkaTask — Enterprise Workforce System",
    "feat.arka.p":
      "SaaS full-stack per il mercato italiano. Backend Java/Spring Boot e frontend React. PDF automatici, integrazione WhatsApp e sync Supabase.",
    "feat.arka.b1": "Sync cloud, stato locale resiliente e backup di disaster recovery",
    "feat.arka.b2": "Scheduling, report e operazioni multi-device per team sul campo",
    "feat.arka.b3": "Frontend statico con data layer cloud gestito",
    "feat.arka.live": "Sistema live",
    "feat.arka.repo": "GitHub",
    "feat.badge2": "Tooling browser",
    "feat.wix.h3": "Wix to Shopify Migrator",
    "feat.wix.p": "Estensione Chrome di produzione per migrazione dati e-commerce automatizzata.",
    "feat.wix.b1": "Elaborazione CSV locale con mapping campi e pulizia HTML",
    "feat.wix.b2": "Privacy-first: i dati restano nel browser",
    "feat.wix.b3": "Trasferimenti catalogo Wix → Shopify affidabili",
    "feat.wix.live": "Sito prodotto",
    "feat.wix.repo": "Repo estensione",
    "exp.h2": "Esperienza",
    "exp.sub": "Delivery enterprise, architettura pulita e mentoring.",
    "exp.badge": "Ruolo principale",
    "exp.role1": "Software Engineer",
    "exp.company1": "Care Systems South Asia (Remoto — New York, USA) • Apr 2020 — Oggi",
    "exp.b11": "Migrazione da monolite legacy a microservizi Spring Boot.",
    "exp.b12": "Ottimizzazione performance React.js con riduzione dei tempi di caricamento del 40%.",
    "exp.b13": "Progettazione di REST API sicure per workforce management healthcare.",
    "exp.b14": "Architettura e manutenzione di piattaforme workforce enterprise in healthcare.",
    "exp.b15": "Mentoring junior su debugging, testing e clean code.",
    "skills.h2": "Competenze tecniche",
    "skills.sub": "Stack orientato a backend scalabili e frontend moderni.",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.cloud": "Cloud / DevOps",
    "skills.ways": "Metodo di lavoro",
    "edu.h3": "Formazione & certificazioni",
    "edu.d0": "MSc in Computer Science (pianificato)",
    "edu.d0s": "Polonia · intake Feb 2027",
    "edu.d1": "Laurea (Hons) in ICT",
    "edu.d1s": "University of Sri Jayewardenepura, Sri Lanka",
    "edu.d2": "A/L (Ingegneria Tecnologica)",
    "edu.d2s": "St. Thomas’ College, Matale",
    "edu.d2x": "(46° nazionale, 3° distretto · Z-Score 2.6116)",
    "edu.d4": "IELTS",
    "edu.d4s": "Band complessivo 7.0 (British Council)",
    "edu.d5": "Lingue",
    "edu.d5s": "Inglese (professionale), Singalese (madrelingua), Italiano (base)",
    "about.h2": "Profilo",
    "about.p":
      "Sono un software engineer orientato alle performance, con 5+ anni di esperienza su sistemi diversi: da SaaS healthcare a tool enterprise. Focus su clean architecture, type safety e scalabilità.",
    "contact.h2": "Contatto",
    "contact.sub":
      "Aperto a collaborazione MSc, ruoli engineering e discussioni tecniche. Rispondo rapidamente con disponibilità ed esempi.",
    "contact.linkedin": "Profilo LinkedIn",
    "pitch.h3": "Sintesi profilo",
    "pitch.p":
      "Sono un software engineer orientato alle performance, con 5+ anni di esperienza su sistemi diversi: da SaaS healthcare a tool enterprise. Focus su clean architecture, type safety e scalabilità.",
    "kv.location": "Focus",
    "kv.locationVal": "MSc CS · Polonia (2027)",
    "toast.emailCopied": "Email copiata",
    "toast.copyFailed": "Copia non riuscita",
  },
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
  return "en";
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

function main() {
  document.getElementById("year").textContent = String(new Date().getFullYear());

  setTheme(getInitialTheme());
  setLang(getInitialLang());

  document.getElementById("langEN")?.addEventListener("click", () => setLang("en"));
  document.getElementById("langIT")?.addEventListener("click", () => setLang("it"));

  document.getElementById("themeToggle")?.addEventListener("click", () => {
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
}

main();
