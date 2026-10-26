---
titulo: "Cómo Conectar Formularios (Typeform/Tally) con Snov.io para Enriquecer Prospectos en n8n"
appA: "Typeform"
appB: "Snov.io"
motor: "n8n"
casoDeUso: "Captura de leads entrantes desde formularios web, enriquecimiento de perfil corporativo y verificación de email B2B en Snov.io."
categoria: "Prospección B2B"
descripcionCorta: "Enriquece al instante los prospectos que rellenan tus formularios web consultando la API de Snov.io para obtener cargo, tamaño de empresa y correo verificado."
nodosEstimados: 12
tiempoConfiguracion: "15 minutos"
dificultad: "Intermedio"
requisitos:
  - "Formulario en Typeform o Tally.so con webhook habilitado"
  - "Cuenta en Snov.io con API Key"
  - "Instancia de n8n"
seoKeywords:
  - "typeform a snov.io n8n"
  - "enriquecer leads formulario automatizado"
  - "snov.io api n8n lead generation"
fecha: 2026-10-25
---

## De Formulario Básico a Lead Enriquecido B2B

Cuando un prospecto completa un formulario web solicitando una auditoría o presupuesto, habitualmente solo deja su nombre y correo personal. 

Este flujo de **n8n**:
- Extrae el dominio corporativo del correo ingresado.
- Consulta **Snov.io** para validar si el correo es corporativo y extraer el perfil de LinkedIn de la empresa, número de empleados y tecnologías utilizadas.
- Clasifica el lead con un puntaje de idoneidad comercial antes de notificar a tu equipo de ventas por Slack o email.
