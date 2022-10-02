import React, { useState, useEffect } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import Floating from 'components/modules/Floating/Floating';
import Login from 'pages/login';
import { LayoutProps } from 'types/layout';

import Navbar from '../Navbar/Navbar';

const Layout = ({ children }: LayoutProps) => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/login') {
      setHideNavbar(true);
    }
  }, []);

  return (
    <div>
      {!hideNavbar ? (
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
        </div>
      ) : (
        <Login />
      )}
      <Floating />
    </div>
  );
};
export default Layout;
