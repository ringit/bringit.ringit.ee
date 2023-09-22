import { useMedia } from 'react-use';

import { IllustrationRight } from '~/components/index/illustrationRight';
import { IllustrationText } from '~/components/index/illustrationText';
import { Logo } from '~/ui/logo';

function Header() {
  const showIllustration = useMedia('(min-width: 50rem)', true);

  return (
    <header className="relative">
      <a href="/" className="relative z-[1] inline-block p-4">
        <Logo className="h-32 w-32 md:h-64 md:w-64" />
      </a>
      <IllustrationText className="absolute right-4 top-8 z-[1] rotate-[14deg] md:left-1/2 md:right-auto md:top-12 md:-translate-x-1/2">
        <p>Areneda</p>
        <p>Areneda</p>
        <p>Areneda!</p>
      </IllustrationText>
      {showIllustration && (
        <IllustrationRight className="pointer-events-none absolute right-0 top-0 h-80 w-auto" />
      )}
    </header>
  );
}

export { Header };
