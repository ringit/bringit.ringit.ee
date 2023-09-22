import { Container } from '~/ui/container';
import { RingITLogo } from '~/ui/ringitLogo';
import { Schedule } from './schedule';

function Main() {
  return (
    <main className="relative flex-1">
      <Container as="section">
        <div className="bg-white rounded-full text-center py-24 md:-mt-32 space-y-12">
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
