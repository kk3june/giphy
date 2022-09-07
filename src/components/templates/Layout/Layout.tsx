import React from 'react';

import { css } from '@emotion/react';

import LayoutProps from '../../../types/layout';
import Floating from '../../modules/Floating/Floating';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      id="layout"
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 66rem;
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
