import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site ? site.href : 'https://autohub-directory.github.io').replace(/\/$/, '');

  const plantillas = await getCollection('plantillas');
  const integraciones = await getCollection('integraciones');
  const alternativas = await getCollection('alternativas');

  const staticPages = [
    '',
    '/directorio',
    '/plantillas',
    '/integraciones',
    '/alternativas',
    '/enviar',
  ];

  const urls: Array<{ loc: string; lastmod?: string; changefreq: string; priority: string }> = [];

  // Static pages
  for (const page of staticPages) {
    urls.push({
      loc: `${baseUrl}${page}/`,
      changefreq: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? '1.0' : '0.8',
    });
  }

  // Plantillas
  for (const p of plantillas) {
    urls.push({
      loc: `${baseUrl}/plantillas/${p.slug}/`,
      lastmod: p.data.fecha.toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.9',
    });
  }

  // Integraciones (pSEO)
  for (const i of integraciones) {
    urls.push({
      loc: `${baseUrl}/integraciones/${i.slug}/`,
      lastmod: i.data.fecha.toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
    });
  }

  // Alternativas
  for (const a of alternativas) {
    urls.push({
      loc: `${baseUrl}/alternativas/${a.slug}/`,
      lastmod: a.data.fecha.toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
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
