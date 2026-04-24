import { useLoaderData, type MetaFunction } from 'react-router';

import { data } from '~/data/events';
import { getLatestEvent } from '~/lib/utils';
import { Layout } from '~/modules/common/layout';
import { SpotlightHeader } from '~/modules/event-spotlight/header';
import { SpotlightMain } from '~/modules/event-spotlight/main';
import { Main } from '~/modules/index/main';

export async function loader() {
  const event = getLatestEvent(data);
  if (!event) throw new Response('Event not found', { status: 404 });
  return { event };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.event.meta.title },
    {
      name: 'description',
      content:
        data?.event.meta.description ||
        'BringIT Meetup for Software Engineers Powered by RingIT',
    },
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
      content: data?.event.meta.title,
    },
    {
      property: 'og:description',
      content:
        data?.event.meta.description ||
        'BringIT Meetup for Software Engineers Powered by RingIT',
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
      content: 'en',
    },
  ];
};

export default function Index() {
  const { event } = useLoaderData<typeof loader>();
  const isSpotlight = 'variant' in event && event.variant === 'spotlight';

  return (
    <Layout event={event} header={isSpotlight ? <SpotlightHeader event={event} /> : undefined}>
      {isSpotlight ? <SpotlightMain event={event} /> : <Main event={event} />}
    </Layout>
  );
}
