import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../src/components/modules/Carousel/Carousel';
import Header from '../src/components/atoms/Header/Header';
import { css } from '@emotion/react';
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
      <Header name="trending" />
      <Header name="artists" />
      <Header name="clips" />
      <Header name="stories" />
    </>
  );
}

export default Home;
