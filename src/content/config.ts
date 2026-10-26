import { defineCollection, z } from 'astro:content';

const herramientasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    categoria: z.enum(['Marketing', 'E-commerce', 'Automatización', 'CRM', 'SEO', 'Scraping', 'Contenido']),
    motor: z.enum(['n8n', 'Make', 'Zapier', 'Open-Source', 'SaaS', 'Híbrido']),
    licencia: z.enum(['Open-Source', 'Freemium', 'Comercial']),
    urlOficial: z.string().url(),
    urlAfiliado: z.string().url().optional(),
    destacado: z.boolean().default(false),
    rating: z.number().default(4.8),
    logo: z.string().optional(),
    fecha: z.date(),
  }),
});

const integracionesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    appA: z.string(),
    appB: z.string(),
    motor: z.enum(['n8n', 'Make.com', 'Ambos']),
    casoDeUso: z.string(),
    categoria: z.string(),
    descripcionCorta: z.string(),
    nodosEstimados: z.number(),
    tiempoConfiguracion: z.string(),
    dificultad: z.enum(['Principiante', 'Intermedio', 'Avanzado']),
    plantillaSlug: z.string().optional(),
    requisitos: z.array(z.string()),
    seoKeywords: z.array(z.string()),
    fecha: z.date(),
  }),
});

const alternativasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    saasPropietario: z.string(),
    alternativaOpenSource: z.string(),
    categoria: z.string(),
    ahorroEstimadoMensual: z.string(),
    ventajasOpenSource: z.array(z.string()),
    limitaciones: z.array(z.string()),
    enlaceAfiliado: z.string().optional(),
    ctaTexto: z.string().default('Probar Alternativa'),
    fecha: z.date(),
  }),
});

const plantillasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descripcionCorta: z.string(),
    precio: z.number(),
    precioOriginal: z.number().optional(),
    motor: z.enum(['n8n', 'Make', 'Notion', 'n8n + Notion']),
    categoria: z.enum(['Marketing', 'E-commerce', 'Prospección', 'Soporte Ventas', 'Contenido IA']),
    nodos: z.number(),
    payhipUrl: z.string(),
    gumroadUrl: z.string().optional(),
    destacado: z.boolean().default(false),
    ahorroLaboralMensual: z.string(),
    requisitos: z.array(z.string()),
    caracteristicas: z.array(z.string()),
    fecha: z.date(),
  }),
});

export const collections = {
  herramientas: herramientasCollection,
  integraciones: integracionesCollection,
  alternativas: alternativasCollection,
  plantillas: plantillasCollection,
};
