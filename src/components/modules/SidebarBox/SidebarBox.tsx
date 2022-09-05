import React from 'react';

import { css } from '@emotion/react';

import UploadIcon from '../../atoms/Svgs/UploadIcon';
import UserInfo from '../../atoms/UserInfo/UserInfo';

import { StyledSpan, SnsIcon, SourceLink, LearnMoreGif, StyledTextBox, SideGif, SideGifIcon } from './SidebarBox.styled';

const SidebarBox = ({ data }: any) => {
  const userInfoProps = {
    type: 'sidebar',
    name: data?.[0].user?.name,
    userName: data?.[0].user?.username,
    avatar: data?.[0].user?.avatar,
  };

  return (
    <div
      css={css`
        width: 263px;
        padding-right: 10px;
      `}
    >
      {data?.[0].user ? (
        <>
          <UserInfo {...userInfoProps} />
          <StyledSpan>{data?.[0].user?.description}</StyledSpan>
          <StyledSpan>Follow on:</StyledSpan>

          <SnsIcon href={data?.[0].user?.facebook_url}>
            <img src="/images/snsIcon/facebook.png" alt="link to facebook" />
          </SnsIcon>
          <SnsIcon href={data?.[0].user?.instagram_url}>
            <img src="/images/snsIcon/instagram.png" alt="link to instagram" />
          </SnsIcon>
          <SnsIcon href={data?.[0].user?.twitter_url}>
            <img src="/images/snsIcon/twitter.png" alt="link to twitter" />
          </SnsIcon>
          <StyledSpan>Source</StyledSpan>
          <SourceLink href={data?.[0].user?.website_url} type="bold">
            <img
              css={css`
                width: 1rem;
                margin-right: 5px;
                filter: brightness(0) invert(1);
              `}
              src="/images/snsIcon/external_link.png"
              alt="external link"
            />
            {data?.[0].user?.website_display_url}
          </SourceLink>
        </>
      ) : (
        <SideGif>
        <StyledSpan
          css={css`
            font-weight: bold;
          `}
        >
          Create A Gif
        </StyledSpan>
        <SideGifIcon>
          <UploadIcon />
          Gif Maker
        </SideGifIcon>
        <StyledSpan>
          Create animated GIFs from video files and YouTube links
        </StyledSpan>

        <StyledTextBox>
          <a href="https://giphy.com/backdrop">Create Your own</a>
        </StyledTextBox>
      </SideGif>
      )}

      

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
        <LearnMoreGif src="https://giphy.com/static/img/zoomies-small.gif" />
        <StyledTextBox learnmore>
          <a href="https://giphy.com/backdrop">Learn More</a>
        </StyledTextBox>
      </div>
    </div>
  );
};

export default SidebarBox;
