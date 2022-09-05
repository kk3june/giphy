import React from 'react';
import '../src/styles/globals.css';
import '../src/styles/reset.css';
import type { AppProps } from 'next/app';
import Layout from '../src/components/templates/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
