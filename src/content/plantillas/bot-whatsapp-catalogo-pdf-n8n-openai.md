---
titulo: "Bot de WhatsApp con Catálogo PDF y OpenAI en n8n"
descripcionCorta: "Flujo de trabajo de 11 nodos para atender clientes en WhatsApp sin alucinaciones, extrayendo respuestas directamente de tu catálogo oficial en PDF."
precio: 49
precioOriginal: 89
motor: "n8n"
categoria: "Soporte Ventas"
nodos: 11
payhipUrl: "https://payhip.com/b/demo1"
gumroadUrl: "https://gumroad.com/l/demo1"
destacado: true
ahorroLaboralMensual: "450 USD/mes"
requisitos:
  - "Cuenta o instancia activa de n8n (Cloud o Self-hosted)"
  - "Clave de API de OpenAI (GPT-4o o GPT-4o-mini)"
  - "API de WhatsApp Cloud o proveedor de mensajería (Evolution API / Baileys)"
  - "Archivo PDF de catálogo o lista de precios pública"
caracteristicas:
  - "Lectura y vectorización dinámica del documento PDF oficial"
  - "Restricción estricta de prompts: solo responde con productos y precios existentes"
  - "Manejo de estados de conversación y derivación a operador humano"
  - "Archivo JSON listo para importar con 1 clic en n8n"
  - "Video guía de configuración de 12 minutos incluido"
fecha: 2026-10-25
---

## Problema que Resuelve este Flujo

Las tiendas de comercio electrónico y pequeñas empresas pierden hasta un 35% de sus conversiones en WhatsApp debido a respuestas tardías o respuestas incorrectas cuando los clientes consultan disponibilidad, medidas y precios de productos.

Configurar asistentes tradicionales de IA suele generar alucinaciones donde el bot inventa promociones o presupuestos inexistentes. Este flujo de trabajo de 11 nodos en **n8n** restringe la base de conocimiento de OpenAI exclusivamente al archivo PDF de tu catálogo, asegurando respuestas con precisión milimétrica en menos de 3 segundos.

## Arquitectura de los 11 Nodos

1. **Webhook / WhatsApp Trigger**: Captura el mensaje de texto entrante del cliente.
2. **Filter & Anti-Spam Node**: Descarta mensajes vacíos o formatos multimedia no soportados.
3. **Customer State Router**: Valida si el cliente ya está registrado o si tiene una conversación abierta.
4. **PDF Loader & Parser**: Descarga la versión más reciente del catálogo corporativo.
5. **Recursive Text Splitter**: Fragmenta las tablas de productos en bloques vectorizables.
6. **OpenAI Embeddings**: Transforma las secciones del catálogo en representaciones semánticas.
7. **In-Memory Vector Store**: Encuentra exactamente la página o producto consultado.
8. **AI Agent Core (GPT-4o-mini)**: Redacta la respuesta comercial con tono persuasivo y profesional.
9. **Confidence Guard**: Si la información no está en el PDF, genera una respuesta cordial de escalamiento humano.
10. **WhatsApp Sender Node**: Envía la respuesta formateada con emojis y enlaces de pago directos.
11. **Google Sheets Logger**: Almacena el historial de consultas para análisis de demanda comercial.

## Requisitos de Configuración

- **Tiempo estimado:** 15 a 20 minutos.
- **Costo operativo de cómputo:** Menos de 1 USD por cada 1,000 conversaciones utilizando GPT-4o-mini.
- **Instalación:** Importa el archivo `.json` incluido dentro de tu editor de n8n, asigna tus credenciales de OpenAI y WhatsApp, y el sistema queda activo de inmediato.
