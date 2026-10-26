---
titulo: "Cómo Conectar WooCommerce con WhatsApp para Notificaciones de Envíos en n8n"
appA: "WooCommerce"
appB: "WhatsApp"
motor: "n8n"
casoDeUso: "Envío instantáneo del número de seguimiento y estado del paquete al comprador por WhatsApp cuando cambia el estado en WordPress."
categoria: "E-commerce"
descripcionCorta: "Reduce consultas de soporte ('¿Dónde está mi pedido?') notificando automáticamente a los clientes de WooCommerce por WhatsApp con cada cambio de estado."
nodosEstimados: 7
tiempoConfiguracion: "10 minutos"
dificultad: "Principiante"
requisitos:
  - "Tienda en WordPress con WooCommerce"
  - "Webhook de cambio de estado de pedido (Order Status Updated)"
  - "Proveedor de API de WhatsApp (Meta Cloud API o Baileys/Evolution)"
  - "Instancia de n8n"
seoKeywords:
  - "woocommerce whatsapp n8n"
  - "notificaciones de envio whatsapp woocommerce"
  - "n8n order status whatsapp"
fecha: 2026-10-25
---

## Soporte Proactivo para Tiendas WooCommerce

El 40% de los tickets de soporte en e-commerce corresponden a consultas sobre el estado del envío. Enviar estas actualizaciones por WhatsApp reduce drásticamente las quejas de los usuarios.

Este flujo de **n8n** detecta el cambio de estado en WooCommerce (ej. de "Procesando" a "Enviado"), extrae el número de rastreo de la empresa de transporte y dispara una plantilla de mensaje oficial con el enlace directo al seguimiento del paquete.
