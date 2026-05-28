import { readFileSync } from 'fs';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

// Short-circuit the type-checking of the built output.
const BUILD_PATH = './build/server/index.js';
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PORT = Number.parseInt(process.env.PORT || '8080');

function buildCssPreloadHeader() {
  try {
    const manifest = JSON.parse(
      readFileSync('build/client/.vite/manifest.json', 'utf-8'),
    );
    const seen = new Set();
    const hints = [];
    for (const entry of Object.values(manifest)) {
      for (const file of entry.css ?? []) {
        if (!seen.has(file)) {
          seen.add(file);
          hints.push(`</${file}>; rel=preload; as=style`);
        }
      }
    }
    return hints.join(', ');
  } catch {
    return '';
  }
}

const app = express();

app.use(compression());
app.disable('x-powered-by');

if (DEVELOPMENT) {
  console.log('Starting development server');
  const viteDevServer = await import('vite').then((vite) =>
    vite.createServer({
      server: { middlewareMode: true },
    }),
  );
  app.use(viteDevServer.middlewares);
  app.use(async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule('./server/app.ts');
      return await source.app(req, res, next);
    } catch (error) {
      if (typeof error === 'object' && error instanceof Error) {
        viteDevServer.ssrFixStacktrace(error);
      }
      next(error);
    }
  });
} else {
  console.log('Starting production server');
  for (const dir of ['assets', 'fonts', 'favicons']) {
    app.use(
      `/${dir}`,
      express.static(`build/client/${dir}`, { immutable: true, maxAge: '1y' }),
    );
  }
  app.use(express.static('build/client', { maxAge: '1h' }));

  // Preload CSS via Link header so the browser fetches it in parallel with HTML
  // parsing, breaking the critical request chain discovered by Lighthouse.
  const cssPreloadHeader = buildCssPreloadHeader();
  if (cssPreloadHeader) {
    app.use((_req, res, next) => {
      res.setHeader('Link', cssPreloadHeader);
      next();
    });
  }

  app.use(morgan('tiny'));
  app.use(await import(BUILD_PATH).then((mod) => mod.app));
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'none'"],
          'connect-src': DEVELOPMENT
            ? ['ws:', "'self'"]
            : ["'self'", '*.google-analytics.com'],
          'script-src': [
            "'self'",
            "'unsafe-inline'",
            'https://www.googletagmanager.com',
          ],
          'manifest-src': ["'self'"],
          'upgrade-insecure-requests': null,
        },
      },
    }),
  );
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
