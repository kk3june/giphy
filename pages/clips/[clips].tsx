import React, { useState, useEffect } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import ClipCard from 'components/atoms/ClipCard/ClipCard';
import GifsSection from 'components/templates/GifsSection/GifSection';

import { getClipById } from '../api/fetchAPI';

const Clips = () => {
  const router = useRouter();
  const { query } = router;
  const params = query.clips;

  const [clipById, setClipById] = useState<any>();

  useEffect(() => {
    if (params) {
      getClipById(params as string).then((res) => setClipById(res));
    }
  }, [params]);

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        justify-content: space-between;
      `}
    >
      <div>
        <ClipCard data={clipById?.[0]} type="detail" />
      </div>
      <div
        css={css`
          width: min-content;
        `}
      >
        Up Next
        <ClipCard data={clipById?.[0]} type="normal" />
        <ClipCard data={clipById?.[0]} type="normal" />
        <ClipCard data={clipById?.[0]} type="normal" />
        <ClipCard data={clipById?.[0]} type="normal" />
      </div>
    </div>
  );
};

export default Clips;
