import React, { useState, useEffect } from 'react';

import { css } from '@emotion/react';
import Head from 'next/head';
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
      <Head>
        <title>JIPHY</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="concept by GIPHY" key="title" />
        <meta property="og:url" content="https://jiphy.site" />
        <meta property="og:site_name" content="JIPHY" />
        <meta
          property="og:image"
          content="https://github.com/kk3june/jiphy/tree/main/public/images/og_image.png?raw=true"
        />
        <meta property="og:description" content="본 사이트는 미국의 giphy.com 사이트를 모티브로 하여 제작되었습니다." />
        <meta property="og:locale" content="en_Ko" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
