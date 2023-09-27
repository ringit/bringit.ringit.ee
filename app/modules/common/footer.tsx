import { useMedia } from 'react-use';

import { IllustrationLeft } from '~/modules/index/illustrationLeft';
import { IllustrationText } from '~/modules/index/illustrationText';

function Footer() {
  const showIllustration = useMedia('(min-width: 50rem)', true);

  return (
    <footer className="relative flex justify-end">
      {showIllustration && (
        <IllustrationLeft className="pointer-events-none absolute bottom-0 left-0 h-80 w-auto" />
      )}
      <IllustrationText className="absolute bottom-8 left-4 z-[1] -rotate-[14deg] md:-top-12 md:bottom-auto md:left-1/2 md:-translate-x-1/2">
        <p>Saun!!!</p>
        <p>Baar!!!</p>
      </IllustrationText>
      <ul className="p-4 text-right text-2xl font-bold tracking-widest md:text-4xl">
        <li>
          <time dateTime="2023-09-28">28.09</time>
        </li>
        <li>
          <time dateTime="15:00">15:00</time>
        </li>
        <li>
          <a
            href="https://heldeke.ee/et/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @Heldeke!
          </a>
        </li>
      </ul>
    </footer>
  );
}

export { Footer };
