import React, { useState, useEffect } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import ClipCard from 'components/atoms/ClipCard/ClipCard';
import { DETAIL, UPNEXT } from 'src/constants';

import { getClipById, getUpNext } from '../api/fetchAPI';

const Clips = () => {
  const router = useRouter();
  const { query } = router;
  const params = query.clips;

  const [clipById, setClipById] = useState<any>();
  const [upNext, setUpNext] = useState<any>();

  useEffect(() => {
    if (params) {
      getClipById(params as string).then((res) => setClipById(res));
      getUpNext(params as string).then((res) => setUpNext(res));
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
        <ClipCard data={clipById?.[0]} type={DETAIL} />
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
        {upNext && upNext.map((item: any) => <ClipCard key={item.id} data={item} type={UPNEXT} />)}
      </div>
    </div>
  );
};

export default Clips;
