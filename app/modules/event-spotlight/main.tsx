import { format } from 'date-fns';

import { type Speaker, type SpotlightEvent } from '~/data/events';
import { Container } from '~/ui/container';
import { RingITLogo } from '~/ui/ringitLogo';

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function AnthropicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.3 3.4h-3.3L20 21h3.3L17.3 3.4zm-10.6 0L0 21h3.4l1.4-3.9h7.1l1.4 3.9h3.4L10.6 3.4H6.7zm-.5 10.7l2.6-7.3 2.6 7.3H6.2z" />
    </svg>
  );
}

function SpotlightMain({ event }: { event: SpotlightEvent }) {
  const formattedDate = format(event.date, 'MMMM d, yyyy');

  return (
    <main className="relative flex-1">
      {/* Hero */}
      <Container as="section">
        <div className="space-y-8 px-4 pt-20 pb-16 text-center">
          {/* Partner logos */}
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center gap-2">
              <SpotifyIcon className="h-9 w-9 text-white" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Spotify
              </span>
            </div>
            <span className="text-2xl font-light text-white/40">×</span>
            <div className="flex items-center gap-2">
              <AnthropicIcon className="h-7 w-7 text-white" />
              <span className="text-2xl font-bold tracking-widest text-white">
                ANTHROP
                <span className="font-light">\</span>C
              </span>
            </div>
          </div>

          {/* Title & meta */}
          <div className="mx-auto max-w-xl space-y-3">
            <h2 className="text-2xl font-bold leading-tight text-teal-300 md:text-3xl">
              {event.meta.title}
            </h2>
            <p className="text-base text-white/70">{event.meta.description}</p>
            <p className="text-sm text-white/45">
              <time dateTime={event.date}>{formattedDate}</time>
              {' | 4:00PM – 6:00PM BST'}
            </p>
          </div>

          <a
            href={event.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-teal-400 px-8 py-2 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-400 hover:text-black"
          >
            Register
          </a>
        </div>
      </Container>

      {/* Speakers */}
      <Container as="section">
        <div className="px-4 pb-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-white">
            Speakers
          </h2>
          <div className="rounded-2xl bg-teal-100 p-6 md:p-8">
            <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {(event.speakers as readonly Speaker[]).map((speaker) => (
                <li
                  key={speaker.name}
                  className="flex flex-col items-center space-y-3 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-zinc-700 ring-2 ring-black/10">
                    {speaker.image ? (
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-white/60">
                        {speaker.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-black">
                      {speaker.name}
                    </p>
                    <p className="text-xs text-black/50">{speaker.role}</p>
                  </div>
                  <p className="text-xs leading-snug text-black/65">
                    {speaker.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Agenda */}
      <Container as="section">
        <div className="px-4 pb-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-white">
            Agenda
          </h2>
          <ul className="space-y-3">
            {event.agenda.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-5 text-center"
              >
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/55">{item.description}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-teal-400 px-8 py-2 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-400 hover:text-black"
            >
              Register
            </a>
          </div>
        </div>
      </Container>

      {/* Spotify Portal promo */}
      <section className="border-t border-white/10 py-16">
        <Container>
          <div className="flex flex-col items-center space-y-4 px-4 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30">
              <SpotifyIcon className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-4xl leading-tight font-extrabold text-white">
              Spotify Portal
              <br />
              for Backstage
            </h2>
            <p className="max-w-xs text-sm text-white/55">
              Talk to our platform engineers and learn how you can scale AI with
              Spotify Portal for Backstage.
            </p>
            <a
              href="https://backstage.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-teal-400 px-7 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              See Spotify Portal
            </a>
          </div>
        </Container>
      </section>

      {/* Powered by RingIT */}
      <Container as="section">
        <div className="flex justify-center px-4 py-8">
          <a
            href="https://ringit.ee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <span className="sr-only">RingIT Webpage</span>
            <RingITLogo className="h-auto w-20 opacity-60" />
          </a>
        </div>
      </Container>
    </main>
  );
}

export { SpotlightMain };
