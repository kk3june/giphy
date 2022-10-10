import React, { useMemo } from 'react';

import { getRandomColor } from 'hooks/useGetRandomColor';

import { StyledStory, TitleStory, StyledSkeleton } from './StoriesItem.styled';

const StoriesItem = ({ data, type }: any) => {
  const color = useMemo(() => {
    return getRandomColor();
  }, []);

  return (
    <StyledStory key={data.id} type={type} href={`gifs/${data.id}`}>
      <TitleStory>{data.title}</TitleStory>
      <img src={data.images.original.url} alt="Story Gif" />
      <StyledSkeleton color={color} />
    </StyledStory>
  );
};

export default StoriesItem;
