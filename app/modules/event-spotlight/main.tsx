import { format } from 'date-fns';

import type { Speaker, SpotlightEvent } from '~/data/events';
import { Container } from '~/ui/container';
import { Logos } from '../common/logos';

function SpotlightMain({ event }: { event: SpotlightEvent }) {
  const formattedDate = format(event.date, 'MMMM d, yyyy');

  return (
    <main className="relative space-y-16">
      {/* Hero */}
      <Container as="section">
        <div className="space-y-16 px-4 pt-20 pb-16 text-center">
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-white sm:text-7xl">
                RingIT
              </span>
            </div>
            <span className="text-2xl font-light text-white/40">×</span>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-white sm:text-7xl">
                {event.partner?.name}
              </span>
            </div>
          </div>

          {/* Title & meta */}
          <div className="space-y-8">
            <div className="mx-auto max-w-xl space-y-3">
              <h2 className="text-2xl leading-tight font-bold text-white/90 md:text-4xl">
                {event.meta.header}
              </h2>
              <p className="text-white/90">{event.meta.description}</p>
              <p className="text-white">
                <time dateTime={`${event.date} ${event.time}`}>
                  {formattedDate} | {event.time}
                </time>
              </p>
            </div>

            <a
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-white bg-white px-8 py-2 text-lg font-bold text-black italic transition-colors hover:bg-white/80"
            >
              Register
            </a>
          </div>
        </div>
      </Container>

      {/* Speakers */}
      <Container as="section" className="px-4">
        <div className="space-y-8">
          <h2 className="mb-6 text-center text-3xl font-bold text-white">
            Speakers
          </h2>
          <div className="rounded-2xl bg-white p-6 md:p-8">
            <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {(event.speakers as readonly Speaker[]).map((speaker) => (
                <li
                  key={speaker.name}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="flex aspect-square items-center justify-center overflow-hidden rounded-full bg-black">
                    {speaker.image && (
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="space-y-2 sm:px-4">
                    <p className="text-lg font-bold text-black">
                      {speaker.name}
                    </p>
                    <p className="text-sm text-black">{speaker.role}</p>
                  </div>
                  {speaker.description && (
                    <p className="text-xs leading-snug text-black/65">
                      {speaker.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Agenda */}
      <Container as="section" className="px-4">
        <div className="space-y-8">
          <h2 className="text-center text-3xl font-bold text-white">Agenda</h2>
          <ul className="space-y-8">
            {event.agenda.map((item) => (
              <li
                key={item.title}
                className="space-y-6 rounded-3xl border border-white px-4 py-12 text-center sm:px-16"
              >
                <p className="text-white/70 uppercase">{item.speaker}</p>
                <hr className="-mx-4 border-white/10 sm:-mx-16" />
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-white bg-white px-8 py-2 text-lg font-bold text-black italic transition-colors hover:bg-white/80"
            >
              Register
            </a>
          </div>
        </div>
      </Container>

      <Logos event={event} />
    </main>
  );
}

export { SpotlightMain };
