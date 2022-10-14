import React from 'react';

import { ARTISTS, GIF, LOGIN_PAGE, TRENDING } from 'src/constants';

import LikeSvg from '../Svgs/LikeSvg';
import LinkSvg from '../Svgs/LinkSvg';

import {
  StyledCard,
  StyledImg,
  TrendingHoverBadge,
  TrendingHoverSvgs,
  ArtistsHoverImg,
  ArtistsBadge,
  ArtistHoverWrapper,
} from './Card.styled';

const Card = ({ data, type, isLoading }: any) => {
  if (type === ARTISTS) {
    console.log(type, data);
  }
  return isLoading ? (
    <div
      css={{
        fontSize: '100px',
      }}
    >
      isLoading
    </div>
  ) : (
    <StyledCard type={type}>
      {type === GIF && data?.source_post_url && (
        <a href={data?.source_post_url}>
          <StyledImg src={data?.images?.original.url} type={type} />
        </a>
      )}
      {type === GIF && !data?.source_post_url && <StyledImg src={data?.images?.original.url} type={type} />}
      {type !== GIF && type !== LOGIN_PAGE && (
        <a href={`/gifs/${data?.id}`}>
          <StyledImg src={data?.images?.original.url} type={type} />
        </a>
      )}
      {type === LOGIN_PAGE && <StyledImg src={data?.images?.original.url} type={type} />}

      {type === TRENDING && (
        <div className="trending_hover">
          <TrendingHoverSvgs>
            <LikeSvg />
            <LinkSvg />
          </TrendingHoverSvgs>
          <TrendingHoverBadge href={`/gifs/${data?.id}`}>
            {data.user && <img src={data.user.avatar_url} width={35} height={35} alt="user_badge" />}
          </TrendingHoverBadge>
        </div>
      )}

      {type === ARTISTS && (
        <>
          <a href={`/gifs/${data?.id}`} className="artists_hover">
            <ArtistHoverWrapper />
            <ArtistsHoverImg className="image">
              <img src="/images/hover_page_image.png" width={50} height={50} alt="artists hover" />
            </ArtistsHoverImg>
          </a>
          <ArtistsBadge>
            {data.user && <img src={data.user.avatar_url} width={40} height={40} alt="user_badge" />}
            <div>
              <span>{data.username}</span>
              <span>{data.username && '• Available for work'}</span>
            </div>
          </ArtistsBadge>
        </>
      )}
    </StyledCard>
  );
};

export default Card;
