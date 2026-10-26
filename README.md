# Umbral · Portal de Pasantías y Primeras Oportunidades (Panamá)

> 🌐 **Sitio Web en Vivo (Producción en GitHub Pages):** [https://irvinggaona124-code.github.io/autohub-directory/](https://irvinggaona124-code.github.io/autohub-directory/)  
> 📦 **Repositorio Oficial:** [https://github.com/irvinggaona124-code/autohub-directory](https://github.com/irvinggaona124-code/autohub-directory)  
> 🗺️ **Sitemap XML Oficial:** [https://irvinggaona124-code.github.io/autohub-directory/sitemap-index.xml](https://irvinggaona124-code.github.io/autohub-directory/sitemap-index.xml)  
> 🎨 **Figma Reference:** [Portal de Pasantías · Panamá](https://www.figma.com/design/w6MBa4frrlxXugpyYvSPYS/Portal-de-Pasant%C3%ADas-%C2%B7-Panam%C3%A1)

---

## 🇵🇦 Sobre Umbral

**Umbral** es una plataforma formativa y ética diseñada para cerrar la brecha de entrada al mercado laboral en la República de Panamá. Conecta a estudiantes de universidades panameñas (UTP, UP, USMA, UIP, UDELAS, etc.) con empresas formadoras mediante tres compromisos fundamentales:

1. **Sin Experiencia Previa Obligatoria:** Las vacantes valoran el potencial, la curiosidad y los proyectos de aula por encima de historiales laborales.
2. **Mentoría Activa Asignada:** Toda vacante especifica un tutor o líder de equipo responsable del acompañamiento formativo.
3. **Condiciones Claras y Transparentes:** Remuneración en Balboas (`B/.`), horarios compatibles con clases y modalidades flexibles (híbrido, remoto o presencial).

---

## 🏛️ Vistas Implementadas (1:1 con Figma)

| Vista | Ruta | Descripción |
| :--- | :--- | :--- |
| **01 · Inicio** | `/` | Hero editorial con ilustración astronómica, 4 pilares de potencial, buscador en cinta flotante, vacantes destacadas y el Pacto Formador. |
| **02 · Vacantes** | `/vacantes/` | Catálogo completo de oportunidades con filtrado dinámico por ruta formativa, modalidad y área de conocimiento. |
| **03 · Detalle de Oportunidad** | `/vacantes/[slug]/` | Ficha técnica de vacante, perfil de mentor, objetivos de aprendizaje, asignación en Balboas (`B/.`) y modal de postulación interactiva. |
| **04 · Perfil Estudiante** | `/estudiantes/` | Asistente en 3 pasos para construir un perfil de potencial basado en ruta académica, fortalezas e intereses, sin necesidad de CV. |
| **05 · Empresa Formadora** | `/empresas/` | Explicación del Pacto Formador, formulario de publicación con política estricta de no pedir experiencia y modal de vista previa en tiempo real. |
| **06 · Directorio de Talento** | `/talento/` | Directorio anonimizado de 6 candidatos de ejemplo (UTP, UP, USMA, etc.) con señales académicas, nivel de inglés y solicitud ética de contacto. |
| **07 · Guía y Privacidad** | `/guia/` | Desglose pedagógico de las 3 rutas (Pasantía, Práctica, Primer empleo), soberanía de datos personales y acordeón de dudas frecuentes. |

---

## 🛠️ Stack Tecnológico y Artesanía Web

- **Astro 4 (SSG):** Generación estática pura a prueba de caídas, máxima velocidad de carga y 100/100 Core Web Vitals.
- **Tailwind CSS:** Sistema de tokens de diseño derivado de la paleta oficial de Figma:
  - `forest-900`: `#173B35` (Verde Bosque Profundo)
  - `terracotta-500`: `#DF7655` (Terracota Solar)
  - `sand-100`: `#F6F3EB` (Arena Cálida)
  - `sand-50`: `#FFFDF7` (Marfil de Tarjetas)
  - `sage-700`: `#58665E` (Salvia Muted)
- **Tipografía Editorial:** Google Fonts `DM Serif Display` (Titulares) y `DM Sans` (Interfaz y lectura).
- **Accesibilidad y Microinteracciones:** Conforme a WCAG AA, soporte nativo a `prefers-reduced-motion` y curvas suaves (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Tipografía Matemática y Monetaria:** Cumplimiento estricto de notación Unicode sin LaTeX y montos en moneda local panameña (`B/. 450 al mes`).

---

## 🚀 Comandos de Desarrollo y Despliegue

```bash
# Instalar dependencias
npm install

# Iniciar servidor local
npm run dev

# Compilar para producción
npm run build

# Desplegar actualización a GitHub Pages (rama gh-pages)
npm run deploy
```

---

© 2026 Umbral Panamá. Construido con dignidad formativa y soberanía de datos.
