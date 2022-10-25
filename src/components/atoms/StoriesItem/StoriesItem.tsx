import React, { useMemo } from 'react';

import { css } from '@emotion/react';
import Image from 'next/image';

import { getRandomColor } from 'hooks/useGetRandomColor';

import {
  StyledStory,
  TitleStory,
  StoryUserBadge,
  StoryContent,
  Overlay,
  StyledSkeleton,
  StyledBottomTop,
  StyledBottomMiddle,
  StyledBottomBottom,
} from './StoriesItem.styled';

const StoriesItem = ({ data, type }: any) => {
  const color = useMemo(() => {
    return getRandomColor();
  }, []);

  return (
    <StyledStory key={data.id} type={type} href={`gifs/${data.id}`}>
      <StoryContent>
        <StoryUserBadge>
          <Image
            src={data.user ? data.user.avatar_url : 'https://media.giphy.com/avatars/news/hggHJAb9dlmy/80h.gif'}
            alt="user_badge"
            width={50}
            height={50}
          />
        </StoryUserBadge>
        <TitleStory>{data.title}</TitleStory>
        <Overlay className="hover" color={color} />
        <Image className="story_item hover" src={data.images.original.url} alt="Story Gif" layout="fill" />
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
