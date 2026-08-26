/* =========================================================
   CLASES PARTICULARES — contenido y lógica
   -----------------------------------------------------------
   Para agregar tu propio material, edita los 3 arreglos de
   más abajo (DOCS, LESSONS, EXTRAS). No necesitas tocar nada
   más del archivo para eso.

   PARA LOS VIDEOS (LESSONS): en el campo "url" pega el link
   tal cual, ya sea de YouTube o de Dropbox. El reproductor
   detecta solo de qué tipo es:

     • YouTube  -> https://www.youtube.com/watch?v=XXXX
                   https://youtu.be/XXXX
                   (respeta el &t=123s si lo trae)

     • Dropbox  -> https://www.dropbox.com/scl/fi/.../clase.mp4?rlkey=...&dl=0
                   (usa archivos .mp4; NO borres el rlkey al copiar)

     • "#" o vacío -> se muestra el ícono de play (sin video aún)
   ========================================================= */

/* ---------- 1. MATERIAL ESCRITO (PDF / imágenes) ----------
   Sube tus archivos a una carpeta "material/" en el repositorio y
   pon la ruta en "url". Ejemplos:
     • PDF     -> url: "material/mi_guia.pdf",     tipo: "pdf"
     • Imagen  -> url: "material/mi_foto.png",     tipo: "imagen"
   Al apretar la tarjeta, el documento se muestra embebido en la página.
---------------------------------------------------------------- */
const DOCS = [
  {
    tipo: "pdf",
    titulo: "UNIDAD01_ALG",
    descripcion: "Presentación de Álgebra Básica.",
    meta: "Álgebra Básica (Material de Fernando)",
    url: "material/ALG/UNIDAD_1_ALGEBRA_BASICA_2026.pdf"
  },
  {
    tipo: "pdf",
    titulo: "TALLER_1",
    descripcion: "Proporcionalidad-potencias-raices-logaritmos",
    meta: "Álgebra Básica (Material de Fernando)",
    url: "material/ALG/TALLER_1_proporcionalidad_potencias_raices_y_logaritmos.pdf"
  },
  {
    tipo: "pdf",
    titulo: "TALLER_2",
    descripcion: "Productos Notables-Factorización.",
    meta: "Álgebra Básica (Material de Fernando)",
    url: "material/ALG/TALLER 2_Productos_notables_y_factorizacion.pdf"
  },
  {
    tipo: "pdf",
    titulo: "TALLER_3",
    descripcion: "Ecuaciones.",
    meta: "Álgebra Básica (Material de Fernando)",
    url: "material/ALG/TALLER_3_Ecuaciones.pdf"
  },
  {
    tipo: "pdf",
    titulo: "Registros de Clase 01",
    descripcion: "Registros de clase del 18 de agosto.",
    meta: "Álgebra Básica (Clases Particulares)",
    url: "material/ALG/CLASE_18_AGO.pdf"
  },
   {
    tipo: "pdf",
    titulo: "CONTROL_01_25_AGO",
    descripcion: "Control 01 de Taller 01-02.",
    meta: "Álgebra Básica - Material de Fernando (Clases Particulares)",
    url: "material/ALG/CONTROL_01_25_AGO.pdf"
  }, 
  {
    tipo: "pdf",
    titulo: "CONTROL_02_25_AGO",
    descripcion: "Control 02 de Taller 03.",
    meta: "Álgebra Básica - Material de Fernando (Clases Particulares)",
    url: "material/ALG/CONTROL_02_25_AGO.pdf"
  }, 
  {
    tipo: "pdf",
    titulo: "Apuntes de Cálculo",
    descripcion: "Apuntes del profesor de la asignatura.",
    meta: "Cálculo (Material de Fernando)",
    url: "material/CAL/Unidad_201_20Numeros_20Reales_20_y_20Funciones_20Reales.pdf"
  },
    {
    tipo: "pdf",
    titulo: "Guia 01",
    descripcion: "Conjuntos y Ecuaciones de primer grado.",
    meta: "Cálculo (Material de Fernando)",
    url: "material/CAL/guia01.pdf"
  },
    {
    tipo: "pdf",
    titulo: "Guia 02",
    descripcion: "Ecuaciones cuadráticas e inecuaciones.",
    meta: "Cálculo (Material de Fernando)",
    url: "material/CAL/guia02.pdf"
  },
  {
    tipo: "pdf",
    titulo: "Libro Calculo",
    descripcion: "Libro complementario de la asignatura.",
    meta: "Cálculo (Material de Fernando)",
    url: "material/CAL/LIBRO_PRECALCULO.pdf"
  },
];

