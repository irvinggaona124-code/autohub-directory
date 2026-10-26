---
titulo: "Cómo Conectar Shopify con WhatsApp para Recuperar Carritos Abandonados en n8n"
appA: "Shopify"
appB: "WhatsApp"
motor: "n8n"
casoDeUso: "Envío automatizado de mensajes hiperpersonalizados de recuperación de pedidos y carritos incompletos con cupones dinámicos."
categoria: "E-commerce"
descripcionCorta: "Conecta los webhooks de carritos abandonados de Shopify con la API oficial de WhatsApp en n8n, aumentando la tasa de rescate de ventas hasta en un 28%."
nodosEstimados: 9
tiempoConfiguracion: "15 minutos"
dificultad: "Principiante"
plantillaSlug: "bot-whatsapp-catalogo-pdf-n8n-openai"
requisitos:
  - "Tienda activa en Shopify"
  - "Acceso a Webhooks de Shopify"
  - "Meta WhatsApp Business API o proveedor alternativo"
  - "Instancia de n8n"
seoKeywords:
  - "shopify whatsapp n8n"
  - "recuperar carritos abandonados whatsapp automatizado"
  - "n8n ecommerce webhook whatsapp"
fecha: 2026-10-25
---

## Retención de Ventas en Comercio Electrónico

Los correos electrónicos de recuperación de carritos tradicionales sufren tasas de apertura inferiores al 20%. En contraste, los mensajes directos de WhatsApp alcanzan tasas de apertura superiores al 90% en los primeros 10 minutos.

Con este flujo de **n8n**, cuando un usuario añade productos a su carrito en Shopify e introduce su número telefónico pero no finaliza la compra:
1. Shopify dispara un webhook con los productos seleccionados y el total del pedido.
2. n8n espera un intervalo prudencial (ej. 45 minutos) para evitar ser invasivo.
3. El sistema valida si la compra se completó en ese periodo. Si sigue pendiente, genera un enlace directo al carrito con descuento y lo envía por WhatsApp.
