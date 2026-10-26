---
titulo: "Cómo Conectar Instagram Direct Messages con Google Sheets usando n8n"
appA: "Instagram DMs"
appB: "Google Sheets"
motor: "n8n"
casoDeUso: "Registro automatizado de mensajes directos entrantes de Instagram, categorización por intención de compra y almacenamiento contable."
categoria: "Redes Sociales"
descripcionCorta: "Centraliza todas las consultas de ventas y soporte recibidas por mensajes directos de Instagram en una hoja compartida de Google Sheets con n8n."
nodosEstimados: 8
tiempoConfiguracion: "15 minutos"
dificultad: "Intermedio"
requisitos:
  - "Cuenta profesional de Instagram vinculada a una Página de Facebook"
  - "Acceso a Messenger API for Instagram de Meta"
  - "Instancia de n8n"
  - "Google Sheets"
seoKeywords:
  - "instagram direct messages google sheets n8n"
  - "guardar dms instagram automaticamente"
  - "n8n instagram webhook crm"
fecha: 2026-10-25
---

## Centralización de Mensajes de Redes Sociales

Muchos creadores de contenido y tiendas de comercio electrónico reciben decenas de mensajes directos en Instagram preguntando por precios y existencias que se pierden en la bandeja de entrada de la aplicación móvil.

Con este flujo de **n8n**:
- Cada mensaje entrante es capturado vía webhook de Meta.
- Un clasificador de texto identifica si el mensaje es una consulta de compra o soporte general.
- Se registra en Google Sheets con la fecha, usuario de Instagram, texto y estado de respuesta.
