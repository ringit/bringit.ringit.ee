import type { MetaFunction } from '@remix-run/node';
import { Footer } from '~/components/common/footer';
import { Header } from '~/components/common/header';
import { Main } from '~/components/index/main';

export const meta: MetaFunction = () => {
  return [
    { title: 'BRING_IT' },
    { name: 'description', content: 'BRING_IT by RingIT' },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
