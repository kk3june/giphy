import React, { RefObject, useEffect } from 'react';

import styled from '@emotion/styled';
import { dehydrate, QueryClient, useQueries } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
import CarouselLayer from 'layer/CarouselLayer';
import GridLayer from 'layer/GridLayer';
import StoriesLayer from 'layer/StoriesLayer';
import { TRENDING, ARTISTS, CLIPS, STORIES, INDEX, QUERY_KEYS } from 'src/constants';

import wrapper from '../src/store';

import { getArtistGifs, getTrendingClips, getTrendingGifs } from './api/fetchAPI';

// SSR
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEYS.TRENDING_GIFS], getTrendingGifs);
  await queryClient.prefetchQuery([QUERY_KEYS.TRENDING_GIFS], getTrendingClips);
  await queryClient.prefetchQuery([QUERY_KEYS.TRENDING_GIFS], getArtistGifs);

  return {
    props: { dehydratedState: dehydrate(queryClient) }, // will be passed to the page component as props
  };
});

const StyledSentinel = styled.div<{ ref: RefObject<HTMLDivElement> }>`
  height: 1px;
`;

function Home() {
  const results = useQueries({
    queries: [
      { queryKey: [QUERY_KEYS.TRENDING_GIFS], queryFn: getTrendingGifs },
      { queryKey: [QUERY_KEYS.ARTISTS_GIFS], queryFn: getArtistGifs },
      { queryKey: [QUERY_KEYS.TRENDING_CLIPS], queryFn: getTrendingClips },
    ],
  });

  useEffect(() => {
    console.log('rendering');
  }, [results]);

  const MAIN_LIST = [
    {
      name: TRENDING,
      children: <CarouselLayer type={TRENDING} data={results[0].data} isLoading={results[0].isSuccess} />,
    },
    {
      name: ARTISTS,
      children: <CarouselLayer type={ARTISTS} data={results[1].data} isLoading={results[1].isSuccess} />,
    },
    {
      name: CLIPS,
      children: <GridLayer type={CLIPS} data={results[2].data} isLoading={results[2].isSuccess} />,
    },
    {
      name: STORIES,
      children: (
        <>
          <div>test</div>
          {/* <StoriesLayer type={STORIES} data={trendingGifs} isLoading={trendingGifsIsLoading} /> */}
          {/* <StyledSentinel ref={ref} /> */}
        </>
      ),
    },
  ];

  return (
    <div>
      {/* <div>{userName}</div> */}
      {MAIN_LIST.map((item) => (
        <ListWrapper key={`${item.name}`} name={item.name} type={INDEX}>
          {item.children}
        </ListWrapper>
      ))}
    </div>
  );
}

export default Home;
