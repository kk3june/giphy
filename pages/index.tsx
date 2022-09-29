import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
import CarouselLayer from 'layer/CarouselLayer';
import GridLayer from 'layer/GridLayer';
import StoriesLayer from 'layer/StoriesLayer';
import { TRENDING, ARTISTS, CLIPS, STORIES, INDEX } from 'src/constants';
import { fetchArtistsGifs } from 'src/store/artists/thunks';
import { fetchTrendingGifs, fetchTrendingClips } from 'src/store/trending/thunks';
import { AppDispatch } from 'store/index';

// import { setName } from 'src/store/user/slice';

function Home() {
  const { trendingGifsIsLoading, trendingClipsIsLoading, trendingGifs, trendingClips } = useSelector(
    (state) => state.trending,
  );
  const { artistsGifsIsLoading, artistsGifs } = useSelector((state) => state.artists);

  const dispatch = useDispatch<AppDispatch>();
  // const userName = useSelector((state) => state.user.name);

  useEffect(() => {
    // getTrendingClips().then((res) => setTrendingClips(res));
    // dispatch(setName('kim'));

    const getTrendingAPI = async () => {
      await dispatch(fetchTrendingClips(3));
      await dispatch(fetchTrendingGifs(20));
    };

    const getArtistsAPI = async () => {
      await dispatch(fetchArtistsGifs());
    };

    getTrendingAPI();
    getArtistsAPI();

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
