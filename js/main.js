/* ==========================================================================
   Portafolio — lógica
   1. CONFIG: tus datos personales (edita solo este bloque)
   2. Traducciones ES / EN
   3. Interacciones (idioma, menú, reveal, copiar email, scroll)
   ========================================================================== */

/* ----------------------------- 1. CONFIG ----------------------------- */

const CONFIG = {
  name: "Samuel Prado",
  initials: "SP", // vacío = se calcula desde el nombre
  email: "samuelpradouribe@gmail.com",
  github: "https://github.com/samuup",
  linkedin: "https://www.linkedin.com/in/samuel-prado-994940326",
  location: "Ciudad Guayana, Venezuela",
  photo: "", // ej: "assets/foto.jpg". Vacío = muestra iniciales

  projectRepo: "https://github.com/samuup/WarehOS", // repo de WarehOS
  bellaRepo: "https://github.com/samuup/Bella-Napoli", // repo de Bella Napoli
  siteRepo: "https://github.com/samuup/portfolio", // repo de este sitio
};

/* -------------------------- 2. TRADUCCIONES -------------------------- */

const TRANSLATIONS = {
  es: {
    "meta.role": "Desarrollador Full-Stack",
    "meta.description":
      "Portafolio de Samuel Prado, desarrollador full-stack con Python, Django, Node.js, React y PostgreSQL. También apps de escritorio y Android.",

    "a11y.skip": "Saltar al contenido",
    "a11y.langToggle": "Cambiar a inglés",
    "a11y.menu": "Menú",
    "a11y.home": "Inicio",
    "a11y.nav": "Principal",
    "a11y.social": "Redes",

    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.experience": "Trayectoria",
    "nav.contact": "Contacto",

    "hero.badge": "Disponible para nuevos retos",
    "hero.title": 'Desarrollo full-stack <span class="grad">de la base de datos a la interfaz</span>.',
    "hero.lead":
      "Soy desarrollador full-stack. Construyo aplicaciones web con Python, Django y Node.js en el backend, PostgreSQL, MySQL y MongoDB para los datos, y React en el frontend. Cuando el proyecto lo pide, también creo apps de escritorio y Android.",
    "hero.cta.projects": "Ver proyectos",
    "hero.cta.contact": "Hablemos",
    "hero.code.status": "compilando ideas…",

    "about.eyebrow": "Sobre mí",
    "about.title": "Código claro, apps que funcionan",
    "about.p1":
      "Soy desarrollador full-stack. Me muevo con comodidad entre el backend (Python/Django, Node.js), las bases de datos (PostgreSQL, MySQL, MongoDB, Cassandra, Neo4j) y el frontend (React, JavaScript, TypeScript). Me importan la arquitectura, el rendimiento y que la interfaz se entienda sin manual.",
    "about.p2":
      "He construido Bella Napoli, una web de pedidos para una pizzería con Node.js, Express, PostgreSQL y Socket.IO: pedidos en cuatro pasos, pagos con comprobante, notificaciones en tiempo real y panel de administración con CRUD. También WarehOS, un sistema de inventario de escritorio con múltiples almacenes, roles, auditoría y reportes, y una app Android 100% offline para el control de movimientos de camiones en una planta de procesamiento.",
    "about.p3":
      "Curso el séptimo semestre de Ingeniería en Informática en la UNEG. Busco mi primera oportunidad profesional para aportar en producto, arquitectura y calidad de código, y seguir aprendiendo de otros desarrolladores.",
    "about.facts.location": "Ubicación",
    "about.facts.focus": "Enfoque",
    "about.facts.focusValue": "Desarrollo full-stack",
    "about.facts.stack": "Stack principal",
    "about.facts.languages": "Idiomas",
    "about.facts.languagesValue": "Español · Inglés",

    "projects.eyebrow": "Proyectos",
    "projects.title": "Cosas que he construido",
    "projects.lead":
      "Proyectos reales, con restricciones reales. Cada uno me enseñó algo distinto sobre producto y código.",
    "projects.featured": "Proyecto destacado",
    "projects.p1.subtitle": "Web de pedidos para pizzería · Node.js + PostgreSQL",
    "projects.p1.desc":
      "Aplicación web completa para una pizzería: los clientes arman su pedido en cuatro pasos, pagan con referencia o comprobante y siguen el estado en tiempo real. Incluye panel de administración con CRUD del menú y gestión de pedidos.",
    "projects.p1.f1": "Pedidos en 4 pasos con total en tiempo real",
    "projects.p1.f2": "Panel admin con CRUD de menú, pedidos y pagos",
    "projects.p1.f3": "Estado del pedido en vivo con Socket.IO",
    "projects.p1.f4": "Autenticación con bcrypt, CSRF y recuperación de contraseña",
    "projects.p1.note": "MVP funcional",
    "projects.p2.tag": "Proyecto personal",
    "projects.p2.subtitle": "Sistema de inventario de escritorio · 100% offline",
    "projects.p2.desc":
      "Aplicación de escritorio multiplataforma para gestionar inventarios: productos, movimientos, múltiples almacenes, lotes con vencimiento (FEFO), roles y permisos, auditoría, reportes PDF/CSV y copias de seguridad cifradas.",
    "projects.p2.f1": "Funciona 100% offline con base de datos SQLite local",
    "projects.p2.f2": "Reportes PDF/CSV, etiquetas de código de barras y backups cifrados",
    "projects.p2.f3": "Roles, auditoría y licenciamiento Pro por máquina",
    "projects.viewCode": "Ver código",
    "projects.p3.tag": "Prototipo funcional",
    "projects.p3.title": "Control de Movimientos",
    "projects.p3.subtitle": "App Android para planta de procesamiento",
    "projects.p3.desc":
      "Aplicación 100% offline para registrar la entrada y salida de camiones. Incluye autenticación local con bloqueo tras intentos fallidos, gestión de camiones, cálculo automático de horas, dashboard con métricas y exportación de reportes en PDF.",
    "projects.p3.f1": "Funciona sin conexión a internet",
    "projects.p3.f2": "Reportes exportables a PDF",
    "projects.p3.f3": "Arquitectura MVVM con Room y Flow",
    "projects.p3.note": "Código privado",
    "projects.p4.status": "Publicado",
    "projects.p4.title": "Portafolio personal",
    "projects.p4.desc":
      "Sitio estático bilingüe (ES/EN) sin frameworks ni dependencias de build. Este mismo sitio: rápido, accesible y desplegado gratis en GitHub Pages.",
    "projects.viewRepo": "Ver repositorio",
    "projects.more.title": "Más en GitHub",
    "projects.more.desc": "Experimentos, prácticas y proyectos en curso.",
    "projects.more.link": "Ver perfil",

    "skills.eyebrow": "Habilidades",
    "skills.title": "Con qué trabajo",
    "skills.lead": "Tecnologías y herramientas que uso de forma habitual.",
    "skills.languages": "Lenguajes",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend y datos",
    "skills.mobile": "Escritorio y móvil",
    "skills.tools": "Herramientas",

    "experience.eyebrow": "Trayectoria",
    "experience.title": "Experiencia y formación",
    "experience.e1.date": "2026",
    "experience.e1.title": "Bella Napoli — Proyecto personal",
    "experience.e1.org": "Aplicación web full-stack · Node.js + PostgreSQL",
    "experience.e1.desc":
      "Desarrollo de una web de pedidos con Node.js, Express, EJS y PostgreSQL: autenticación con bcrypt y CSRF, pedidos en cuatro pasos con total en tiempo real, pagos con referencia o comprobante, notificaciones con Socket.IO y panel de administración con CRUD y gestión de pedidos.",
    "experience.e2.date": "2026",
    "experience.e2.title": "Creador de WarehOS — Proyecto personal",
    "experience.e2.org": "Aplicación de escritorio",
    "experience.e2.desc":
      "Diseño y desarrollo de un sistema de inventario multiplataforma con Electron, React y TypeScript: base de datos local cifrada, control de roles, auditoría, reportes y empaquetado para Windows, macOS y Linux.",
    "experience.e3.date": "2026",
    "experience.e3.title": "Control de Movimientos — Prototipo Android",
    "experience.e3.org": "App offline para planta de procesamiento",
    "experience.e3.desc":
      "Desarrollo de un prototipo offline para el control de movimientos de camiones: diseño de la base de datos, capa de repositorios, interfaz en Jetpack Compose y generación de reportes PDF.",
    "experience.e4.date": "En curso",
    "experience.e4.title": "Ingeniería en Informática",
    "experience.e4.org": "Universidad Nacional Experimental de Guayana (UNEG)",
    "experience.e4.desc":
      "Séptimo semestre. Formación en programación, bases de datos, ingeniería de software y desarrollo de aplicaciones.",

    "contact.eyebrow": "Contacto",
    "contact.title": "¿Construimos algo juntos?",
    "contact.lead":
      "Estoy buscando mi primera oportunidad como desarrollador full-stack. También estoy abierto a colaboraciones y proyectos freelance. Escríbeme y te respondo lo antes posible.",
    "contact.emailBtn": "Enviar un correo",
    "contact.copy": "Copiar correo",
    "contact.note": "También puedes encontrarme en",

    "footer.made": "Diseñado y construido con HTML, CSS y JavaScript.",
    "footer.deployed": "Desplegado en GitHub Pages",

    "toast.copied": "¡Correo copiado!",
    "toast.copyError": "No se pudo copiar. El correo es: ",
  },

  en: {
    "meta.role": "Full-Stack Developer",
    "meta.description":
      "Portfolio of Samuel Prado, a full-stack developer working with Python, Django, Node.js, React and PostgreSQL. Also desktop and Android apps.",

    "a11y.skip": "Skip to content",
    "a11y.langToggle": "Switch to Spanish",
    "a11y.menu": "Menu",
    "a11y.home": "Home",
    "a11y.nav": "Main",
    "a11y.social": "Social links",

    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.badge": "Open to new challenges",
    "hero.title": 'Full-stack development <span class="grad">from database to interface</span>.',
    "hero.lead":
      "I'm a full-stack developer. I build web applications with Python, Django and Node.js on the backend, PostgreSQL, MySQL and MongoDB for data, and React on the frontend. When a project calls for it, I also build desktop and Android apps.",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Let's talk",
    "hero.code.status": "compiling ideas…",

    "about.eyebrow": "About me",
    "about.title": "Clear code, apps that work",
    "about.p1":
      "I'm a full-stack developer. I move comfortably between the backend (Python/Django, Node.js), databases (PostgreSQL, MySQL, MongoDB, Cassandra, Neo4j) and the frontend (React, JavaScript, TypeScript). I care about architecture, performance, and interfaces that make sense without a manual.",
    "about.p2":
      "I've built Bella Napoli, a pizzeria ordering site with Node.js, Express, PostgreSQL and Socket.IO: a four-step order flow, receipt-based payments, real-time notifications and an admin panel with CRUD. I also built WarehOS, a desktop inventory system with multiple warehouses, roles, auditing and reports, and a fully offline Android app to track truck movements at a processing plant.",
    "about.p3":
      "I'm in my seventh semester of Computer Engineering at UNEG. I'm looking for my first professional opportunity to contribute to product, architecture and code quality while learning from other developers.",
    "about.facts.location": "Location",
    "about.facts.focus": "Focus",
    "about.facts.focusValue": "Full-stack development",
    "about.facts.stack": "Main stack",
    "about.facts.languages": "Languages",
    "about.facts.languagesValue": "Spanish · English",

    "projects.eyebrow": "Projects",
    "projects.title": "Things I've built",
    "projects.lead":
      "Real projects with real constraints. Each one taught me something different about product and code.",
    "projects.featured": "Featured project",
    "projects.p1.subtitle": "Pizzeria ordering website · Node.js + PostgreSQL",
    "projects.p1.desc":
      "A complete web application for a pizzeria: customers build their order in four steps, pay by reference or receipt, and follow the order status in real time. It includes an admin panel with menu CRUD and order management.",
    "projects.p1.f1": "Four-step ordering with a live order total",
    "projects.p1.f2": "Admin panel with menu, order and payment CRUD",
    "projects.p1.f3": "Live order status with Socket.IO",
    "projects.p1.f4": "Authentication with bcrypt, CSRF and password recovery",
    "projects.p1.note": "Working MVP",
    "projects.p2.tag": "Personal project",
    "projects.p2.subtitle": "Desktop inventory system · 100% offline",
    "projects.p2.desc":
      "A cross-platform desktop application to manage inventory: products, movements, multiple warehouses, batches with expiry (FEFO), roles and permissions, auditing, PDF/CSV reports and encrypted backups.",
    "projects.p2.f1": "Runs 100% offline with a local SQLite database",
    "projects.p2.f2": "PDF/CSV reports, barcode labels and encrypted backups",
    "projects.p2.f3": "Roles, auditing and per-machine Pro licensing",
    "projects.viewCode": "View code",
    "projects.p3.tag": "Working prototype",
    "projects.p3.title": "Truck Movement Control",
    "projects.p3.subtitle": "Android app for a processing plant",
    "projects.p3.desc":
      "A fully offline application to log truck check-ins and check-outs. It includes local authentication with lockout after failed attempts, truck management, automatic hour calculation, a metrics dashboard and PDF report export.",
    "projects.p3.f1": "Works without an internet connection",
    "projects.p3.f2": "Reports exportable to PDF",
    "projects.p3.f3": "MVVM architecture with Room and Flow",
    "projects.p3.note": "Private code",
    "projects.p4.status": "Live",
    "projects.p4.title": "Personal portfolio",
    "projects.p4.desc":
      "A bilingual (ES/EN) static site with no frameworks or build dependencies. This very site: fast, accessible and deployed for free on GitHub Pages.",
    "projects.viewRepo": "View repository",
    "projects.more.title": "More on GitHub",
    "projects.more.desc": "Experiments, practice and works in progress.",
    "projects.more.link": "View profile",

    "skills.eyebrow": "Skills",
    "skills.title": "What I work with",
    "skills.lead": "Technologies and tools I use on a regular basis.",
    "skills.languages": "Languages",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend & data",
    "skills.mobile": "Desktop & mobile",
    "skills.tools": "Tools",

    "experience.eyebrow": "Experience",
    "experience.title": "Experience & education",
    "experience.e1.date": "2026",
    "experience.e1.title": "Bella Napoli — Personal project",
    "experience.e1.org": "Full-stack web application · Node.js + PostgreSQL",
    "experience.e1.desc":
      "Built an ordering website with Node.js, Express, EJS and PostgreSQL: bcrypt and CSRF authentication, a four-step order flow with a live total, reference or receipt payments, Socket.IO notifications and an admin panel with CRUD and order management.",
    "experience.e2.date": "2026",
    "experience.e2.title": "Creator of WarehOS — Personal project",
    "experience.e2.org": "Desktop application",
    "experience.e2.desc":
      "Designed and built a cross-platform inventory system with Electron, React and TypeScript: encrypted local database, role-based access, auditing, reports and packaging for Windows, macOS and Linux.",
    "experience.e3.date": "2026",
    "experience.e3.title": "Truck Movement Control — Android prototype",
    "experience.e3.org": "Offline app for a processing plant",
    "experience.e3.desc":
      "Built an offline prototype to track truck movements: database design, repository layer, Jetpack Compose UI and PDF report generation.",
    "experience.e4.date": "In progress",
    "experience.e4.title": "Computer Engineering",
    "experience.e4.org": "Universidad Nacional Experimental de Guayana (UNEG)",
    "experience.e4.desc":
      "Seventh semester. Coursework in programming, databases, software engineering and application development.",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's build something together?",
    "contact.lead":
      "I'm looking for my first opportunity as a full-stack developer. I'm also open to collaborations and freelance projects. Send me a message and I'll get back to you as soon as I can.",
    "contact.emailBtn": "Send an email",
    "contact.copy": "Copy email",
    "contact.note": "You can also find me on",

    "footer.made": "Designed and built with HTML, CSS and JavaScript.",
    "footer.deployed": "Deployed on GitHub Pages",

    "toast.copied": "Email copied!",
    "toast.copyError": "Could not copy. The email is: ",
  },
};

