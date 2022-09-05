import React from 'react';
import { css } from '@emotion/react';
import UserInfo from '../../atoms/UserInfo/UserInfo';
import {
  StyledSpan,
  SnsIcon,
  SourceLink,
  GifLink,
  LearnMore,
} from './SidebarBox.styled';

const SidebarBox = ({ data }: any) => {
  console.log(data);
  const userInfoProps = {
    type: 'sidebar',
    name: data?.[0].user.name,
    userName: data?.[0].user.username,
    avatar: data?.[0].user.avatar,
  };

  return (
    <div
      css={css`
        width: 263px;
        padding-right: 10px;
      `}
    >
      <UserInfo {...userInfoProps} />
      <StyledSpan>All of th {data?.name} GIFs</StyledSpan>
      <StyledSpan>Follow on:</StyledSpan>

      <SnsIcon href={data?.[0].user.facebook_url}>
        <img src="/images/snsIcon/facebook.png" />
      </SnsIcon>
      <SnsIcon href={data?.[0].user.instagram_url}>
        <img src="/images/snsIcon/instagram.png" />
      </SnsIcon>
      <SnsIcon href={data?.[0].user.twitter_url}>
        <img src="/images/snsIcon/twitter.png" />
      </SnsIcon>
      <StyledSpan>Source</StyledSpan>
      <SourceLink href={data?.[0].user.website_url} type="bold">
        <img
          css={css`
            width: 1rem;
            margin-right: 5px;
            filter: brightness(0) invert(1);
          `}
          src="/images/snsIcon/external_link.png"
        />
        {data?.[0].user.website_display_url}
      </SourceLink>

      <div
        css={css`
          position: relative;
        `}
      >
        <StyledSpan
          css={css`
            font-weight: bold;
          `}
        >
          Make Your Own Virtual Background
        </StyledSpan>
        <GifLink src="https://giphy.com/static/img/zoomies-small.gif" />
        <LearnMore>
          <a href="https://giphy.com/backdrop">Learn More</a>
        </LearnMore>
      </div>
    </div>
  );
};

export default SidebarBox;