/* ---------- 2. CLASES GRABADAS (estilo Udemy) ---------- */
const LESSONS = [
  {
    modulo: "Cálculo",
    titulo: "Clase 01 de Cálculo / Parte I",
    duracion: "00:35:31",
    descripcion: "(20-AGO) Parte I de Clase 01 de Cálculo: Axiomas de cuerpo.",
    url: "https://www.dropbox.com/scl/fi/icj7wuh8m3qsmabyrue2i/video1662629645.mp4?rlkey=tr8om3stj904szbmyo8pi4qlk&st=axi501l0&dl=0"
  },
  {
    modulo: "Cálculo",
    titulo: "Clase 01 de Cálculo / Parte II",
    duracion: "01:18:30",
    descripcion: "(20-AGO) Parte II de Clase 01 de Cálculo: Completación de cuadrados e inecuación polinómica.",
    url: "https://www.dropbox.com/scl/fi/o20q7tnzifrczgqmbv85s/video1642135982.mp4?rlkey=r3xxpqrvr3ch4t078io14d7zf&st=njdfu329&dl=0"
  },
  {
    modulo: "Álgebra",
    titulo: "Clase 02 de Álgebra",
    duracion: "01:33:35",
    descripcion: "(25-AGO) Controles 01 y 02",
    url: "https://www.dropbox.com/scl/fi/dj4k9a3ad2jvd92q7watt/video1923423025.mp4?rlkey=3xoxb8igylv8lzwcx9aiefqxo&st=umy760uz&dl=0"
  },
];

/* ---------- 3. MATERIAL COMPLEMENTARIO ----------
   Por defecto cada tarjeta es un link que abre en pestaña nueva.

   Si quieres que la tarjeta abra un VIDEO GRANDE dentro de la misma
   página (igual que en "Clases Grabadas"), agrega:
     tipo: "video"
   y pega el link de YouTube o Dropbox en "url" (mismas reglas que
   en LESSONS, arriba). Si no pones "tipo" (o pones cualquier otra
   cosa), la tarjeta se comporta como antes: abre "url" en pestaña
   nueva.
---------------------------------------------------------------- */
const EXTRAS = [
  {
    etiqueta: "Práctica",
    titulo: "Ejercicios interactivos",
    descripcion: "Ejercitación interactiva (Pronto).",
    url: "#"
  },
  {
    etiqueta: "Video",
    titulo: "Canal recomendado",
    descripcion: "Mi canal de Youtube.",
    url: "https://youtube.com/@tanicalabrano2023?si=dnS-qYc-GAkvkdAI"
  },
  {
    // EJEMPLO: este sí abre el visor grande al hacer clic, porque tiene
    // tipo:"video". Bórralo o reemplázalo por tu propio video cuando
    // quieras (mismas reglas que en LESSONS: YouTube o Dropbox).
    etiqueta: "Video",
    titulo: "Análisis de las expresiones algebraicas",
    descripcion: "Video útil para comprenderlas y aprender a reducirlas.",
    tipo: "video",
    url: "https://youtu.be/Yngt2bsNbo8"
  },
    {
    // EJEMPLO: este sí abre el visor grande al hacer clic, porque tiene
    // tipo:"video". Bórralo o reemplázalo por tu propio video cuando
    // quieras (mismas reglas que en LESSONS: YouTube o Dropbox).
    etiqueta: "Video",
    titulo: "Multiplicación de expresiones algebraicas",
    descripcion: "Video útil para aprender a multiplicar expresiones algebraicas",
    tipo: "video",
    url: "https://youtu.be/LHq4D8U9A3E"
  },
  {
    // EJEMPLO: este sí abre el visor grande al hacer clic, porque tiene
    // tipo:"video". Bórralo o reemplázalo por tu propio video cuando
    // quieras (mismas reglas que en LESSONS: YouTube o Dropbox).
    etiqueta: "Video",
    titulo: "Productos notables",
    descripcion: "Video útil para aprender sobre los productos notables",
    tipo: "video",
    url: "https://youtu.be/wd7KYdoilCU"
  },
  {
    // EJEMPLO: este sí abre el visor grande al hacer clic, porque tiene
    // tipo:"video". Bórralo o reemplázalo por tu propio video cuando
    // quieras (mismas reglas que en LESSONS: YouTube o Dropbox).
    etiqueta: "Video",
    titulo: "Resolver ecuaciones cuadráticas",
    descripcion: "Video útil para aprender a resolver ecuaciones cuadráticas",
    tipo: "video",
    url: "https://youtu.be/47Xk8DJ5HXY"
  }
];

