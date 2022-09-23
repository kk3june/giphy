import React from 'react';

import { css } from '@emotion/react';

import Floating from 'components/modules/Floating/Floating';
import { LayoutProps } from 'types/layout';

import Navbar from '../Navbar/Navbar';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      id="layout"
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 65rem;
        height: 100%;
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
          'Helvetica Neue', sans-serif;
      `}
    >
      <Navbar />
      {children}
      <Floating />
    </div>
  );
};

export default Layout;
