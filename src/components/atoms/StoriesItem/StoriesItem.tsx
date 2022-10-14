import React, { useMemo } from 'react';

import { css } from '@emotion/react';

import { getRandomColor } from 'hooks/useGetRandomColor';

import {
  StyledStory,
  TitleStory,
  StyledSkeleton,
  Overlay,
  StoryUserBadge,
  StyledBottomTop,
  StyledBottomMiddle,
  StyledBottomBottom,
  StoryContent,
} from './StoriesItem.styled';

const StoriesItem = ({ data, type }: any) => {
  const color = useMemo(() => {
    return getRandomColor();
  }, []);

  return (
    <StyledStory key={data.id} type={type} href={`gifs/${data.id}`}>
      <StoryContent>
        <StoryUserBadge>
          <img
            src={data.user ? data.user.avatar_url : 'https://media.giphy.com/avatars/news/hggHJAb9dlmy/80h.gif'}
            alt="user_badge"
            width={50}
            height={50}
          />
        </StoryUserBadge>
        <TitleStory>{data.title}</TitleStory>
        <Overlay className="hover" />
        <img className="story_item hover" src={data.images.original.url} alt="Story Gif" />
        <StyledSkeleton color={color} />
      </StoryContent>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <StyledBottomTop color={color} />
        <StyledBottomMiddle color={color} />
        <StyledBottomBottom color={color} />
      </div>
    </StyledStory>
  );
};

export default StoriesItem;