/* =========================================================
   Lógica del carrusel 3D
   ========================================================= */

const cards = Array.from(document.querySelectorAll(".panel-card"));
const dotsWrap = document.getElementById("dots");
const contentTitle = document.getElementById("contentTitle");
const contentSubtitle = document.getElementById("contentSubtitle");

const PANELS_META = [
  { title: "Material Escrito", subtitle: "Guías, apuntes e imágenes de apoyo para repasar en tu tiempo." },
  { title: "Clases Grabadas", subtitle: "Todas las sesiones grabadas, ordenadas por módulo." },
  { title: "Material Complementario", subtitle: "Enlaces y recursos extra para ir más allá de la clase." }
];

let active = 0;
const total = cards.length;

function buildDots(){
  dotsWrap.innerHTML = "";
  cards.forEach((_, i) => {
    const b = document.createElement("button");
    b.className = "dot" + (i === active ? " is-active" : "");
    b.setAttribute("role", "tab");
    b.setAttribute("aria-label", "Ir al panel " + (i + 1));
    b.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(b);
  });
}

function updateCarousel(){
  cards.forEach((card, i) => {
    card.classList.remove("is-active", "is-prev", "is-next", "is-hidden");
    const diff = (i - active + total) % total;
    if (diff === 0) card.classList.add("is-active");
    else if (diff === 1) card.classList.add("is-next");
    else if (diff === total - 1) card.classList.add("is-prev");
    else card.classList.add("is-hidden");
  });

  Array.from(dotsWrap.children).forEach((d, i) => {
    d.classList.toggle("is-active", i === active);
  });

  document.querySelectorAll(".content-panel").forEach((p, i) => {
    p.classList.toggle("is-active", i === active);
  });

  contentTitle.textContent = PANELS_META[active].title;
  contentSubtitle.textContent = PANELS_META[active].subtitle;
}

function goTo(index){
  active = (index + total) % total;
  updateCarousel();
}

document.getElementById("prevBtn").addEventListener("click", () => goTo(active - 1));
document.getElementById("nextBtn").addEventListener("click", () => goTo(active + 1));

cards.forEach((card, i) => {
  card.addEventListener("click", () => goTo(i));
});

// navegación con flechas del teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goTo(active - 1);
  if (e.key === "ArrowRight") goTo(active + 1);
});

buildDots();
updateCarousel();

/* =========================================================
   Render: Material Escrito
   ========================================================= */

const docIconPdf = `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 2h9l5 5v15H6z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M15 2v5h5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`;
const docIconImg = `<svg viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="8.5" cy="9.5" r="1.5" fill="currentColor"/><path d="M21 16l-5.5-5.5L9 17" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`;

function renderDocs(){
  const grid = document.getElementById("docsGrid");
  grid.innerHTML = DOCS.map((doc, i) => `
    <button class="doc-card" data-index="${i}">
      <div class="doc-icon ${doc.tipo === "imagen" ? "is-image" : ""}">
        ${doc.tipo === "imagen" ? docIconImg : docIconPdf}
      </div>
      <h4>${doc.titulo}</h4>
      <p>${doc.descripcion}</p>
      <span class="doc-meta">${doc.meta}</span>
      <span class="doc-link">Ver aquí →</span>
    </button>
  `).join("");

  grid.querySelectorAll(".doc-card").forEach(btn => {
    btn.addEventListener("click", () => openDoc(Number(btn.dataset.index)));
  });

  setupDocsViewer();
}

