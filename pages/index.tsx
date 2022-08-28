import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../src/components/modules/Carousel';
import Header from '../src/components/atoms/Header';
import { css } from '@emotion/react';
import Head from 'next/head';

function Home() {
  const [trendingList, setTrendingList] = useState<any[]>();

  const getTrending = () => {
    axios({
      method: 'get',
      url: 'https://api.giphy.com/v1/gifs/trending?api_key=RqsM2YqZIBX1z7mAkpHMkyhGQpaCvEiG&limit=25&rating=g',
    }).then(res => {
      setTrendingList(res.data.data);
    });
  };

  useEffect(() => {
    getTrending();
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
        {trendingList &&
          trendingList.map((trending, idx) => (
            <Carousel key={idx} data={trending.images.original.url} />
          ))}
      </div>
    </>
  );
}

export default Home;
