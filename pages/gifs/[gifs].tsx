import React, { useState, useEffect } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import NormalGrid from 'components/modules/Gird/NormalGrid';
import GifSection from 'components/templates/GifsSection/GifSection';
import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
import Sidebar from 'components/templates/Sidebar/Sidebar';
import CardLayer from 'layer/CardLayer';
import CarouselLayer from 'layer/CarouselLayer';
import { CONTENT, GIF, RELATED_CLIPS, RELATED_GIFS } from 'src/constants';

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
      children: <CarouselLayer data={relatedClips} type={RELATED_CLIPS} />,
    },
    {
      name: 'Related Gifs',
      children: <NormalGrid data={relatedGifs} type={RELATED_GIFS} />,
    },
  ];

  return (
    <div
      css={css`
        display: flex;
        margin-top: 3rem;
        width: 65rem;
      `}
    >
      <Sidebar data={gifById} />
      <div>
        <div
          css={css`
            display: flex;
          `}
        >
          <CardLayer data={gifById?.[0]} type={GIF} />
          <GifSection gifById={gifById} />
        </div>

        {CONTENT_LIST.map((item) => (
          <ListWrapper key={`${item.name}`} name={item.name} type={CONTENT}>
            {item.children}
          </ListWrapper>
        ))}
      </div>
    </div>
  );
};

export default Gifs;
