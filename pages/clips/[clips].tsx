import React from 'react';

import { css } from '@emotion/react';
import { dehydrate, QueryClient, useQueries } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps } from 'next';

import ClipCard from 'components/atoms/ClipCard/ClipCard';
import { getContentById, getUpNext } from 'pages/api/fetchAPI';
import { DETAIL, QUERY_KEYS, UPNEXT } from 'src/constants';
import { ParamTypes } from 'types/types';

export const getStaticProps: GetStaticProps = async (context) => {
  const param = context.params?.clips;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEYS.GETDATA_BYID], () => getContentById(param as string));
  await queryClient.prefetchQuery([QUERY_KEYS.GET_UPNEXT], () => getUpNext(param as string));

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

const Clips = ({ param }: ParamTypes) => {
  const results = useQueries({
    queries: [
      { queryKey: [QUERY_KEYS.GETDATA_BYID], queryFn: () => getContentById(param) },
      { queryKey: [QUERY_KEYS.GET_UPNEXT], queryFn: () => getUpNext(param) },
    ],
  });

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        margin-top: 1rem;
      `}
    >
      <div>
        <ClipCard data={results[0].data} type={DETAIL} isLoading={results[0].isSuccess} />
      </div>
      <div
        css={css`
          width: min-content;
        `}
      >
        <h2
          css={css`
            margin-bottom: 1rem;
            font-weight: bold;
          `}
        >
          Up Next
        </h2>
        {results[1].data &&
          results[1].data.map((item: any) => (
            <ClipCard key={item.id} data={item} type={UPNEXT} isLoading={results[1].isSuccess} />
          ))}
      </div>
    </div>
  );
};

export default Clips;
