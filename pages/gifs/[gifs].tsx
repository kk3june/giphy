import React, { useState, useEffect } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import NormalGrid from 'components/modules/Gird/NormalGrid';
import GifSection from 'components/templates/GifsSection/GifSection';
import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
import Sidebar from 'components/templates/Sidebar/Sidebar';
import CardLayer from 'layer/CardLayer';
import CarouselLayer from 'layer/CarouselLayer';
import { CONTENT, GIF, RELATED_CLIPS, RELATED_GIFS } from 'src/constants';
import { fetchById } from 'store/byId/thunks';
import { fetchRelatedGifs, fetchRelatedClips } from 'store/related/thunks';

import { getGifById, getRelatedGifs, getRelatedClips } from '../api/fetchAPI';

const Gifs = () => {
  const router = useRouter();
  const { query } = router;
  const params = query.gifs;

  const dispatch = useDispatch();
  const { relatedGifsIsLoading, relatedGifs, relatedClipsIsLoading, relatedClips } = useSelector(
    (state) => state.related,
  );
  const { fetchContentByIdIsLoading, fetchContentById } = useSelector((state) => state.byId);

  useEffect(() => {
    const getRelatedAPI = async (id) => {
      await dispatch(fetchRelatedClips(id));
      await dispatch(fetchRelatedGifs(id));
    };

    const getByIdAPI = async (id) => {
      await dispatch(fetchById(id));
    };

    if (params) {
      getRelatedAPI(params);
      getByIdAPI(params);
    }
  }, [params]);

  const CONTENT_LIST = [
    {
      name: 'Related Clips',
      children: <CarouselLayer type={RELATED_CLIPS} data={relatedClips} isLoading={relatedClipsIsLoading} />,
    },
    {
      name: 'Related Gifs',
      children: <NormalGrid type={RELATED_GIFS} data={relatedGifs} isLoading={relatedGifsIsLoading} />,
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
      <Sidebar data={fetchContentById} />
      <div>
        <div
          css={css`
            display: flex;
          `}
        >
          <CardLayer data={fetchContentById?.[0]} type={GIF} isLoading={fetchContentByIdIsLoading} />
          <GifSection data={fetchContentById} />
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
