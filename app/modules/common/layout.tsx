import React from 'react';

import { type Event } from '~/data/events';
import { Footer } from '~/modules/common/footer';
import { Header } from '~/modules/common/header';
import { Menu } from '~/modules/common/menu';

function Layout({
  children,
  event,
}: {
  children: React.ReactNode;
  event: Event | null;
}) {
  return (
    <>
      <h1 className="sr-only">BringIT Meetup for Software Engineers</h1>
      <Header />
      <Menu />
      {children}
      <Footer event={event} />
    </>
  );
}

export { Layout };
