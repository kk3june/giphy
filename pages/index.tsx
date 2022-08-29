import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../src/components/modules/Carousel';
import Header from '../src/components/atoms/Header';
import { css } from '@emotion/react';
import fetchContent from './api/fetchContent';

function Home() {
  const [gifs, setGifs] = useState<any[]>();

  useEffect(() => {
    fetchContent('gifs').then(res => setGifs(res.data));

    console.log('rendering');
  }, []);

  return (
    <>
      <Header name="trending" />
      <div
        css={css`
          display: flex;
          width: 100%;
          height: 140px;
          overflow: hidden;
        `}
      >
        {gifs &&
          gifs.map((gif, idx) => (
            <Carousel key={idx} data={gif.images.original.url} />
          ))}
      </div>
    </>
  );
}

export default Home;
