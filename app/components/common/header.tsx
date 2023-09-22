import { useMedia } from 'react-use';

import { Logo } from '~/ui/logo';
import { IllustrationRight } from '~/components/index/illustrationRight';
import { IllustrationText } from '~/components/index/illustrationText';

function Header() {
  const showIllustration = useMedia('(min-width: 50rem)', true);

  return (
    <header className="relative">
      <a href="/" className="p-4 inline-block relative z-[1]">
        <Logo className="w-32 h-32 md:w-64 md:h-64" />
      </a>
      <IllustrationText className="absolute top-8 md:top-12 right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 z-[1] rotate-[14deg]">
        <p>Areneda</p>
        <p>Areneda</p>
        <p>Areneda!</p>
      </IllustrationText>
      {showIllustration && (
        <IllustrationRight className="absolute top-0 right-0 pointer-events-none h-80 w-auto" />
      )}
    </header>
  );
}

export { Header };
