# AutoHub: Directorio Web de Automatización IA & pSEO (Capital Cero)

Directorio web de arquitectura estática moderna (SSG) desarrollado en **Astro**, **Tailwind CSS** y **TypeScript**, diseñado específicamente para monetización híbrida de alto margen (afiliados B2B SaaS, venta de plantillas de n8n y pases de listado prioritario "Fast-Track") con despliegue gratuito en **GitHub Pages** o **Cloudflare Pages**.

---

## ⚡ Características Principales

1. **Rendimiento Máximo (Core Web Vitals 100/100):** Salida 100% estática HTML/CSS sin sobrecarga de JavaScript cliente innecesario.
2. **Arquitectura de SEO Programático (pSEO):**
   - Rutas dinámicas para integraciones de software (`/integraciones/[slug]`) con marcado Schema `HowTo`.
   - Comparativas de software propietario vs alternativas Open-Source (`/alternativas/[slug]`) con Schema `Article`.
   - Catálogo de herramientas curadas (`/directorio`).
3. **Economía de Plantillas & Checkouts Integrados:**
   - Páginas de producto individuales (`/plantillas/[slug]`) con marcado Schema `Product`.
   - Soporte nativo para ventanas modales de compra directa con **Payhip** (5% de comisión, 0 USD/mes fijo) y botones de enlace a **Gumroad Discover**.
4. **Pases de Publicación Pagada ("Fast-Track"):**
   - Página de envío (`/enviar`) con niveles: Gratuito (cola a 30 días), Fast-Track (25 USD, revisión en 48h con enlace dofollow permanente) y Patrocinio Destacado (99 USD/mes).
5. **Sitemap Dinámico Automatizado:**
   - Endpoint `/sitemap-index.xml` compilado automáticamente a partir de todas las colecciones para rastreo inmediato en Google Search Console.

---

## 📁 Estructura del Proyecto

```text
autohub-directory/
├── .github/workflows/deploy.yml   # Despliegue automatizado a GitHub Pages
├── astro.config.mjs               # Configuración de Astro, Tailwind y baseUrl
├── tailwind.config.mjs            # Paleta de colores e identidad visual
├── public/
│   └── robots.txt                 # Instrucciones para Googlebot y sitemap
├── src/
│   ├── components/
│   │   ├── Header.astro           # Navegación responsive
│   │   ├── Footer.astro           # Pie de página y aviso legal de afiliación
│   │   ├── TemplateCard.astro     # Tarjeta de plantilla con badge de ahorro
│   │   ├── IntegrationCard.astro  # Tarjeta de integración pSEO (App A + App B)
│   │   ├── AlternativeCard.astro  # Tarjeta de comparativa Open-Source
│   │   ├── NewsletterCta.astro    # Bloque de captura para lista de correo
│   │   └── JsonLd.astro           # Inyector de esquemas estructurados JSON-LD
│   ├── content/
│   │   ├── config.ts              # Esquemas de colecciones tipados con Zod
│   │   ├── herramientas/          # Fichas de herramientas del directorio
│   │   ├── integraciones/         # Artículos pSEO de integraciones
│   │   ├── alternativas/          # Comparativas de SaaS vs Open-Source
│   │   └── plantillas/            # Productos digitales de flujos n8n/Notion
│   ├── layouts/
│   │   └── Layout.astro           # Maquetación global, meta tags y script Payhip
│   └── pages/
│       ├── index.astro            # Portada principal con buscador y destacados
│       ├── directorio/index.astro # Directorio completo
│       ├── integraciones/         # Hub y páginas de integraciones
│       ├── alternativas/          # Hub y comparativas Open-Source
│       ├── plantillas/            # Catálogo y fichas de plantillas
│       ├── enviar/index.astro     # Monetización B2B (Fast-Track 25 USD)
│       └── sitemap-index.xml.ts   # Generador dinámico de mapa del sitio
```

---

## 🚀 Comandos Rápidos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Compilar sitio estático para producción (genera carpeta /dist)
npm run build

# Previsualizar el sitio compilado
npm run preview
```

---

## 🛠️ Cómo Añadir Contenido

### 1. Nueva Plantilla de Flujo de Trabajo
Crea un archivo Markdown en `src/content/plantillas/mi-flujo.md`:
```yaml
---
titulo: "Nombre del Flujo"
descripcionCorta: "Resumen del dolor operativo que resuelve"
precio: 29
precioOriginal: 49
motor: "n8n"
categoria: "Marketing"
nodos: 15
payhipUrl: "https://payhip.com/b/tu-enlace"
ahorroLaboralMensual: "300 USD/mes"
requisitos:
  - "Instancia de n8n"
  - "Clave API requerida"
caracteristicas:
  - "JSON con 1 clic"
fecha: 2026-10-25
---
Contenido detallado y guía paso a paso aquí.
```

### 2. Nueva Integración de SEO Programático (pSEO)
Crea un archivo en `src/content/integraciones/appA-a-appB-con-n8n.md`:
```yaml
---
titulo: "Cómo Conectar [App A] con [App B] usando n8n"
appA: "App A"
appB: "App B"
motor: "n8n"
casoDeUso: "Descripción de la automatización"
categoria: "CRM"
descripcionCorta: "Guía técnica para conectar ambas plataformas"
nodosEstimados: 12
tiempoConfiguracion: "15 minutos"
dificultad: "Principiante"
requisitos:
  - "Cuenta en App A"
  - "Cuenta en App B"
seoKeywords:
  - "conectar appA con appB"
fecha: 2026-10-25
---
Tutorial técnico aquí.
```

---

## 🌐 Despliegue en GitHub Pages

1. Crea un repositorio en GitHub (ej. `autohub-directory`).
2. Sube el código:
   ```bash
   git add .
   git commit -m "feat: inicializacion de AutoHub con arquitectura pSEO"
   git remote add origin https://github.com/TU-USUARIO/autohub-directory.git
   git push -u origin main
   ```
3. En la configuración del repositorio en GitHub:
   - Ve a **Settings > Pages**.
   - En **Build and deployment > Source**, selecciona **GitHub Actions**.
4. Cada vez que hagas `push`, el flujo `.github/workflows/deploy.yml` compilará y publicará tu sitio automáticamente.
