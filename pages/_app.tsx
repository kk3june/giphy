import React from 'react';

import '../src/styles/globals.css';
import '../src/styles/reset.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';

import Layout from '../src/components/templates/Layout/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import wrapper from '../src/store';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
