import { useMedia } from 'react-use';
import { format } from 'date-fns';

import { useStore } from '~/hooks/useStore';
import { IllustrationLeft } from '~/modules/index/illustrationLeft';
import { IllustrationText } from '~/modules/index/illustrationText';

function Footer() {
  const showIllustration = useMedia('(min-width: 50rem)', true);
  const { event } = useStore();

  return (
    <footer className="relative mt-12 flex justify-end">
      {showIllustration && (
        <IllustrationLeft className="pointer-events-none absolute bottom-0 left-0 h-80 w-auto" />
      )}
      {event?.illustrationTexts && (
        <IllustrationText className="absolute bottom-8 left-4 z-[1] -rotate-[14deg] md:-top-12 md:bottom-auto md:left-1/2 md:-translate-x-1/2">
          {event.illustrationTexts.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </IllustrationText>
      )}
      <ul className="p-4 text-right text-2xl font-bold tracking-widest md:text-4xl">
        <li>
          <time dateTime={event?.date}>
            {event?.date ? format(event?.date, 'dd.MM') : null}
          </time>
        </li>
        <li>
          <time dateTime={event?.time}>{event?.time}</time>
        </li>
        <li>
          <a
            href={event?.location.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @{event?.location.title}
          </a>
        </li>
      </ul>
    </footer>
  );
}

export { Footer };
