import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Carousel from '../src/components/modules/Carousel/Carousel';
import GridLayer from '../src/layer/GridLayer';
import Header from '../src/components/atoms/Header/Header';
import {
  getTrendingGifs,
  getArtistGifs,
  getTrendingClips,
  getStoryGifs,
} from './api/fetchAPI';

function Home() {
  const [trendingGifs, setTrendingGifs] = useState<any[]>();
  const [artistsGifs, setArtistsGifs] = useState<any[]>();
  const [trendingClips, setTrendingClips] = useState<any[]>();
  const [storiesGifs, setStoriesClips] = useState<any[]>();

  useEffect(() => {
    getTrendingGifs().then(res => setTrendingGifs(res));
    getArtistGifs().then(res => setArtistsGifs(res));
    getTrendingClips().then(res => setTrendingClips(res));
    getStoryGifs().then(res => setStoriesClips(res));

    console.log('rendering');
  }, []);

  return (
    <>
      <div>
        <Header name="trending" />
        <Carousel cardType="trending" data={trendingGifs} />
      </div>
      <div>
        <Header name="artists" />
        <Carousel cardType="artists" data={artistsGifs} />
      </div>

      <div>
        <Header name="clips" />
        <GridLayer data={trendingClips} />
      </div>
      <div>
        <Header name="stories" />
        {/* <Carousel cardType="stories" data={storiesGifs} /> */}
      </div>
    </>
  );
}

export default Home;
