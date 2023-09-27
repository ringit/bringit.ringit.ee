import React from 'react';

import { Footer } from './footer';
import { Header } from './header';

export interface LayoutProps extends React.HTMLProps<typeof React.Fragment> {}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export { Layout };