// Inserta el visor (oculto) al inicio del panel de Material Escrito. Una vez.
function setupDocsViewer(){
  const panel = document.getElementById("panel-0");
  if (!panel || document.getElementById("docsViewer")) return;

  const viewer = document.createElement("div");
  viewer.className = "docs-viewer";
  viewer.id = "docsViewer";
  viewer.hidden = true;
  viewer.innerHTML = `
    <div class="docs-viewer-bar">
      <div class="docs-viewer-titles">
        <p class="docs-viewer-kind" id="docsViewerKind">PDF</p>
        <h4 id="docsViewerTitle">Documento</h4>
      </div>
      <div class="docs-viewer-actions">
        <a class="docs-viewer-btn" id="docsViewerOpen" href="#" target="_blank" rel="noopener">Abrir ↗</a>
        <button class="docs-viewer-close" id="docsViewerClose" aria-label="Cerrar visor">✕</button>
      </div>
    </div>
    <div class="docs-viewer-body" id="docsViewerBody"></div>`;

  panel.insertBefore(viewer, panel.firstChild);
  document.getElementById("docsViewerClose").addEventListener("click", closeDoc);
}

// Muestra el documento seleccionado embebido en el visor.
function openDoc(index){
  const doc = DOCS[index];
  if (!doc || !doc.url || doc.url === "#") return;

  const viewer = document.getElementById("docsViewer");
  const body = document.getElementById("docsViewerBody");

  document.getElementById("docsViewerKind").textContent = doc.tipo === "imagen" ? "Imagen" : "PDF";
  document.getElementById("docsViewerTitle").textContent = doc.titulo;
  document.getElementById("docsViewerOpen").href = doc.url;

  if (doc.tipo === "imagen") {
    body.innerHTML = `<img src="${doc.url}" alt="${doc.titulo}">`;
    viewer.classList.add("is-image");
  } else {
    // #view=FitH ajusta el PDF al ancho del visor.
    body.innerHTML = `<iframe src="${doc.url}#view=FitH" title="${doc.titulo}"></iframe>`;
    viewer.classList.remove("is-image");
  }

  viewer.hidden = false; // visible ANTES de renderizar (pdf.js necesita medir el ancho)

  document.querySelectorAll(".doc-card").forEach((el, i) => {
    el.classList.toggle("is-current", i === index);
  });

  viewer.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Cierra el visor y detiene la carga del documento.
function closeDoc(){
  const viewer = document.getElementById("docsViewer");
  document.getElementById("docsViewerBody").innerHTML = "";
  viewer.hidden = true;
  document.querySelectorAll(".doc-card").forEach(el => el.classList.remove("is-current"));
}

/* =========================================================
   Render: Clases Grabadas (estilo Udemy)
   ========================================================= */

/* --- Helpers para embeber videos --- */

// ¿La url apunta a un video reproducible (no es "#" ni está vacía)?
function tieneVideo(url){
  return url && url.trim() !== "" && url.trim() !== "#";
}

// Convierte cualquier link de YouTube (watch / youtu.be / embed) a URL
// embebible, conservando el timestamp &t=123s si viene en el enlace.
function youtubeEmbed(url){
  const id =
    (url.match(/[?&]v=([^&]+)/) || [])[1] ||
    (url.match(/youtu\.be\/([^?&]+)/) || [])[1] ||
    (url.match(/\/embed\/([^?&]+)/) || [])[1] || "";
  const t = (url.match(/[?&]t=(\d+)/) || [])[1];
  return "https://www.youtube.com/embed/" + id + (t ? "?start=" + t : "");
}

// Convierte un link de Dropbox en uno reproducible por <video>.
// Clave: Dropbox ya NO sirve video desde www.dropbox.com (devuelve una
// página de vista previa), así que cambiamos el dominio a
// dl.dropboxusercontent.com y conservamos rlkey + st (obligatorios).
function dropboxToRaw(url){
  let u = url.replace("www.dropbox.com", "dl.dropboxusercontent.com");
  u = u.replace(/([?&])dl=\d/, "$1raw=1");
  if (!/[?&]raw=1/.test(u)) u += (u.includes("?") ? "&" : "?") + "raw=1";
  return u;
}

/* --- YouTube IFrame API (para detectar cuándo termina un video de YouTube) --- */
let ytApiLoading = false;
let ytPlayerInstance = null;

function loadYouTubeApiIfNeeded(){
  if (window.YT && window.YT.Player) return;
  if (ytApiLoading) return;
  ytApiLoading = true;
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
}

// El script de YouTube llama a esta función global apenas termina de cargar.
window.onYouTubeIframeAPIReady = function(){
  ytApiLoading = false;
  // Si ya había un iframe de YouTube esperando, lo conectamos ahora.
  const existing = document.getElementById("ytLessonFrame");
  if (existing) attachYouTubePlayer();
};

function attachYouTubePlayer(){
  if (!window.YT || !window.YT.Player) return;
  ytPlayerInstance = new YT.Player("ytLessonFrame", {
    events: {
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) autoAdvance();
      }
    }
  });
}

