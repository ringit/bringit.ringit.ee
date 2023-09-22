import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { Footer } from '~/components/common/footer';
import { Header } from '~/components/common/header';
import { Main } from '~/components/index/main';
import { DataContext } from '~/context';

export async function loader() {
  const data = [
    {
      time: '15-16',
      name: 'Aleksei',
      title: 'Race Condition When Refreshing Tokens',
    },
    {
      time: '16-17',
      name: 'Janar',
      title: 'Keep Sanity While Writing Frontend Tests',
    },
    {
      time: '17:30-18:30',
      name: 'Gert',
      title: 'Lets Remix Our Frontend',
    },
    {
      time: '18:30-19:30',
      name: 'Jan',
      title: 'From Zero to Energy Hero',
    },
  ];
  return json({ data });
}

export const meta: MetaFunction = () => {
  return [
    { title: 'BRING_IT @Heldeke! 28.09.2023' },
    { name: 'description', content: 'BringIT Conference powered by RingIT' },
    {
      tagName: 'link',
      rel: 'canonical',
      href: `https://bringit.ringit.ee/`,
    },
    {
      property: 'og:url',
      content: `https://bringit.ringit.ee/`,
    },
    {
      property: 'og:title',
      content: 'BRING_IT',
    },
    {
      property: 'og:description',
      content: 'BringIT Conference powered by RingIT',
    },
    {
      property: 'og:image',
      content: 'https://bringit.ringit.ee/cover.jpg',
    },
    {
      property: 'og:image:width',
      content: '3024',
    },
    {
      property: 'og:image:height',
      content: '1700',
    },
    {
      property: 'og:locale',
      content: 'et',
    },
  ];
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <DataContext.Provider value={{ schedule: data }}>
      <Header />
      <Main />
      <Footer />
    </DataContext.Provider>
  );
}
