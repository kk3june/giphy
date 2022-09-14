import React, { useState, useEffect } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import Carousel from 'components/modules/Carousel/Carousel';
import GifSection from 'components/templates/GifsSection/GifSection';
import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
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

  const CONTENT_LIST = [
    {
      name: 'Related Clips',
      children: <Carousel data={relatedClips} type="clips" width="248px" height="139.5px" />,
    },
    {
      name: 'Related Gifs',
      children: <Carousel data={relatedGifs} type="gifs" width="248px" />,
    },
  ];

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

        {CONTENT_LIST.map((item) => (
          <ListWrapper key={`${item.name}`} name={item.name} type="content">
            {item.children}
          </ListWrapper>
        ))}
      </div>
    </div>
  );
};

export default Gifs;
