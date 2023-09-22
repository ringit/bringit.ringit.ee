import { Container } from '~/ui/container';
import { RingITLogo } from '~/ui/ringitLogo';
import { Schedule } from './schedule';

function Main() {
  return (
    <main className="relative flex-1">
      <h1 className="sr-only">BringIT Conference</h1>
      <Container as="section">
        <div className="bg-white rounded-[4rem] md:rounded-full text-center py-12 md:py-24 px-4 md:-mt-32 space-y-12">
          <Schedule />

          <div className="space-y-1">
            <a
              href="https://ringit.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <RingITLogo className="w-32 h-auto" />
            </a>
            <p className="text-foreground/50 text-xs">
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
