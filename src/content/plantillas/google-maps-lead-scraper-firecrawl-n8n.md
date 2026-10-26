---
titulo: "Extractor y Enriquecedor de Leads B2B con Google Maps y Firecrawl"
descripcionCorta: "Arquitectura de 26 nodos en n8n que extrae prospectos locales por categoría y código postal, raspa sus sitios web con Firecrawl y extrae emails verificados."
precio: 37
precioOriginal: 67
motor: "n8n"
categoria: "Prospección"
nodos: 26
payhipUrl: "https://payhip.com/b/demo2"
destacado: true
ahorroLaboralMensual: "600 USD/mes"
requisitos:
  - "Instancia de n8n activa"
  - "Clave de API de Google Maps Places"
  - "Clave de API de Firecrawl (Plan gratuito disponible)"
  - "Hoja de cálculo en Google Sheets"
caracteristicas:
  - "Paginación automática sobre consultas de radio geográfico"
  - "Filtrado de competidores y negocios sin página web"
  - "Extracción profunda de datos de contacto (Email, Teléfono, LinkedIn) vía Firecrawl"
  - "Validación de sintaxis de correo para evitar rebotes"
  - "Entrega en JSON con mapeo de campos listo para importar"
fecha: 2026-10-25
---

## Dolor Operativo

Las agencias de marketing digital y consultores B2B gastan cientos de dólares mensuales en bases de datos desactualizadas (Apollo, ZoomInfo) o contratan asistentes virtuales para copiar y pegar datos de negocios locales desde Google Maps.

Este flujo automatiza todo el proceso de prospección: busca negocios por nicho (ej. "Clínicas dentales en Madrid"), consulta la API de Places con paginación limpia, extrae las URLs web y utiliza **Firecrawl Extract** para obtener los correos de los directores o el contacto comercial en segundos.
