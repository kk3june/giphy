import React from 'react';

import { css } from '@emotion/react';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';

import Header from 'components/atoms/Header/Header';
import NormalGrid from 'components/modules/Gird/NormalGrid';
import { LARGE_HEADER } from 'src/constants';
import { RELATED_GIFS } from 'src/constants';
import wrapper from 'src/store';
import { RootState } from 'src/store';
import { fetchSearchData } from 'store/search/searchThunks';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const id = context.query.search;

  await store.dispatch(fetchSearchData(id as string));

  return {
    props: { id }, // will be passed to the page component as props
  };
});
const Search = ({ id }: any) => {
  const { searchDataIsLoading, searchData } = useSelector((state: RootState) => state.search);

  return (
    <div
      css={css`
        margin-top: 1.875rem;
      `}
    >
      <Header name={id} type={LARGE_HEADER} />
      <NormalGrid type={RELATED_GIFS} data={searchData} isLoading={searchDataIsLoading} />
    </div>
  );
};

export default Search;
