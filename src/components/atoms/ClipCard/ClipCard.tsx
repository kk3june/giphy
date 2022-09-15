import React from 'react';
import { useState, useEffect } from 'react';

import { css } from '@emotion/react';

import GifsSection from 'components/templates/GifsSection/GifSection';
import { DETAIL } from 'src/constants';

import UserInfo from '../UserInfo/UserInfo';

import { GridItem, ClipVideo, Title } from './ClipCard.styled';

const ClipCard = ({ data, type }: any) => {
  return (
    <GridItem href={`clips/${data?.id}`}>
      <ClipVideo key={data?.id} autoPlay muted loop type={type}>
        <source src={data?.images.original.mp4} type="video/mp4" />
      </ClipVideo>

      <div
        css={css`
          display: flex;
        `}
      >
        <Title type={type}>{data?.title}</Title>
        {type === DETAIL && <GifsSection type={type} />}
      </div>
      <UserInfo avatar={data?.user.avatar_url} userName={data?.user.display_name} />
    </GridItem>
  );
};

export default ClipCard;
