import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site ? site.href : 'https://irvinggaona124-code.github.io/autohub-directory').replace(/\/$/, '');

  const vacantes = await getCollection('vacantes');

  const staticPages = [
    '',
    '/vacantes',
    '/estudiantes',
    '/empresas',
    '/talento',
    '/guia',
  ];

  const urls: Array<{ loc: string; lastmod?: string; changefreq: string; priority: string }> = [];

  // Static views
  for (const page of staticPages) {
    urls.push({
      loc: `${baseUrl}${page}/`,
      changefreq: page === '' || page === '/vacantes' ? 'daily' : 'weekly',
      priority: page === '' ? '1.0' : '0.8',
    });
  }

  // Dynamic vacancies
  for (const v of vacantes) {
    urls.push({
      loc: `${baseUrl}/vacantes/${v.slug}/`,
      lastmod: v.data.fechaPublicacion ? v.data.fechaPublicacion.toISOString().split('T')[0] : undefined,
      changefreq: 'weekly',
      priority: '0.9',
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
