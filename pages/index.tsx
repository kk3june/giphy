import React, { useEffect } from 'react';

import { GetServerSideProps } from 'next';
import { useSelector, useDispatch } from 'react-redux';

import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
import CarouselLayer from 'layer/CarouselLayer';
import GridLayer from 'layer/GridLayer';
import StoriesLayer from 'layer/StoriesLayer';
import { TRENDING, ARTISTS, CLIPS, STORIES, INDEX } from 'src/constants';
import { fetchArtistsGifs } from 'src/store/artists/thunks';
import { fetchTrendingGifs, fetchTrendingClips } from 'src/store/trending/thunks';

import wrapper from '../src/store';

// SSR
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  await store.dispatch(fetchTrendingGifs(21));
  await store.dispatch(fetchTrendingClips(3));
  await store.dispatch(fetchArtistsGifs(6));
  return {
    props: {}, // will be passed to the page component as props
  };
});

function Home() {
  const { trendingGifsIsLoading, trendingClipsIsLoading, trendingGifs, trendingClips } = useSelector(
    (state) => state.trending,
  );
  const { artistsGifsIsLoading, artistsGifs } = useSelector((state) => state.artists);

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
      children: <StoriesLayer type={STORIES} data={trendingGifs} isLoading={trendingGifsIsLoading} />,
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