/* --------------------------- 3. INTERACCIONES --------------------------- */

const STORAGE_KEY = "portfolio-lang";
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

let currentLang = "es";

/* ---------- Config ---------- */

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

function applyConfig() {
  const initials = CONFIG.initials || getInitials(CONFIG.name);

  $$("[data-config]").forEach((el) => {
    const key = el.dataset.config;
    if (key === "initials") {
      el.textContent = initials;
    } else if (key === "email") {
      el.textContent = CONFIG.email;
    } else if (CONFIG[key]) {
      el.textContent = CONFIG[key];
    }
  });

  $$("[data-config-href]").forEach((el) => {
    const key = el.dataset.configHref;
    let href = CONFIG[key] || "";

    if (key === "emailLink") {
      href = `mailto:${CONFIG.email}`;
    }

    if (href) {
      el.setAttribute("href", href);
    }

    if (key === "linkedin") {
      el.hidden = !CONFIG.linkedin;
    }
  });

  const avatar = $("#avatar");
  if (avatar && CONFIG.photo) {
    avatar.classList.add("has-photo");
    avatar.style.backgroundImage = `url("${CONFIG.photo}")`;
  }

  $$("[data-config='name']").forEach((el) => {
    el.textContent = CONFIG.name;
  });

  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

/* ---------- Idioma ---------- */

function detectLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch (error) {
    /* almacenamiento no disponible */
  }
  return (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
}

function applyLang(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];

  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  $$("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  $$("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
  });

  const pageTitle = `${CONFIG.name} — ${t["meta.role"]}`;
  document.title = pageTitle;

  const description = $('meta[name="description"]');
  if (description) description.setAttribute("content", t["meta.description"]);

  const ogTitle = $('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", pageTitle);

  const ogDescription = $('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", t["meta.description"]);

  const ogLocale = $('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute("content", lang === "es" ? "es_ES" : "en_US");

  const langLabel = $("#langLabel");
  if (langLabel) langLabel.textContent = lang === "es" ? "EN" : "ES";

  const langToggle = $("#langToggle");
  if (langToggle) langToggle.setAttribute("aria-label", t["a11y.langToggle"]);

  const menuToggle = $("#menuToggle");
  if (menuToggle) menuToggle.setAttribute("aria-label", t["a11y.menu"]);

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    /* ignorar */
  }
}

/* ---------- Menú móvil ---------- */

function initMenu() {
  const nav = $("#nav");
  const toggle = $("#menuToggle");
  if (!nav || !toggle) return;

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$("a", nav).forEach((link) => link.addEventListener("click", close));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("is-open")) return;
    if (nav.contains(event.target) || toggle.contains(event.target)) return;
    close();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) close();
  });
}

