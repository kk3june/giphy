import React from 'react';
import { useState, useEffect } from 'react';

import UserInfo from '../UserInfo/UserInfo';

import { GridItem, ClipVideo, Title } from './ClipCard.styled';

const ClipCard = ({ data }: any) => {
  return (
    <GridItem href={`clips/${data?.id}`}>
      <ClipVideo key={data?.id} autoPlay muted loop>
        <source src={data?.images.original.mp4} type="video/mp4" />
      </ClipVideo>
      <Title>{data?.title}</Title>
      <UserInfo avatar={data?.user.avatar_url} userName={data?.user.display_name} />
    </GridItem>
  );
};

export default ClipCard;
