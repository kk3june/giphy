import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
import CarouselLayer from 'layer/CarouselLayer';
import GridLayer from 'layer/GridLayer';
import StoriesLayer from 'layer/StoriesLayer';
import { TRENDING, ARTISTS, CLIPS, STORIES, INDEX } from 'src/constants';
import { setName } from 'src/store/user/slice';

import { getTrendingGifs, getArtistGifs, getTrendingClips, getStoryGifs } from './api/fetchAPI';

function Home() {
  const [trendingGifs, setTrendingGifs] = useState<any[]>();
  const [artistsGifs, setArtistsGifs] = useState<any[]>();
  const [trendingClips, setTrendingClips] = useState<any[]>();
  const [storiesGifs, setStoriesClips] = useState<any[]>();

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);

  useEffect(() => {
    getTrendingGifs().then((res) => setTrendingGifs(res));
    getArtistGifs().then((res) => setArtistsGifs(res));
    getTrendingClips().then((res) => setTrendingClips(res));
    getStoryGifs().then((res) => setStoriesClips(res));
    dispatch(setName('kim'));

    console.log('rendering');
  }, []);

  const MAIN_LIST = [
    {
      name: TRENDING,
      children: <CarouselLayer type={TRENDING} data={trendingGifs} />,
    },
    {
      name: ARTISTS,
      children: <CarouselLayer type={ARTISTS} data={artistsGifs} />,
    },
    {
      name: CLIPS,
      children: <GridLayer data={trendingClips} type={CLIPS} />,
    },
    {
      name: STORIES,
      children: <StoriesLayer data={storiesGifs} type={STORIES} />,
    },
  ];

  return (
    <div>
      <div>{userName}</div>
      {MAIN_LIST.map((item) => (
        <ListWrapper key={`${item.name}`} name={item.name} type={INDEX}>
          {item.children}
        </ListWrapper>
      ))}
    </div>
  );
}

export default Home;
