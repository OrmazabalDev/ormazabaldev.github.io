# DevOrmazabal | Desarrollo de Software y Automatizaciones

Este es el sitio web profesional y landing page de la marca personal **DevOrmazabal** (Diego Ormazabal), enfocado en el desarrollo de software a medida, automatización de procesos operativos, integraciones de APIs y soluciones tecnológicas para negocios y profesionales independientes.

El sitio ha sido diseñado con una estética limpia, seria y corporativa, utilizando tecnologías web estándar de alto rendimiento, optimizado para ser completamente responsive y auto-contenido.

---

## 🚀 Características del Sitio

- ⚡ **Carga ultrarrápida:** Construido en HTML5, CSS3 y JavaScript Vanilla sin frameworks innecesarios que añadan sobrecarga.
- 📱 **Totalmente responsive:** Diseño móvil adaptado a todo tipo de pantallas (móviles, tablets y pantallas de escritorio).
- 🎨 **Estilo premium y serio:** Paleta de colores cuidada con azul marino de marca (`#001B68`) y azul vibrante (`#0B73FF`).
- 🤖 **Interacciones fluidas:** Menú hamburguesa accesible, scroll spy para navegación dinámica, Intersection Observer para revelado progresivo de componentes y animaciones optimizadas en CSS.
- ✉️ **Contacto optimizado:** Plantilla pre-cargada para solicitudes técnicas mediante un enlace `mailto:` directo al correo principal.
- 🔍 **SEO e Indexación:** Etiquetas de optimización básicas y Open Graph integradas para vistas previas pulidas en redes sociales como LinkedIn o WhatsApp.

---

## 🛠️ Stack Tecnológico

- **Frontend:** HTML5, CSS3 (estilos propios) y JavaScript Vanilla.
- **Framework de Estilo:** Tailwind CSS (utilizado mediante CDN para simplificar el flujo y asegurar su portabilidad sin compilar Node.js).
- **Tipografía:** [Inter](https://fonts.google.com/specimen/Inter) y [Fira Code](https://fonts.google.com/specimen/Fira+Code).
- **Alojamiento:** GitHub Pages.

---

## 📁 Estructura del Repositorio

La arquitectura del proyecto sigue una estructura estática limpia recomendada para GitHub Pages:

```text
/
├── index.html              # Landing page principal
├── css/
│   └── styles.css          # Reglas CSS, animaciones y fondos personalizados
├── js/
│   └── main.js             # Lógica del menú móvil, scroll spy y revelado
├── assets/
│   ├── logo/
│   │   └── devormazabal-logo.png  # Logo oficial de la marca
│   ├── img/
│   │   └── og-devormazabal.png    # Imagen de previsualización para redes (Open Graph)
│   └── favicon/
│       └── favicon.png            # Icono del navegador
├── .github/
│   └── workflows/
│       └── deploy.yml       # Automatización de despliegue a GitHub Pages
├── .gitignore              # Archivos excluidos del control de versiones
└── README.md               # Este archivo de documentación
```

---

## 🌐 Publicación en GitHub Pages

Este proyecto incluye un archivo de GitHub Actions que despliega automáticamente el sitio en GitHub Pages con cada push realizado a la rama principal (`main`).

### Opción A: Despliegue Automático (Recomendado)
1. Sube tu código al repositorio en GitHub.
2. Ve a la pestaña **Settings** (Configuración) de tu repositorio en GitHub.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En la sección **Build and deployment**:
   - En **Source**, selecciona **GitHub Actions**.
5. Con esto, cada vez que hagas `git push origin main`, GitHub compilará y desplegará tu sitio automáticamente en pocos segundos.

### Opción B: Despliegue Manual (Desde Rama)
Si prefieres no usar GitHub Actions:
1. Ve a la pestaña **Settings** (Configuración) -> **Pages**.
2. En la sección **Build and deployment**:
   - En **Source**, selecciona **Deploy from a branch**.
   - En **Branch**, selecciona la rama `main` y la carpeta `/ (root)`.
3. Haz clic en **Save**. Tu sitio estará en línea en un par de minutos.

---

## 👤 Autor

**Diego Ormazabal**
- **GitHub:** [@OrmazabalDev](https://github.com/OrmazabalDev)
- **Correo Electrónico:** ormazabal.dev@gmail.com
- **Servicios:** Desarrollo de Software · Automatización de Procesos · Soluciones a Medida.
