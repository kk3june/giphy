import React from 'react';

import { css } from '@emotion/react';
import { useQueries } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

import ClipCard from 'components/atoms/ClipCard/ClipCard';
import { getContentById, getRelatedClips } from 'pages/api/fetchAPI';
import { DETAIL, QUERY_KEYS, UPNEXT } from 'src/constants';
import wrapper from 'store/index';
import { ParamTypes } from 'types/types';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(() => async (context) => {
  const param = context.query.clips;

  return {
    props: { param },
  };
});

const Clips = ({ param }: ParamTypes) => {
  const results = useQueries({
    queries: [
      { queryKey: [QUERY_KEYS.GETDATA_BYID], queryFn: () => getContentById(param) },
      { queryKey: [QUERY_KEYS.RELATED_CLIPS], queryFn: () => getRelatedClips(param) },
    ],
  });

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        margin-top: 1rem;
      `}
    >
      <div>
        <ClipCard data={results[0].data} type={DETAIL} isLoading={results[0].isSuccess} />
      </div>
      <div
        css={css`
          width: min-content;
        `}
      >
        <h2
          css={css`
            margin-bottom: 1rem;
            font-weight: bold;
          `}
        >
          Up Next
        </h2>
        {results[1].data &&
          results[1].data.map((item: any) => (
            <ClipCard key={item.id} data={item} type={UPNEXT} isLoading={results[1].isSuccess} />
          ))}
      </div>
    </div>
  );
};

export default Clips;
