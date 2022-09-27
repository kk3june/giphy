import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
import CarouselLayer from 'layer/CarouselLayer';
import GridLayer from 'layer/GridLayer';
import StoriesLayer from 'layer/StoriesLayer';
import { TRENDING, ARTISTS, CLIPS, STORIES, INDEX } from 'src/constants';
import { fetchArtistsGifs } from 'src/store/artists/thunks';
import { fetchTrendingGifs } from 'src/store/trending/thunks';
// import { setName } from 'src/store/user/slice';

import { getTrendingClips } from './api/fetchAPI';

function Home() {
  const [trendingClips, setTrendingClips] = useState<any[]>();
  const { trendingGifsIsLoading, trendingGifs } = useSelector((state) => state.trending);
  const { artistsGifsIsLoading, artistsGifs } = useSelector((state) => state.artists);

  const dispatch = useDispatch();
  // const userName = useSelector((state) => state.user.name);

  useEffect(() => {
    getTrendingClips().then((res) => setTrendingClips(res));
    // dispatch(setName('kim'));

    const getTrendingAPI = async () => {
      await dispatch(fetchTrendingGifs({ limit: 10 }));
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
      children: <GridLayer data={trendingClips} type={CLIPS} />,
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
