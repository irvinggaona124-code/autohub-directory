# Estrategia y Posts para Comunidades de Reddit

En Reddit (r/n8n, r/SaaS, r/selfhosted, r/SideProject), el autopromocionamiento descarado es penalizado con bloqueos. La clave es compartir un caso de estudio transparente de ingeniería de procesos con capturas reales y entregar el archivo JSON gratis en el post, dejando el enlace al directorio como recurso complementario en el pie o biografía.

---

## 🚀 Post 1: r/n8n & r/selfhosted

- **Título:** `How we stopped paying $400/mo on Zapier by moving our agency lead enrichment to self-hosted n8n + Firecrawl (Full workflow breakdown)`
- **Contenido:**

```text
Hey everyone,

A few months ago our agency pipeline was processing roughly 15,000 lead operations per month. Between Zapier task limits and Apollo credit renewals, our fixed monthly automation bill was crossing $400/mo.

We rebuilt the entire pipeline in n8n (running on a $10 Hetzner VPS) and integrated Firecrawl for web scraping. Here is the exact architecture we use:

1. Cron Trigger: Runs weekly for specific local business categories and zip codes.
2. Google Places API (HTTP Node): Queries places with pagination handling (radius 15km).
3. If-Condition Node: Filters out businesses without websites.
4. Firecrawl Scrape Node: Sends a POST request to scrape the homepage/contact page and returns clean markdown.
5. Extraction Schema: Pulls verified direct emails and LinkedIn URLs.
6. Google Sheets Append: Records only deduplicated leads ready for sales reps.

Performance & Costs:
- Zapier cost: ~$400/month.
- Self-hosted n8n cost: ~$10/month server + pay-per-scrape on Firecrawl.
- Total monthly savings: ~$350/mo.

I open-sourced the JSON workflow file so anyone can import it in 1 click without rebuilding the nodes from scratch:
You can grab the raw JSON directly here: https://autohub-directory.github.io/workflows/google-maps-lead-scraper.json

Let me know if you run into any webhook parsing errors and happy to help troubleshoot!
```

---

## 🚀 Post 2: r/SideProject & r/SaaS

- **Título:** `I built a zero-cost programmatic SEO directory for AI automations using Astro & GitHub Pages. Here are the numbers and tech stack.`
- **Contenido:**

```text
Hi r/SideProject,

I wanted to share a breakdown of a project built completely with $0 upfront capital: AutoHub (https://autohub-directory.github.io).

The Problem:
General directories (like generic AI tools portals) are losing 40-70% of organic traffic to search answer engines. But high-intent transactional queries (e.g. "How to connect Google Maps to HubSpot with n8n" or "Open source alternative to Hootsuite") convert at 3x higher rates.

The Architecture:
- Framework: Astro 4 (Static Site Generator) — 100/100 Core Web Vitals, sub-second build times.
- Styling: Tailwind CSS in Dark Mode.
- Content Management: Astro Content Collections with Zod validation.
- Hosting: GitHub Pages via GitHub Actions ($0/month).
- Sitemaps: Programmatic XML endpoint feeding Google Search Console.
- Monetization Engine:
  1. Payhip Free embed modal (5% transaction fee, $0 monthly subscription) to retain 91%+ margin on template sales.
  2. B2B recurring SaaS affiliates (Snov.io, Kinsta, Funnelish).
  3. "Fast-Track" submission pass ($25) for SaaS founders wanting permanent dofollow review links within 48h.

Happy to answer questions on programmatic routing, Zod collection schemas, or setting up zero-cost deployment pipelines!
```
