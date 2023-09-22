import { useMedia } from 'react-use';

import { IllustrationLeft } from '~/components/index/illustrationLeft';
import { IllustrationText } from '~/components/index/illustrationText';

function Footer() {
  const showIllustration = useMedia('(min-width: 50rem)', true);

  return (
    <footer className="relative flex justify-end">
      {showIllustration && (
        <IllustrationLeft className="pointer-events-none absolute bottom-0 left-0 h-80 w-auto" />
      )}
      <IllustrationText className="absolute bottom-8 md:bottom-auto md:-top-12 left-4 md:left-1/2 md:-translate-x-1/2 z-[1] -rotate-[14deg]">
        <p>Saun!!!</p>
        <p>Baar!!!</p>
      </IllustrationText>
      <ul className="text-right text-2xl md:text-4xl tracking-widest font-bold p-4">
        <li>28.09</li>
        <li>15:00</li>
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