/* ---------- Header al hacer scroll ---------- */

function initHeader() {
  const header = $("#siteHeader");
  if (!header) return;

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Animación de aparición ---------- */

function initReveal() {
  const items = $$(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------- Scroll spy ---------- */

function initScrollSpy() {
  const links = $$(".nav a");
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  let ticking = false;

  const update = () => {
    const offset = 140;
    let active = null;

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= offset) active = section.id;
    });

    links.forEach((link) => {
      if (link.getAttribute("href") === `#${active}`) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );

  update();
}

/* ---------- Copiar correo ---------- */

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("is-visible");

  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise((resolve, reject) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy") ? resolve() : reject(new Error("copy failed"));
    } catch (error) {
      reject(error);
    } finally {
      document.body.removeChild(textarea);
    }
  });
}

function initCopyEmail() {
  const button = $("#copyEmail");
  if (!button) return;

  button.addEventListener("click", () => {
    const t = TRANSLATIONS[currentLang];

    copyText(CONFIG.email)
      .then(() => showToast(t["toast.copied"]))
      .catch(() => showToast(t["toast.copyError"] + CONFIG.email));
  });
}

/* ---------- Arranque ---------- */

function init() {
  applyConfig();
  applyLang(detectLang());

  const langToggle = $("#langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLang(currentLang === "es" ? "en" : "es");
    });
  }

  initMenu();
  initHeader();
  initReveal();
  initScrollSpy();
  initCopyEmail();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
