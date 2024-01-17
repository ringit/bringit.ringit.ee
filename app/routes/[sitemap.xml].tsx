import { data } from '~/data/events';

export async function loader() {
  const eventUrls = data
    .map(
      (event) =>
        `<url><loc>https://bringit.ringit.ee/event/${event.slug}</loc><lastmod>2024-01-17T17:30:00.000Z</lastmod><priority>1.0</priority></url>`,
    )
    .join('\n');
  const content = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      <url><loc>https://bringit.ringit.ee/</loc><lastmod>2024-01-17T17:30:00.000Z</lastmod><priority>1.0</priority></url>
      ${eventUrls}
    </urlset>
  `;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  });
}
