import React, { useMemo } from 'react';

import { getRandomColor } from 'hooks/useGetRandomColor';
import { ARTISTS, GIF, LOGIN_PAGE, RELATED_CLIPS, RELATED_GIFS, TRENDING } from 'src/constants';

import LikeSvg from '../Svgs/LikeSvg';
import LinkSvg from '../Svgs/LinkSvg';

import {
  StyledCard,
  StyledSkeleton,
  StyledImg,
  TrendingHoverBadge,
  TrendingHoverSvgs,
  ArtistsHoverImg,
  ArtistsBadge,
  ArtistHoverWrapper,
} from './Card.styled';

const Card = ({ data, type, isLoading }: any) => {
  const color = useMemo(() => {
    return getRandomColor();
  }, []);

  return (
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
            <LinkSvg />
            <LikeSvg />
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

      {type === RELATED_CLIPS && (
        <div className="trending_hover">
          <TrendingHoverSvgs>
            <LinkSvg />
            <LikeSvg />
          </TrendingHoverSvgs>
        </div>
      )}

      {type === RELATED_GIFS && (
        <div className="trending_hover">
          <TrendingHoverSvgs>
            <LinkSvg />
            <LikeSvg />
          </TrendingHoverSvgs>
          <TrendingHoverBadge href={`/gifs/${data?.id}`}>
            {data.user && <img src={data.user.avatar_url} width={35} height={35} alt="user_badge" />}
            <span>{data.username}</span>
          </TrendingHoverBadge>
        </div>
      )}
      <StyledSkeleton color={color} type={type} isLoading={isLoading} />
    </StyledCard>
  );
};

export default Card;
