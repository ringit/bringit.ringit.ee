import * as path from 'node:path';
import * as url from 'node:url';
import { createRequestHandler } from '@react-router/express';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const isDev = process.env.NODE_ENV !== 'production';

const viteDevServer = isDev
  ? await import('vite').then((vite) =>
      vite.createServer({ server: { middlewareMode: true } }),
    )
  : undefined;

const BUILD_PATH = path.resolve('build/server/index.js');
const BUILD_URL = url.pathToFileURL(BUILD_PATH).href;

const app = express();

app.use(compression());
app.disable('x-powered-by');

if (viteDevServer) {
  app.use(viteDevServer.middlewares);
} else {
  // Vite fingerprints assets so we can cache forever.
  app.use(
    '/assets',
    express.static('build/client/assets', { immutable: true, maxAge: '1y' }),
  );
  // Everything else (like favicon.ico) is cached for an hour.
  app.use(express.static('build/client', { maxAge: '1h' }));
}

// Aggressively cache fonts for a year.
app.use(
  '/fonts',
  express.static('public/fonts', { immutable: true, maxAge: '1y' }),
);

app.use(express.static('public', { maxAge: '1h' }));
app.use(morgan('tiny'));

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        'default-src': ["'none'"],
        'connect-src': isDev
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

app.all(
  '*',
  createRequestHandler({
    build: viteDevServer
      ? () => viteDevServer.ssrLoadModule('virtual:react-router/server-build')
      : () => import(BUILD_URL),
  }),
);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
