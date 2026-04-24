import { type SpotlightEvent } from '~/data/events';

function SpotlightHeader({ event }: { event: SpotlightEvent }) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-5 py-3 backdrop-blur-sm">
      <p className="text-xs font-semibold tracking-widest text-white/50 uppercase">
        {event.partner?.name}
        <span className="mx-2 text-white/25">|</span>
        RingIT
      </p>
      <a
        href={event.registerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-semibold tracking-widest text-white/50 uppercase transition-colors hover:text-white"
      >
        Register
      </a>
    </header>
  );
}

export { SpotlightHeader };
