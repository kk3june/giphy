import React, { useState, useEffect } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import ClipCard from 'components/atoms/ClipCard/ClipCard';
import { DETAIL, UPNEXT } from 'src/constants';
import { fetchById } from 'store/byId/thunks';
import { fetchRelatedClips } from 'store/related/thunks';

const Clips = () => {
  const router = useRouter();
  const { query } = router;
  const params = query.clips;

  const dispatch = useDispatch();
  const { relatedClipsIsLoading, relatedClips } = useSelector((state) => state.related);
  const { fetchContentByIdIsLoading, fetchContentById } = useSelector((state) => state.byId);

  useEffect(() => {
    const getUpNextAPI = async (id) => {
      await dispatch(fetchRelatedClips(id));
    };
    const getByIdAPI = async (id) => {
      await dispatch(fetchById(id));
    };

    if (params) {
      getUpNextAPI(params);
      getByIdAPI(params);
    }
  }, [params]);

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
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
