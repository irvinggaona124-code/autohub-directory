---
titulo: "Cómo Conectar Google Maps Places con HubSpot CRM usando n8n"
appA: "Google Maps"
appB: "HubSpot CRM"
motor: "n8n"
casoDeUso: "Sincronización automatizada de prospectos locales enriquecidos hacia listas y acuerdos en el pipeline comercial de HubSpot."
categoria: "Prospección B2B"
descripcionCorta: "Guía técnica paso a paso para extraer datos comerciales de la API de Google Maps y crear contactos y empresas en HubSpot sin pagar licencias de Zapier."
nodosEstimados: 16
tiempoConfiguracion: "20 minutos"
dificultad: "Intermedio"
plantillaSlug: "google-maps-lead-scraper-firecrawl-n8n"
requisitos:
  - "Instancia de n8n (Cloud o Self-Hosted)"
  - "Google Cloud Console API Key (Places API habilitada)"
  - "Token de acceso privado de HubSpot (Private App Token)"
seoKeywords:
  - "conectar google maps con hubspot"
  - "n8n google maps to hubspot integration"
  - "automatizar prospeccion hubspot n8n"
  - "alternativa zapier google maps crm"
fecha: 2026-10-25
---

## Introducción y Beneficios Operativos

La prospección de clientes locales (restaurantes, clínicas, constructoras, despachos legales) es uno de los motores comerciales más efectivos para agencias y empresas de servicios. Sin embargo, exportar datos de Google Maps e importarlos manualmente a **HubSpot** consume horas de trabajo repetitivo.

Implementar este flujo en **n8n** permite:
- **Reducción de costos:** Zapier cobra tarifas elevadas por operaciones multi-nodo repetitivas; n8n procesa miles de llamadas API con costo fijo de servidor casi nulo.
- **Prevención de contactos duplicados:** El flujo verifica primero si el dominio web o el teléfono ya existen en HubSpot antes de crear un nuevo registro.
- **Asignación inmediata de pipelines:** Los leads pueden crearse directamente dentro de un deal en la etapa de "Prospección Identificada".

## Estructura del Flujo de Integración

1. **Schedule Trigger**: Ejecuta la búsqueda periódica (semanal o diaria).
2. **HTTP Request (Google Places Search)**: Envía la consulta geográfica con parámetros de radio y tipo de negocio.
3. **Item Lists Split**: Separa los resultados en elementos individuales para procesar uno a uno.
4. **HubSpot Search Contact/Company**: Consulta si el contacto ya existe por correo o nombre comercial.
5. **IF Condition (Lead nuevo vs existente)**: Si no existe, continúa el flujo; si existe, actualiza notas o descarta.
6. **HubSpot Create Company & Contact**: Registra los datos limpios en el CRM y asigna el propietario del lead.
