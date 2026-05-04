import type { Event } from '~/data/events';
import { CoopLogo } from '~/ui/coopLogo';
import { FairownLogo } from '~/ui/fairownLogo';
import { KpmgLogo } from '~/ui/kpmgLogo';
import { RingITLogo } from '~/ui/ringitLogo';

export function Logos({ event }: { event: Event | null }) {
  return (
    <section className="flex flex-col items-center justify-center space-y-4 border-t border-white/10 py-16 sm:flex-row sm:space-y-0 sm:space-x-8">
      <a
        href="https://ringit.ee"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <span className="sr-only">RingIT Webpage</span>
        <RingITLogo className="h-auto w-32" />
      </a>
      {event?.partner && (
        <>
          <span className="text-2xl font-light text-white/40">×</span>
          <a
            href={event.partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            {event.partner.name === 'fairown' && (
              <>
                <span className="sr-only">{event.partner.name}</span>
                <FairownLogo className="h-auto w-40 fill-white" />
              </>
            )}
            {event.partner.name === 'KPMG' && (
              <>
                <span className="sr-only">{event.partner.name}</span>
                <KpmgLogo className="h-auto w-40 fill-white" />
              </>
            )}
            {event.partner.name === 'Coop Pank' && (
              <>
                <span className="sr-only">{event.partner.name}</span>
                <CoopLogo className="h-auto w-40 fill-white" />
              </>
            )}
          </a>
        </>
      )}
    </section>
  );
}
