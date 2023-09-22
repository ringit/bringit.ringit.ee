import type { MetaFunction } from '@remix-run/node';
import { Header } from '~/components/common/header';
import { Hero } from '~/components/index/hero';
import { Button } from '~/ui/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'BRING_IT' },
    { name: 'description', content: 'BRING_IT by RingIT' },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      <h1
        className="text-3xl font-bold supports-[-webkit-text-stroke:1px_black]:[-webkit-text-fill-color:white]
    supports-[-webkit-text-stroke:1px_black]:[-webkit-text-stroke:1px_black]"
      >
        BRING_IT
      </h1>
      <Hero />
      <Button variant="secondary">I'm coming</Button>
    </div>
  );
}
