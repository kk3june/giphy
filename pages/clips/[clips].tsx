import React from 'react';

import { css } from '@emotion/react';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';

import ClipCard from 'components/atoms/ClipCard/ClipCard';
import { DETAIL, UPNEXT } from 'src/constants';
import { fetchById } from 'store/byId/byIdThunks';
import { RootState } from 'store/index';
import wrapper from 'store/index';
import { fetchRelatedClips } from 'store/related/relatedThunks';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const id = context.query.clips;

  await store.dispatch(fetchRelatedClips({ id }));
  await store.dispatch(fetchById(id as string));
  return {
    props: {}, // will be passed to the page component as props
  };
});

const Clips = () => {
  const { relatedClipsIsLoading, relatedClips } = useSelector((state: RootState) => state.related);
  const { fetchContentByIdIsLoading, fetchContentById } = useSelector((state: RootState) => state.byId);

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
        <ClipCard data={fetchContentById?.[0]} type={DETAIL} isLoading={fetchContentByIdIsLoading} />
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
        {relatedClips &&
          relatedClips.map((item: any) => (
            <ClipCard key={item.id} data={item} type={UPNEXT} isLoading={relatedClipsIsLoading} />
          ))}
      </div>
    </div>
  );
};

export default Clips;
