import { readFileSync } from 'node:fs';
import { PassThrough, Transform } from 'node:stream';

import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import type { EntryContext } from 'react-router';
import { createReadableStreamFromReadable } from '@react-router/node';
import { ServerRouter } from 'react-router';

const ABORT_DELAY = 5_000;

// Read CSS content once at server startup so every request inlines it for free.
const cssContentMap = loadCssContentMap();

function loadCssContentMap(): Map<string, string> | null {
  if (process.env.NODE_ENV !== 'production') return null;
  try {
    const manifest = JSON.parse(
      readFileSync('build/client/.vite/manifest.json', 'utf-8'),
    ) as Record<string, { css?: string[] }>;
    const map = new Map<string, string>();
    for (const entry of Object.values(manifest)) {
      for (const file of entry.css ?? []) {
        if (!map.has(file)) {
          map.set(file, readFileSync(`build/client/${file}`, 'utf-8'));
        }
      }
    }
    return map.size > 0 ? map : null;
  } catch {
    return null;
  }
}

function replaceCssLinksWithInlineStyles(html: string): string {
  if (!cssContentMap) return html;
  for (const [file, css] of cssContentMap) {
    const escaped = file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    html = html.replace(
      new RegExp(`<link[^>]+href="/${escaped}"[^>]*\\/?>`, 'g'),
      `<style>${css}</style>`,
    );
  }
  return html;
}

/**
 * Buffers only the <head> section of the stream, inlines CSS there, then
 * passes the rest through untouched — so streaming SSR for the body is preserved.
 */
class HeadCssInlineTransform extends Transform {
  private buffer = '';
  private headProcessed = false;

  override _transform(
    chunk: Buffer,
    _encoding: string,
    callback: () => void,
  ) {
    if (this.headProcessed) {
      this.push(chunk);
      callback();
      return;
    }

    this.buffer += chunk.toString();

    const headClose = this.buffer.indexOf('</head>');
    if (headClose !== -1) {
      this.headProcessed = true;
      const head = replaceCssLinksWithInlineStyles(
        this.buffer.slice(0, headClose + 7),
      );
      const rest = this.buffer.slice(headClose + 7);
      this.buffer = '';
      this.push(head + rest);
    }

    callback();
  }

  override _flush(callback: () => void) {
    if (this.buffer) {
      this.push(replaceCssLinksWithInlineStyles(this.buffer));
    }
    callback();
  }
}

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const userAgent = request.headers.get('user-agent');
    const readyOption =
      (userAgent && isbot(userAgent)) || routerContext.isSpaMode
        ? 'onAllReady'
        : 'onShellReady';

    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={routerContext} url={request.url} />,
      {
        [readyOption]() {
          shellRendered = true;
          responseHeaders.set('Content-Type', 'text/html');

          const body = new PassThrough();
          const output = cssContentMap
            ? body.pipe(new HeadCssInlineTransform())
            : body;
          const stream = createReadableStreamFromReadable(output);

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      },
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
