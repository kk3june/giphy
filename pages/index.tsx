import React, { useState, useEffect } from 'react';

import Header from 'components/atoms/Header/Header';
import Carousel from 'components/modules/Carousel/Carousel';
import GridLayer from 'layer/GridLayer';
import StoriesLayer from 'layer/StoriesLayer';

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

  return (
    <>
      <div>
        <Header name="trending" />
        <Carousel type="trending" height="140px" data={trendingGifs} />
      </div>
      <div>
        <Header name="artists" />
        <Carousel type="artists" height="249px" width="343px" data={artistsGifs} />
      </div>

      <div>
        <Header name="clips" />
        <GridLayer data={trendingClips} type="clips" />
      </div>
      <div>
        <Header name="stories" />
        <StoriesLayer data={storiesGifs} type="stories" />
      </div>
    </>
  );
}

export default Home;
