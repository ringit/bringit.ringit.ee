import { Container } from '~/ui/container';
import { RingITLogo } from '~/ui/ringitLogo';
import { Schedule } from './schedule';

function Main() {
  return (
    <main className="relative flex-1">
      <h1 className="sr-only">BringIT Conference</h1>
      <Container as="section">
        <div className="space-y-12 rounded-[4rem] bg-white px-4 py-12 text-center md:-mt-32 md:rounded-full md:py-24">
          <Schedule />

          <div className="space-y-1">
            <a
              href="https://ringit.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <span className="sr-only">RingIT Webpage</span>
              <RingITLogo className="h-auto w-32" />
            </a>
            <p className="text-xs text-foreground/50">
              powered by{' '}
              <a
                href="https://ringit.ee"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                RingIT
              </a>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

export { Main };
