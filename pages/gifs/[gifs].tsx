import React from 'react';

import { css } from '@emotion/react';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';

import NormalGrid from 'components/modules/Gird/NormalGrid';
import GifSection from 'components/templates/GifsSection/GifSection';
import ListWrapper from 'components/templates/ListWrapper/ListWrapper';
import Sidebar from 'components/templates/Sidebar/Sidebar';
import CardLayer from 'layer/CardLayer';
import CarouselLayer from 'layer/CarouselLayer';
import { CONTENT, GIF, RELATED_CLIPS, RELATED_GIFS } from 'src/constants';
import wrapper from 'src/store';
import { fetchById } from 'store/byId/thunks';
import { fetchRelatedGifs, fetchRelatedClips } from 'store/related/thunks';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const id = context.query.gifs;

  await store.dispatch(fetchRelatedClips(id));
  await store.dispatch(fetchRelatedGifs(id));
  await store.dispatch(fetchById(id as string));
  return {
    props: {}, // will be passed to the page component as props
  };
});

const Gifs = () => {
  const { relatedGifsIsLoading, relatedGifs, relatedClipsIsLoading, relatedClips } = useSelector(
    (state) => state.related,
  );
  const { fetchContentByIdIsLoading, fetchContentById } = useSelector((state) => state.byId);

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
      <div
        css={css`
          overflow: hidden;
        `}
      >
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
