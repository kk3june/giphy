import React, { useState, useEffect } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import Carousel from 'components/modules/Carousel/Carousel';
import Stories from 'components/modules/Stories/Stories';
import GifSection from 'components/templates/GifsSection/GifSection';
import Sidebar from 'components/templates/Sidebar/Sidebar';

import { getGifById, getRelatedGifs, getRelatedClips } from '../api/fetchAPI';

const Gifs = () => {
  const router = useRouter();
  const { query } = router;
  const params = query.gifs;
  const [gifById, setGifById] = useState<any>();
  const [relatedGifs, setRelatedGifs] = useState<any>();
  const [relatedClips, setRelatedClips] = useState<any>();

  useEffect(() => {
    if (params) {
      getGifById(params as string).then((res) => setGifById(res));
      getRelatedGifs(params as string).then((res) => setRelatedGifs(res));
      getRelatedClips(params as string).then((res) => setRelatedClips(res));
    }
  }, [params]);

  // console.log(relatedClips);

  return (
    <div
      css={css`
        display: flex;
        margin-top: 3rem;
        width: 66rem;
      `}
    >
      <Sidebar data={gifById} />
      <div>
        <GifSection gifById={gifById} />
        {/* <span>Related Clips</span>
        <Carousel data={relatedClips} width="248px" height="139.5px" /> */}

        <span>Related Clips</span>
        <Carousel data={relatedGifs} width="248px" height="150px" />
      </div>
    </div>
  );
};

export default Gifs;
