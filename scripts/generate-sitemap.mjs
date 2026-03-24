import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = process.env.DOMAIN || 'https://upgradeboilersandbathrooms.com';

const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/services', priority: 0.9, changefreq: 'weekly' },
  { path: '/plumbing', priority: 0.9, changefreq: 'weekly' },
  { path: '/plumbing/emergency-plumber', priority: 0.9, changefreq: 'weekly' },
  { path: '/plumbing/plumber-repairs', priority: 0.8, changefreq: 'weekly' },
  { path: '/plumbing/tap-repairs', priority: 0.8, changefreq: 'weekly' },
  { path: '/plumbing/toilet-repairs', priority: 0.8, changefreq: 'weekly' },
  { path: '/plumbing/hot-water-tanks', priority: 0.8, changefreq: 'weekly' },
  { path: '/plumbing/cold-water-tanks', priority: 0.8, changefreq: 'weekly' },
  { path: '/plumbing/cast-iron-pipes-drainage', priority: 0.8, changefreq: 'weekly' },
  { path: '/plumbing/lead-pipe-replacement', priority: 0.8, changefreq: 'weekly' },
  { path: '/plumbing/shower-repairs', priority: 0.8, changefreq: 'weekly' },
  { path: '/heating', priority: 0.9, changefreq: 'weekly' },
  { path: '/boilers', priority: 0.9, changefreq: 'weekly' },
  { path: '/boilers/installation', priority: 0.8, changefreq: 'weekly' },
  { path: '/boilers/servicing', priority: 0.8, changefreq: 'weekly' },
  { path: '/boilers/service-plans', priority: 0.8, changefreq: 'weekly' },
  { path: '/boilers/repairs', priority: 0.8, changefreq: 'weekly' },
  { path: '/heating/boiler-cover', priority: 0.8, changefreq: 'weekly' },
  { path: '/heating/gas-engineer', priority: 0.8, changefreq: 'weekly' },
  { path: '/heating/heating-engineer', priority: 0.8, changefreq: 'weekly' },
  { path: '/heating/gas-leak', priority: 0.8, changefreq: 'weekly' },
  { path: '/heating/underfloor-heating', priority: 0.8, changefreq: 'weekly' },
  { path: '/heating/gas-fire-repairs', priority: 0.8, changefreq: 'weekly' },
  { path: '/heating/air-source-heat-pumps', priority: 0.8, changefreq: 'weekly' },
  { path: '/heating/radiator-repairs', priority: 0.8, changefreq: 'weekly' },
  { path: '/heating/power-flushing', priority: 0.8, changefreq: 'weekly' },
  { path: '/bathroom-installations', priority: 0.8, changefreq: 'weekly' },
  { path: '/landlords', priority: 0.8, changefreq: 'weekly' },
  { path: '/landlords/gas-safety-certificates', priority: 0.8, changefreq: 'weekly' },
  { path: '/landlords/lead-testing', priority: 0.8, changefreq: 'weekly' },
  { path: '/landlords/legionella-risk-assessments', priority: 0.8, changefreq: 'weekly' },
  { path: '/landlords/pat-testing', priority: 0.8, changefreq: 'weekly' },
  { path: '/areas-served', priority: 0.8, changefreq: 'monthly' },
  { path: '/areas/plumber-glasgow-southside', priority: 0.8, changefreq: 'monthly' },
  { path: '/areas/plumber-bearsden', priority: 0.8, changefreq: 'monthly' },
  { path: '/areas/plumber-paisley', priority: 0.8, changefreq: 'monthly' },
  { path: '/areas/plumber-east-kilbride', priority: 0.8, changefreq: 'monthly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'weekly' },
  { path: '/reviews', priority: 0.7, changefreq: 'weekly' },
  { path: '/news', priority: 0.7, changefreq: 'weekly' },
  { path: '/faqs', priority: 0.7, changefreq: 'weekly' },
  { path: '/pricing', priority: 0.7, changefreq: 'monthly' },
];

function generateSitemap() {
  const urls = routes.map(route => {
    const lastmod = new Date().toISOString().split('T')[0];
    return `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log('Sitemap generated successfully at public/sitemap.xml');
}

generateSitemap();
