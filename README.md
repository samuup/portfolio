# Portafolio — Samuel Prado

Sitio web estático, oscuro y bilingüe (ES/EN), pensado para publicarse gratis en **GitHub Pages**.
Sin frameworks, sin `npm`, sin paso de build: HTML, CSS y JavaScript puro.

## Ver el sitio en local

Abre `index.html` directamente en el navegador. Si quieres servirlo como en producción:

```bash
python -m http.server 8000
```

Y visita <http://localhost:8000>.

## Personalizarlo

Casi todo se edita en **dos lugares**:

### 1. Tus datos → `js/main.js` (bloque `CONFIG`, al inicio)

```js
const CONFIG = {
  name: "Samuel Prado",
  initials: "SP",            // vacío = se calcula solo desde el nombre
  email: "samuelpradouribe@gmail.com",
  github: "https://github.com/samuup",
  linkedin: "https://www.linkedin.com/in/samuel-prado-994940326",
  location: "Ciudad Guayana, Venezuela",
  photo: "",                 // ej: "assets/foto.jpg". Vacío = iniciales

  projectRepo: "https://github.com/samuup/WarehOS",     // repo de WarehOS
  siteRepo: "https://github.com/samuup/samuup.github.io", // repo de este sitio
};
```

- **Foto:** guarda tu imagen en `assets/` y pon la ruta en `photo`, por ejemplo `"assets/foto.jpg"`.
- **LinkedIn:** si lo dejas vacío, el enlace desaparece automáticamente.
- **Nombre:** se actualiza en el logo, el hero, el footer y el título de la página.
- **Proyectos:** los enlaces de cada tarjeta están en el `index.html` con `data-config-href`
  (`projectRepo`, `siteRepo`, `github`).

### 2. Textos → `js/main.js` (objeto `TRANSLATIONS`)

Ahí están todos los textos en español (`es`) e inglés (`en`). Busca la sección que quieras cambiar
y edita el valor. Las claves (`"about.p1"`, `"projects.p1.desc"`, etc.) coinciden con los
atributos `data-i18n` del `index.html`.

Contenido que conviene revisar:

- `projects.p1.*` → Bella Napoli (proyecto destacado). Si publicas el repo, cambia
  `projects.p1.note` por un enlace y añade el stack real en los chips del `index.html`.
- `experience.e4.*` → tu formación en la UNEG (semestre y descripción).
- `projects.p3.note` → hoy dice que el código es privado; cámbialo si publicas el repo.
- `meta.role` / `meta.description` → cómo te describes para Google y redes.

### 3. Colores y tipografía → `css/styles.css`

Todo está en `:root`, al inicio del archivo:

```css
--accent: #3ddc84;    /* verde principal */
--accent-2: #38bdf8;  /* cian del degradado */
--bg: #070b0a;        /* fondo */
```

Cambia esos valores y el sitio entero se adapta.

## Publicarlo en GitHub Pages

### Opción A — repositorio `usuario.github.io` (URL más corta, recomendada)

1. Crea un repositorio llamado exactamente `samuup.github.io`.
2. Sube el contenido de esta carpeta a la rama `main` (el `index.html` debe quedar en la raíz).
3. Espera 1–2 minutos. Tu sitio estará en `https://samuup.github.io`.

```bash
cd portafolio
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/samuup/samuup.github.io.git
git push -u origin main
```

### Opción B — cualquier nombre de repositorio (por ejemplo, `portafolio`)

1. Crea el repositorio `portafolio` en GitHub y sube los archivos igual que arriba.
2. En GitHub ve a **Settings → Pages**.
3. En *Build and deployment* elige **Deploy from a branch**.
4. Selecciona rama `main` y carpeta `/ (root)`. Guarda.
5. Tu sitio estará en `https://samuup.github.io/portafolio/`.

```bash
cd portafolio
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/samuup/portafolio.git
git push -u origin main
```

> El archivo `.nojekyll` ya está incluido para que GitHub Pages no procese el sitio con Jekyll.

### Dominio propio (opcional)

En **Settings → Pages → Custom domain** escribe tu dominio y crea en tu proveedor de DNS un
registro `CNAME` apuntando a `samuup.github.io`. GitHub añadirá un archivo `CNAME` al repo.

## Estructura

```
portafolio/
├── index.html          # estructura y contenido
├── css/styles.css      # estilos, responsive y animaciones
├── js/main.js          # CONFIG + traducciones ES/EN + interacciones
├── assets/favicon.svg  # icono del sitio
├── .nojekyll           # evita el procesado de Jekyll en GitHub Pages
└── README.md
```

## Detalles incluidos

- Cambio de idioma ES/EN con persistencia en `localStorage`.
- Diseño responsive (móvil, tablet, escritorio) y menú hamburguesa.
- Animaciones al hacer scroll, respetando `prefers-reduced-motion`.
- Accesibilidad: enlace para saltar al contenido, foco visible, `aria-*` y HTML semántico.
- Botón para copiar el correo al portapapeles con aviso visual.
- SEO básico y Open Graph.
- Mockups vectoriales de los proyectos (sin imágenes externas).
