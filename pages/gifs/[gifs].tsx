import React from 'react';

import { css } from '@emotion/react';
import { dehydrate, QueryClient, useQueries } from '@tanstack/react-query';
import { GetStaticProps, GetStaticPaths } from 'next';

import NormalGrid from 'components/modules/Gird/NormalGrid';
import GifSection from 'components/templates/GifsSection/GifSection';
import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
import Sidebar from 'components/templates/Sidebar/Sidebar';
import CardLayer from 'layer/CardLayer';
import CarouselLayer from 'layer/CarouselLayer';
import { getContentById, getRelatedClips, getRelatedGifs } from 'pages/api/fetchAPI';
import { CONTENT, GIF, QUERY_KEYS, RELATED_CLIPS, RELATED_GIFS } from 'src/constants';
import { ParamTypes } from 'types/types';

export const getStaticProps: GetStaticProps = async (context) => {
  const param = context.params?.gifs;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEYS.GETDATA_BYID], () => getContentById(param as string));
  await queryClient.prefetchQuery([QUERY_KEYS.RELATED_CLIPS], () => getRelatedClips(param as string));
  await queryClient.prefetchQuery([QUERY_KEYS.RELATED_GIFS], () => getRelatedGifs(param as string));

  return {
    props: { dehydratedState: dehydrate(queryClient), param },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

const Gifs = ({ param }: ParamTypes) => {
  const results = useQueries({
    queries: [
      { queryKey: [QUERY_KEYS.GETDATA_BYID], queryFn: () => getContentById(param) },
      { queryKey: [QUERY_KEYS.RELATED_CLIPS], queryFn: () => getRelatedClips(param) },
      { queryKey: [QUERY_KEYS.RELATED_GIFS], queryFn: () => getRelatedGifs(param) },
    ],
  });

  const CONTENT_LIST = [
    {
      name: 'Related Clips',
      children: (
        <CarouselLayer
          type={RELATED_CLIPS}
          data={results[1].data}
          isLoading={results[1].isSuccess}
          childWidth={243}
          childHeight={139.5}
        />
      ),
    },
    {
      name: 'Related Gifs',
      children: (
        <NormalGrid
          type={RELATED_GIFS}
          data={results[2].data}
          isLoading={results[2].isSuccess}
          childWidth={243}
          childHeight={200}
        />
      ),
    },
  ];

  return (
    <div
      css={css`
        display: flex;
        margin-top: 3rem;
        width: 65rem;
      `}
    >
      <Sidebar data={results[0].data} />
      <div
        css={css`
          overflow: hidden;
        `}
      >
        <div
          css={css`
            display: flex;
          `}
        >
          <CardLayer data={results[0].data} type={GIF} isLoading={results[0].isSuccess} childWidth={500} />
          <GifSection data={[results[0]]} />
        </div>

        {CONTENT_LIST.map((item) => (
          <ListWrapper key={`${item.name}`} name={item.name} type={CONTENT}>
            {item.children}
          </ListWrapper>
        ))}
      </div>
    </div>
  );
};

export default Gifs;
