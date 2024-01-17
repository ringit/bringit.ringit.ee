import React from 'react';

import { Footer } from '~/modules/common/footer';
import { Header } from '~/modules/common/header';
import { Menu } from '~/modules/common/menu';

export interface LayoutProps extends React.HTMLProps<typeof React.Fragment> {}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Menu />
      {children}
      <Footer />
    </>
  );
}

export { Layout };
