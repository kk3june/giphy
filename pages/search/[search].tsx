import React from 'react';

import { css } from '@emotion/react';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';

import Header from 'components/atoms/Header/Header';
import NormalGrid from 'components/modules/Gird/NormalGrid';
import CarouselLayer from 'layer/CarouselLayer';
import { LARGE_HEADER } from 'src/constants';
import { RELATED_GIFS, RELATED_CLIPS } from 'src/constants';
import wrapper from 'src/store';
import { RootState } from 'src/store';
import { fetchRelatedGifs, fetchRelatedClips } from 'store/related/relatedThunks';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const id = context.query.search;
  await store.dispatch(fetchRelatedClips({ id }));
  await store.dispatch(fetchRelatedGifs({ id }));

  return {
    props: { id }, // will be passed to the page component as props
  };
});

const Search = ({ id }: any) => {
  const { relatedClipsIsLoading, relatedGifsIsLoading, relatedClips, relatedGifs } = useSelector(
    (state: RootState) => state.related,
  );

  return (
    <div
      css={css`
        background-color: 'red';
      `}
    >
      <Header name={id} type={LARGE_HEADER} />
      <CarouselLayer type={RELATED_CLIPS} data={relatedClips} isLoading={relatedClipsIsLoading} />
      <NormalGrid type={RELATED_GIFS} data={relatedGifs} isLoading={relatedGifsIsLoading} />
      <div>test1</div>
      <div>test2</div>
    </div>
  );
};

export default Search;