// Reemplaza el reproductor por un botón que abre el link original.
// Se usa cuando el video no logra cargar (p. ej. Dropbox lo bloqueó por
// límite de ancho de banda, o el enlace ya no es válido).
function showVideoFallback(frame, url){
  frame.innerHTML = `
    <div class="player-fallback">
      <svg viewBox="0 0 24 24" width="34" height="34"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p>El video no se pudo cargar aquí.</p>
      <a class="player-fallback-btn" href="${url}" target="_blank" rel="noopener">▶ Abrir video en Dropbox</a>
    </div>`;
}

// Devuelve el HTML del reproductor según el tipo de link.
function buildPlayer(lesson){
  const url = lesson.url || "";

  if (!tieneVideo(url)) {
    return `<div class="player-placeholder">
      <svg viewBox="0 0 24 24" width="46" height="46"><path d="M8 5v14l11-7L8 5z" fill="currentColor"/></svg>
    </div>`;
  }

  if (/youtube\.com|youtu\.be/.test(url)) {
    const sep = youtubeEmbed(url).includes("?") ? "&" : "?";
    return `<iframe id="ytLessonFrame" src="${youtubeEmbed(url)}${sep}enablejsapi=1" title="${lesson.titulo}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>`;
  }

  if (/dropbox\.com/.test(url)) {
    return `<video controls preload="metadata" src="${dropboxToRaw(url)}">
      <a href="${url}" target="_blank" rel="noopener" style="color:#fff">Abrir video en otra pestaña</a>
    </video>`;
  }

  // Cualquier otro link directo a un .mp4 también funciona como <video>.
  return `<video controls preload="metadata" src="${url}"></video>`;
}

// Monta las flechas ‹ › alrededor de la lista de clases y las conecta
// para desplazar horizontalmente (estilo carrusel). Se ejecuta una sola vez.
function setupLessonsCarousel(){
  const list = document.getElementById("lessonsList");
  if (!list || list.parentElement.classList.contains("lessons-nav")) return;

  const nav = document.createElement("div");
  nav.className = "lessons-nav";

  const prev = document.createElement("button");
  prev.className = "lesson-arrow lesson-arrow-left";
  prev.setAttribute("aria-label", "Clases anteriores");
  prev.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 4L7 12L15 20" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const next = document.createElement("button");
  next.className = "lesson-arrow lesson-arrow-right";
  next.setAttribute("aria-label", "Más clases");
  next.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // Envolvemos la lista existente entre las dos flechas.
  list.parentElement.insertBefore(nav, list);
  nav.appendChild(prev);
  nav.appendChild(list);
  nav.appendChild(next);

  const step = () => Math.max(list.clientWidth * 0.8, 250);
  prev.addEventListener("click", () => list.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => list.scrollBy({ left:  step(), behavior: "smooth" }));

  // Atenúa/oculta las flechas según haga falta desplazar o no.
  const updateArrows = () => {
    const overflow = list.scrollWidth > list.clientWidth + 2;
    nav.classList.toggle("no-scroll", !overflow);
    const maxScroll = list.scrollWidth - list.clientWidth - 1;
    prev.classList.toggle("is-disabled", list.scrollLeft <= 0);
    next.classList.toggle("is-disabled", list.scrollLeft >= maxScroll);
  };
  list.addEventListener("scroll", updateArrows);
  window.addEventListener("resize", updateArrows);
  updateArrows();
}

