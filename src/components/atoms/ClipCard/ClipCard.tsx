import React from 'react';

import { css } from '@emotion/react';

import GifsSection from 'components/templates/GifsSection/GifSection';
import { DETAIL } from 'src/constants';

import UserInfo from '../UserInfo/UserInfo';

import { GridItem, ClipAnchor, ClipVideo, Title } from './ClipCard.styled';

const ClipCard = ({ data, type, isLoading }: any) => {
  return isLoading ? (
    <div
      css={{
        fontSize: '100px',
      }}
    >
      isLoading
    </div>
  ) : (
    <GridItem>
      <ClipAnchor href={`/clips/${data?.id}`}>
        <ClipVideo key={data?.id} autoPlay muted loop type={type}>
          <source src={data?.images.original.mp4} type="video/mp4" />
        </ClipVideo>
      </ClipAnchor>

      <div
        css={css`
          display: flex;
          width: ${type !== DETAIL ? '14.5rem' : ''};
        `}
      >
        <ClipAnchor href={`/clips/${data?.id}`}>
          <Title type={type}>{data?.title}</Title>
        </ClipAnchor>
        {type === DETAIL && <GifsSection type={type} />}
      </div>
      {data?.user && (
        <ClipAnchor href={`/writer/${data?.username}`}>
          <UserInfo avatar={data?.user?.avatar_url} userName={data?.user?.display_name} />
        </ClipAnchor>
      )}
    </GridItem>
  );
};

export default ClipCard;
