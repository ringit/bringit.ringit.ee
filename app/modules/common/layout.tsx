import React from 'react';

import { Footer } from '~/modules/common/footer';
import { Header } from '~/modules/common/header';
import { Menu } from '~/modules/common/menu';

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">BringIT Meetup for Software Engineers</h1>
      <Header />
      <Menu />
      {children}
      <Footer />
    </>
  );
}

export { Layout };