function renderLessons(){
  const list = document.getElementById("lessonsList");
  list.innerHTML = LESSONS.map((l, i) => `
    <button class="lesson-item" data-index="${i}">
      <div class="lesson-thumb">
        <svg viewBox="0 0 24 24" width="16" height="16"><path d="M8 5v14l11-7L8 5z" fill="currentColor"/></svg>
      </div>
      <div class="lesson-info">
        <h5>${l.titulo}</h5>
        <span>${l.modulo} · ${l.duracion}</span>
      </div>
      <div class="lesson-check"></div>
    </button>
  `).join("");

  list.querySelectorAll(".lesson-item").forEach(btn => {
    btn.addEventListener("click", () => selectLesson(Number(btn.dataset.index)));
  });

  setupLessonsCarousel();

  if (LESSONS.length) selectLesson(0);
}

let currentLessonIndex = 0;

function selectLesson(index, autoplay){
  currentLessonIndex = index;
  const lesson = LESSONS[index];
  const frame = document.getElementById("playerFrame");

  ytPlayerInstance = null; // el iframe anterior ya no existe, soltamos la referencia

  // Inyecta el video (YouTube / Dropbox / mp4) o el placeholder en el marco.
  frame.innerHTML = buildPlayer(lesson);

  // Si es un <video> y falla la carga, mostramos el botón hacia el link original.
  const video = frame.querySelector("video");
  if (video && tieneVideo(lesson.url)) {
    video.addEventListener("error", () => showVideoFallback(frame, lesson.url), { once: true });
    // Al terminar el video, pasamos automáticamente a la siguiente clase.
    video.addEventListener("ended", autoAdvance);
    if (autoplay) video.play().catch(() => {}); // el navegador puede bloquear el autoplay; lo ignoramos en silencio
  }

  // Si es un iframe de YouTube, conectamos la API para saber cuándo termina.
  if (frame.querySelector("#ytLessonFrame")) {
    loadYouTubeApiIfNeeded();
    if (window.YT && window.YT.Player) attachYouTubePlayer();
    // si la API aún no cargó, onYouTubeIframeAPIReady la conectará apenas esté lista
  }

  document.getElementById("playerModule").textContent = lesson.modulo;
  document.getElementById("playerTitle").textContent = lesson.titulo;
  document.getElementById("playerDesc").textContent = lesson.descripcion;

  document.querySelectorAll(".lesson-item").forEach((el, i) => {
    el.classList.toggle("is-current", i === index);
  });

  updateLessonNavButtons();
}

