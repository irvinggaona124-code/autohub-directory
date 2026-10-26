import { defineCollection, z } from 'astro:content';

const vacantesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    empresa: z.string(),
    inicialEmpresa: z.string().default('U'),
    titulo: z.string(),
    ruta: z.enum(['Pasantía formativa', 'Práctica profesional', 'Primer empleo']),
    estipendio: z.string(),
    modalidad: z.enum(['Remoto', 'Híbrido', 'Presencial']),
    ubicacion: z.string(),
    area: z.enum(['Datos', 'Diseño', 'Operaciones', 'Comunicación', 'Tecnología', 'Finanzas']),
    mentorAsignado: z.boolean().default(true),
    mentorRol: z.string().default('Supervisor de Mentoría'),
    sinExperiencia: z.boolean().default(true),
    descripcion: z.string(),
    tareas: z.array(z.string()),
    aprendizaje: z.array(z.string()),
    requisitos: z.array(z.string()),
    fecha: z.date(),
  }),
});

const talentoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    codigo: z.string(),
    carrera: z.string(),
    universidad: z.string(),
    etapa: z.string(),
    ubicacion: z.string(),
    indice: z.string(),
    ingles: z.string(),
    afinidad: z.string(),
    perfilCompletado: z.number().default(85),
    intereses: z.array(z.string()),
    proyectos: z.array(z.string()),
    fecha: z.date(),
  }),
});

export const collections = {
  vacantes: vacantesCollection,
  talento: talentoCollection,
};
