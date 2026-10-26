---
titulo: "Cómo Conectar Calendly con Notion para Crear un CRM de Reuniones Automatizado en n8n"
appA: "Calendly"
appB: "Notion"
motor: "n8n"
casoDeUso: "Registro automático de llamadas agendadas, preguntas de calificación y notas previas en el tablero de CRM de Notion."
categoria: "Productividad & Ventas"
descripcionCorta: "Centraliza cada videollamada programada en Calendly directamente en tu base de datos de Notion, creando tareas de seguimiento y recordatorios automáticos."
nodosEstimados: 8
tiempoConfiguracion: "12 minutos"
dificultad: "Principiante"
requisitos:
  - "Cuenta en Calendly (Standard o Pro para webhooks)"
  - "Integración interna en Notion con acceso a base de datos"
  - "Instancia de n8n"
seoKeywords:
  - "calendly notion crm n8n"
  - "automatizar reuniones notion calendly"
  - "n8n calendly webhook notion"
fecha: 2026-10-25
---

## Sincronización de Agenda con tu Base de Datos Central

Perder el contexto de quién agendó una llamada y qué respuestas dio en el cuestionario previo genera reuniones poco preparadas.

Con este flujo de **n8n**, en cuanto un cliente reserva un horario:
1. Calendly envía la fecha, correo, respuestas y tipo de evento.
2. n8n busca si el contacto ya existe en tu CRM de Notion; si no existe, lo crea con la etiqueta de "Reunión Pendiente".
3. Vincula el evento al calendario del equipo para que todos tengan las notas antes de comenzar la llamada.
