import React, { RefObject, useCallback, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
import { useAppDispatch } from 'hooks/useDispatch';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import CarouselLayer from 'layer/CarouselLayer';
import GridLayer from 'layer/GridLayer';
import StoriesLayer from 'layer/StoriesLayer';
import { TRENDING, ARTISTS, CLIPS, STORIES, INDEX } from 'src/constants';
import { RootState } from 'src/store';
import wrapper from 'src/store';
import { fetchArtistsGifs } from 'store/artists/artistsThunks';
import { fetchTrendingGifs, fetchTrendingClips } from 'store/trending/trendingThunks';

// SSR
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  await store.dispatch(fetchTrendingGifs({ limit: 21, offset: 0 }));
  await store.dispatch(fetchTrendingClips(3));
  await store.dispatch(fetchArtistsGifs(6));

  return {
    props: {}, // will be passed to the page component as props
  };
});

const StyledSentinel = styled.div<{ ref: RefObject<HTMLDivElement> }>`
  height: 1px;
`;

function Home() {
  const { trendingGifsIsLoading, trendingClipsIsLoading, trendingGifs, trendingClips } = useSelector(
    (state: RootState) => state.trending,
  );
  const { artistsGifsIsLoading, artistsGifs } = useSelector((state: RootState) => state.artists);
  const [trendingGifsOffset, setTrendingGifsOffset] = useState<number>(22);

  const dispatch = useAppDispatch();

  const checkIntersect = useCallback(
    ([entry]: any, observer: any) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        if (!trendingGifsIsLoading && trendingGifsOffset < 200) {
          dispatch(fetchTrendingGifs({ limit: 8, offset: trendingGifsOffset }));
          // eslint-disable-next-line no-return-assign
          setTrendingGifsOffset((c) => (c += 8));
        }
      }
    },
    [dispatch, trendingGifsIsLoading, trendingGifsOffset],
  );

  const { ref } = useInfiniteScroll({ checkIntersect });

  useEffect(() => {
    console.log('rendering');
  }, []);

  const MAIN_LIST = [
    {
      name: TRENDING,
      children: <CarouselLayer type={TRENDING} data={trendingGifs} isLoading={trendingGifsIsLoading} />,
    },
    {
      name: ARTISTS,
      children: <CarouselLayer type={ARTISTS} data={artistsGifs} isLoading={artistsGifsIsLoading} />,
    },
    {
      name: CLIPS,
      children: <GridLayer type={CLIPS} data={trendingClips} isLoading={trendingClipsIsLoading} />,
    },
    {
      name: STORIES,
      children: (
        <>
          <StoriesLayer type={STORIES} data={trendingGifs} isLoading={trendingGifsIsLoading} />
          <StyledSentinel ref={ref} />
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
