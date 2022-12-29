import React, { useEffect } from 'react';

import { css } from '@emotion/react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

import Header from 'components/atoms/Header/Header';
import NormalGrid from 'components/modules/Gird/NormalGrid';
import { getSearchData } from 'pages/api/fetchAPI';
import { LARGE_HEADER, QUERY_KEYS } from 'src/constants';
import { RELATED_GIFS } from 'src/constants';
import wrapper from 'src/store';
import { ParamTypes } from 'types/types';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(() => async (context) => {
  const param = context.query.search;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEYS.SEARCH_DATA], () => getSearchData(param as string));

  return {
    props: { dehydratedState: dehydrate(queryClient), param },
  };
});

const Search = ({ param }: ParamTypes) => {
  const { data: searchData, isSuccess, refetch } = useQuery([QUERY_KEYS.SEARCH_DATA], () => getSearchData(param));

  useEffect(() => {
    refetch();
  }, [searchData]);

  return (
    <div
      css={css`
        margin-top: 1.875rem;
      `}
    >
      <Header name={param} type={LARGE_HEADER} />
      <NormalGrid type={RELATED_GIFS} data={searchData} isLoading={isSuccess} childWidth={248} childHeight={250} />
    </div>
  );
};

export default Search;
