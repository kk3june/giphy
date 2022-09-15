import React, { useState, useEffect } from 'react';

import Carousel from 'components/modules/Carousel/Carousel';
import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
import GridLayer from 'layer/GridLayer';
import StoriesLayer from 'layer/StoriesLayer';
import { TRENDING, ARTISTS, CLIPS, STORIES } from 'src/constants';

import { getTrendingGifs, getArtistGifs, getTrendingClips, getStoryGifs } from './api/fetchAPI';

function Home() {
  const [trendingGifs, setTrendingGifs] = useState<any[]>();
  const [artistsGifs, setArtistsGifs] = useState<any[]>();
  const [trendingClips, setTrendingClips] = useState<any[]>();
  const [storiesGifs, setStoriesClips] = useState<any[]>();

  useEffect(() => {
    getTrendingGifs().then((res) => setTrendingGifs(res));
    getArtistGifs().then((res) => setArtistsGifs(res));
    getTrendingClips().then((res) => setTrendingClips(res));
    getStoryGifs().then((res) => setStoriesClips(res));

    console.log('rendering');
  }, []);

  const MAIN_LIST = [
    {
      name: TRENDING,
      children: <Carousel type="trending" height="140px" data={trendingGifs} />,
    },
    {
      name: ARTISTS,
      children: <Carousel type="artists" width="343px" height="249px" data={artistsGifs} />,
    },
    {
      name: CLIPS,
      children: <GridLayer data={trendingClips} type="clips" />,
    },
    {
      name: STORIES,
      children: <StoriesLayer data={storiesGifs} type="stories" />,
    },
  ];

  return (
    <div>
      {MAIN_LIST.map((item) => (
        <ListWrapper key={`${item.name}`} name={item.name} type="index">
          {item.children}
        </ListWrapper>
      ))}
    </div>
  );
}

export default Home;
