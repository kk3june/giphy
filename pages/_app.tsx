import React from 'react';

import '../src/styles/globals.css';
import '../src/styles/reset.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';

import Layout from '../src/components/templates/Layout/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import wrapper from '../src/store';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
