import React, { useEffect } from 'react';

import styled from '@emotion/styled';
import { useInfiniteQuery, useQueries } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
import CarouselLayer from 'layer/CarouselLayer';
import GridLayer from 'layer/GridLayer';
import StoriesLayer from 'layer/StoriesLayer';
import { TRENDING, ARTISTS, CLIPS, STORIES, INDEX, QUERY_KEYS } from 'src/constants';

import { getArtistGifs, getStoryGifs, getTrendingClips, getTrendingGifs } from './api/fetchAPI';

const StyledSentinel = styled.div`
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

  const { data, fetchNextPage, hasNextPage, isSuccess } = useInfiniteQuery(
    [QUERY_KEYS.STORIES_GIFS],
    ({ pageParam = 23 }) => getStoryGifs({ limit: 13, offset: pageParam }),
    {
      getNextPageParam: ({ pagination }) => {
        if (pagination.offset === 0) {
          return 23;
        }

        if (pagination.offset === pagination.total_count) {
          return undefined;
        }
        return pagination.offset + 13;
      },
      staleTime: 60 * 1000, // 1 minute
    },
  );

  const [ref, inView] = useInView();
  useEffect(() => {
    if (hasNextPage && inView) fetchNextPage();
  }, [results]);

  const MAIN_LIST = [
    {
      name: TRENDING,
      children: (
        <CarouselLayer type={TRENDING} data={results[0].data} isLoading={results[0].isSuccess} childHeight={140} />
      ),
    },
    {
      name: ARTISTS,
      children: (
        <CarouselLayer
          type={ARTISTS}
          data={results[1].data}
          isLoading={results[1].isSuccess}
          childWidth={343}
          childHeight={269}
        />
      ),
    },
    {
      name: CLIPS,
      children: <GridLayer type={CLIPS} data={results[2].data} isLoading={results[2].isSuccess} />,
    },
    {
      name: STORIES,
      children: (
        <div>
          {data &&
            data.pages.map((item) => (
              <StoriesLayer key={item.pagination.offset} ype={STORIES} data={item.gifs} isLoading={isSuccess} />
            ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      {MAIN_LIST.map((item) => (
        <ListWrapper key={`${item.name}`} name={item.name} type={INDEX}>
          {item.children}
        </ListWrapper>
      ))}
      <StyledSentinel ref={ref} />
    </div>
  );
}

export default Home;
