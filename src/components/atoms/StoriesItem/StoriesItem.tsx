import React from 'react';

import { StyledStory, TitleStory } from './StoriesItem.styled';

const StoriesItem = ({ data, type }: any) => {
  return (
    <StyledStory key={data.id} type={type} href={`gifs/${data.id}`}>
      <TitleStory>{data.title}</TitleStory>
      <img src={data.images.original.url} alt="Story Gif" />
    </StyledStory>
  );
};

export default StoriesItem;
