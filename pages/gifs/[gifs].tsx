import React, { useState, useEffect } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import GifsSection from 'components/templates/GifsSection/GifsSection';
import Sidebar from 'components/templates/Sidebar/Sidebar';

import { getGifById, getRelatedGifs, getRelatedClips } from '../api/fetchAPI';

const Gifs = () => {
  const router = useRouter();
  const {query} = router;
  const params = query.gifs;
  const [gifById, setGifById] = useState<any>();
  const [relatedGifs, setRelatedGifs] = useState<any>();
  const [relatedClips, setRelatedClips] = useState<any>();

  useEffect(() => {
    if (params) {
      getGifById(params as string).then(res => setGifById(res));
      getRelatedGifs(params as string).then(res => setRelatedGifs(res));
      getRelatedClips(params as string).then(res => setRelatedClips(res));
    }
  }, [params]);

  return (
    <div
      css={css`
        display: flex;
        margin-top: 3rem;
        width: 66rem;
      `}
    >
      <Sidebar data={gifById} />
      <GifsSection data={gifById} />
    </div>
  );
};

export default Gifs;
