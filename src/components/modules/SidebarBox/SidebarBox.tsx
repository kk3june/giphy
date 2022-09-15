import { css } from '@emotion/react';

import UploadIcon from '../../atoms/Svgs/UploadIcon';
import UserInfo from '../../atoms/UserInfo/UserInfo';

import {
  StyledSpan,
  SnsIcon,
  SourceLink,
  SourceLinkUrl,
  LearnMoreGif,
  StyledTextBox,
  SideGif,
  SideGifIcon,
} from './SidebarBox.styled';

const SidebarBox = ({ data }: any) => {
  const userInfoProps = {
    type: 'sidebar',
    name: data?.[0].user?.name,
    userName: data?.[0].user?.username,
    avatar: data?.[0].user?.avatar,
  };

  const { user } = Array.isArray(data) && data.length > 0 && data[0];

  return (
    <div
      css={css`
        width: 15.5rem;
        margin-right: 1.875rem;
      `}
    >
      {user ? (
        <div
          css={css`
            width: inherit;
          `}
        >
          <UserInfo {...userInfoProps} />
          <StyledSpan>{user?.description}</StyledSpan>
          <StyledSpan>Follow on:</StyledSpan>

          {user?.facebook_url && (
            <SnsIcon href={user?.facebook_url}>
              <img src="/images/snsIcon/facebook.png" alt="link to facebook" />
            </SnsIcon>
          )}
          {user?.instagram_url && (
            <SnsIcon href={user?.instagram_url}>
              <img src="/images/snsIcon/instagram.png" alt="link to instagram" />
            </SnsIcon>
          )}
          {user?.twitter_url && (
            <SnsIcon href={user?.twitter_url}>
              <img src="/images/snsIcon/twitter.png" alt="link to twitter" />
            </SnsIcon>
          )}

          {user?.website_url && (
            <>
              <StyledSpan>Source</StyledSpan>
              <SourceLink href={user?.website_url} type="bold">
                <img
                  css={css`
                    width: 1rem;
                    margin-right: 0.3125rem;
                    filter: brightness(0) invert(1);
                  `}
                  src="/images/snsIcon/external_link.png"
                  alt="external link"
                />
                <SourceLinkUrl>{user?.website_display_url}</SourceLinkUrl>
              </SourceLink>
            </>
          )}
        </div>
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
          <StyledSpan>Create animated GIFs from video files and YouTube links</StyledSpan>

          <StyledTextBox>
            <a href="https://giphy.com/backdrop">Create Your own</a>
          </StyledTextBox>
        </SideGif>
      )}

      <div
        css={css`
          position: relative;
          width: 100%;
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