// Pasa a la siguiente clase (se llama al terminar el video actual).
function autoAdvance(){
  if (currentLessonIndex < LESSONS.length - 1) {
    selectLesson(currentLessonIndex + 1, true);
    document.getElementById("lessonsList")
      .children[currentLessonIndex]
      ?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
}

function updateLessonNavButtons(){
  const prevBtn = document.getElementById("prevLessonBtn");
  const nextBtn = document.getElementById("nextLessonBtn");
  if (!prevBtn || !nextBtn) return;
  prevBtn.disabled = currentLessonIndex <= 0;
  nextBtn.disabled = currentLessonIndex >= LESSONS.length - 1;
}

document.getElementById("prevLessonBtn")?.addEventListener("click", () => {
  if (currentLessonIndex > 0) selectLesson(currentLessonIndex - 1, true);
});
document.getElementById("nextLessonBtn")?.addEventListener("click", () => {
  if (currentLessonIndex < LESSONS.length - 1) selectLesson(currentLessonIndex + 1, true);
});

/* =========================================================
   Render: Material Complementario
   ========================================================= */

// Tarjetas con tipo:"video" abren un reproductor grande embebido
// (igual que en Clases Grabadas). El resto sigue abriendo "url" en
// pestaña nueva, tal como funcionaba antes.
function renderExtras(){
  const grid = document.getElementById("extraGrid");
  grid.innerHTML = EXTRAS.map((ex, i) => {
    const esVideo = ex.tipo === "video" && tieneVideo(ex.url);
    const accion = esVideo
      ? `<button class="extra-link extra-link-video" data-index="${i}">▶ Ver video →</button>`
      : `<a class="extra-link" href="${ex.url}" target="_blank" rel="noopener">Abrir recurso →</a>`;

    return `
    <div class="extra-card${esVideo ? " is-playable" : ""}" ${esVideo ? `data-index="${i}"` : ""}>
      <span class="extra-tag">${ex.etiqueta}</span>
      <h4>${ex.titulo}</h4>
      <p>${ex.descripcion}</p>
      ${accion}
    </div>`;
  }).join("");

  // La tarjeta completa también es clickeable cuando es un video.
  grid.querySelectorAll(".extra-card.is-playable").forEach(card => {
    card.addEventListener("click", (e) => {
      // Evita doble disparo si el clic vino del botón interno.
      if (e.target.closest(".extra-link-video")) return;
      openExtraVideo(Number(card.dataset.index));
    });
  });
  grid.querySelectorAll(".extra-link-video").forEach(btn => {
    btn.addEventListener("click", () => openExtraVideo(Number(btn.dataset.index)));
  });

  setupExtrasViewer();
}

// Inserta el visor grande (oculto) al inicio del panel de Material
// Complementario. Se ejecuta una sola vez. Usa la MISMA estructura que
// el reproductor de Clases Grabadas (.lessons-player > .player-frame),
// así el video se ve igual de bien: proporción 16:9, fondo oscuro, etc.
function setupExtrasViewer(){
  const panel = document.getElementById("panel-2");
  if (!panel || document.getElementById("extrasViewer")) return;

  const viewer = document.createElement("div");
  viewer.className = "extras-viewer-wrap";
  viewer.id = "extrasViewer";
  viewer.hidden = true;
  viewer.innerHTML = `
    <div class="lessons-player">
      <div class="player-frame" id="extrasViewerBody"></div>
      <div class="player-meta">
        <div class="player-meta-top">
          <p class="player-module" id="extrasViewerKind">Video</p>
          <div class="player-nav">
            <a class="player-nav-btn" id="extrasViewerOpen" href="#" target="_blank" rel="noopener">Abrir ↗</a>
            <button class="player-nav-btn" id="extrasViewerClose" aria-label="Cerrar visor">✕ Cerrar</button>
          </div>
        </div>
        <h4 id="extrasViewerTitle">Recurso</h4>
        <p class="player-desc" id="extrasViewerDesc"></p>
      </div>
    </div>`;

  panel.insertBefore(viewer, panel.firstChild);
  document.getElementById("extrasViewerClose").addEventListener("click", closeExtraVideo);
}

// Muestra el video del recurso seleccionado en el visor grande,
// reutilizando el mismo motor de reproducción de Clases Grabadas.
function openExtraVideo(index){
  const extra = EXTRAS[index];
  if (!extra || !tieneVideo(extra.url)) return;

  const viewer = document.getElementById("extrasViewer");
  const body = document.getElementById("extrasViewerBody");

  document.getElementById("extrasViewerKind").textContent = extra.etiqueta || "Video";
  document.getElementById("extrasViewerTitle").textContent = extra.titulo;
  document.getElementById("extrasViewerDesc").textContent = extra.descripcion || "";
  document.getElementById("extrasViewerOpen").href = extra.url;

  // buildPlayer() ya sabe distinguir YouTube / Dropbox / mp4 directo.
  body.innerHTML = buildPlayer({ titulo: extra.titulo, url: extra.url });

  const video = body.querySelector("video");
  if (video) {
    video.addEventListener("error", () => showVideoFallback(body, extra.url), { once: true });
  }
  if (body.querySelector("#ytLessonFrame")) {
    loadYouTubeApiIfNeeded();
  }

  viewer.hidden = false;

  document.querySelectorAll(".extra-card").forEach((el, i) => {
    el.classList.toggle("is-current", i === index);
  });

  viewer.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Cierra el visor de video y detiene la reproducción.
function closeExtraVideo(){
  const viewer = document.getElementById("extrasViewer");
  document.getElementById("extrasViewerBody").innerHTML = "";
  viewer.hidden = true;
  document.querySelectorAll(".extra-card").forEach(el => el.classList.remove("is-current"));
}

renderDocs();
renderLessons();
renderExtras();