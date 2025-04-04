import { useStore } from '~/hooks/useStore';
import { Container } from '~/ui/container';
import { FairownLogo } from '~/ui/fairownLogo';
import { KpmgLogo } from '~/ui/kpmgLogo';
import { RingITLogo } from '~/ui/ringitLogo';
import { Schedule } from './schedule';

function Main() {
  const { event } = useStore();

  return (
    <main className="relative flex-1">
      <Container as="section">
        <div className="space-y-12 px-4 pb-12 pt-4 text-center md:-mt-32 md:pb-24 md:pt-12">
          <Schedule />

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
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
                <span>x</span>
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
                </a>
              </>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}

export { Main };
