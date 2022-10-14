import React, { useMemo } from 'react';

import { css } from '@emotion/react';

import { getRandomColor } from 'hooks/useGetRandomColor';

import { StyledStory, TitleStory, StyledSkeleton } from './StoriesItem.styled';

const StoriesItem = ({ data, type }: any) => {
  const color = useMemo(() => {
    return getRandomColor();
  }, []);

  return (
    <StyledStory key={data.id} type={type} href={`gifs/${data.id}`}>
      <div
        css={css`
          position: absolute;
          top: 1rem;
          left: 1rem;
          width: 0.9375rem;
          height: 0.9375rem;
          z-index: 2;
        `}
      >
        <img
          src={data.user ? data.user.avatar_url : 'https://media.giphy.com/avatars/news/hggHJAb9dlmy/80h.gif'}
          alt="test"
          width={50}
          height={50}
        />
      </div>
      <TitleStory>{data.title}</TitleStory>
      <img className="story_item" src={data.images.original.url} alt="Story Gif" />
      <StyledSkeleton color={color} />
    </StyledStory>
  );
};

export default StoriesItem;
