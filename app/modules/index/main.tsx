import { type Event } from '~/data/events';
import { Container } from '~/ui/container';
import { Logos } from '../common/logos';
import { Schedule } from './schedule';

function Main({ event }: { event: Event | null }) {
  return (
    <main className="relative flex-1">
      <Container as="section">
        <div className="space-y-12 px-4 pt-4 pb-12 text-center md:-mt-32 md:pt-12 md:pb-24">
          <Schedule event={event} />
        </div>
      </Container>
      <Logos event={event} />
    </main>
  );
}

export { Main };
