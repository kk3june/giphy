import { css } from '@emotion/react';
import Image from 'next/image';

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
    type: data?.user?.type,
    name: data?.user?.name,
    userName: data?.user?.username,
    avatar: data?.user?.avatar_url,
  };

  // const { user } = Array.isArray(data) && data.length > 0 && data;
  // const { user } = data;

  const showFollow =
    data?.user?.facebook_url || data?.user?.instagram_url || data?.user?.twitter_url || data?.user?.tumblr_url;

  return (
    <div
      css={css`
        width: 15.5rem;
        margin-right: 1.875rem;
      `}
    >
      {data?.user ? (
        <div
          css={css`
            width: inherit;
          `}
        >
          <UserInfo {...userInfoProps} />
          <StyledSpan>{data?.user?.description}</StyledSpan>
          {showFollow && <StyledSpan>Follow on:</StyledSpan>}

          {data?.user?.facebook_url && (
            <SnsIcon href={data?.user?.facebook_url}>
              <Image src="/images/snsIcon/facebook.png" alt="link to facebook" width={20} height={20} />
            </SnsIcon>
          )}
          {data?.user?.instagram_url && (
            <SnsIcon href={data?.user?.instagram_url}>
              <Image src="/images/snsIcon/instagram.png" alt="link to instagram" width={20} height={20} />
            </SnsIcon>
          )}
          {data?.user?.twitter_url && (
            <SnsIcon href={data?.user?.twitter_url}>
              <Image src="/images/snsIcon/twitter.png" alt="link to twitter" width={20} height={20} />
            </SnsIcon>
          )}
          {data?.user?.tumblr_url && (
            <SnsIcon href={data?.user?.tumblr_url}>
              <Image src="/images/snsIcon/tumblr.png" alt="link to tumblr" width={20} height={20} />
            </SnsIcon>
          )}

          {data?.user?.website_url && (
            <>
              <StyledSpan>Source</StyledSpan>
              <SourceLink href={data?.user?.website_url} type="bold">
                <Image
                  css={css`
                    margin-right: 0.3125rem;
                    filter: brightness(0) invert(1);
                  `}
                  src="/images/snsIcon/external_link.png"
                  alt="external link"
                  width={16}
                  height={16}
                />
                <SourceLinkUrl>{data?.user?.website_display_url}</SourceLinkUrl>
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
        <LearnMoreGif>
          <Image
            src="https://giphy.com/static/img/zoomies-small.gif"
            layout="fill"
            alt="learn more gif"
            loading="lazy"
          />
        </LearnMoreGif>
        <StyledTextBox learnmore>
          <a href="https://giphy.com/backdrop" aria-label="learn more">
            Learn More
          </a>
        </StyledTextBox>
      </div>
    </div>
  );
};

export default SidebarBox;
