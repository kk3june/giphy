import React, { useMemo } from 'react';

import { css } from '@emotion/react';
import Image from 'next/image';

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

const Card = ({ data, type, isLoading, childWidth, childHeight, dynamicWidth, dynamicHeight }: any) => {
  const color = useMemo(() => {
    return getRandomColor();
  }, []);

  return (
    <StyledCard type={type}>
      {type === GIF && data?.source_post_url && (
        <a href={data?.source_post_url} aria-label={data.title}>
          <StyledImg type={type} width={childWidth || dynamicWidth} height={childHeight || dynamicHeight}>
            <Image
              src={data?.images?.original.webp ? data?.images?.original.webp : data?.images?.original.url}
              alt={data?.title}
              layout="fill"
              objectFit="cover"
            />
          </StyledImg>
        </a>
      )}

      {/* GIFS 페이지 Main */}
      {type === GIF && !data?.source_post_url && (
        <StyledImg type={type} width={childWidth} height={childHeight || dynamicHeight}>
          <Image
            src={data?.images?.original.webp ? data?.images?.original.webp : data?.images?.original.url}
            alt={data?.title}
            layout="fill"
            objectFit="cover"
          />
        </StyledImg>
      )}

      {/* INDEX페이지 Carousel, GIFS 페이지 RELATED GIFS, RELATED CLIPS */}
      {type !== GIF && type !== LOGIN_PAGE && (
        <a href={`/gifs/${data?.id}`} aria-label={data.title}>
          <StyledImg type={type} width={childWidth || dynamicWidth} height={childHeight || dynamicHeight}>
            <Image
              src={data?.images?.original.webp ? data?.images?.original.webp : data?.images?.original.url}
              alt={data?.title}
              width={childWidth || dynamicWidth}
              height={childHeight || dynamicHeight}
              objectFit="cover"
            />
          </StyledImg>
        </a>
      )}

      {type === LOGIN_PAGE && (
        <StyledImg type={type}>
          <Image src={data?.images?.original.webp} alt={data?.title} layout="fill" objectFit="cover" />
        </StyledImg>
      )}

      {type === TRENDING && (
        <div className="trending_hover">
          <TrendingHoverSvgs>
            <LinkSvg />
            <LikeSvg />
          </TrendingHoverSvgs>
          <TrendingHoverBadge href={`/gifs/${data?.id}`}>
            {data.user && (
              <Image src={data.user.avatar_url} width={35} height={35} alt="user_badge" objectFit="cover" />
            )}
          </TrendingHoverBadge>
        </div>
      )}

      {type === ARTISTS && (
        <>
          <a href={`/gifs/${data?.id}`} className="artists_hover" aria-label={data.title}>
            <ArtistHoverWrapper />
            <ArtistsHoverImg className="image">
              <Image src="/images/hover_page_image.png" width={50} height={50} alt="artists hover" />
            </ArtistsHoverImg>
          </a>
          <ArtistsBadge>
            {data.user && <Image src={data.user.avatar_url} width={40} height={40} alt="user_badge" />}
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
        <div
          className="trending_hover"
          css={css`
            position: relative;
            width: 100%;
            height: 100%;
          `}
        >
          <TrendingHoverSvgs>
            <LinkSvg />
            <LikeSvg />
          </TrendingHoverSvgs>
          <TrendingHoverBadge href={`/gifs/${data?.id}`}>
            {data.user && <Image src={data.user.avatar_url} width={35} height={35} alt="user_badge" />}
            <span>{data.username}</span>
          </TrendingHoverBadge>
        </div>
      )}
      <StyledSkeleton color={color} type={type} isLoading={isLoading} />
    </StyledCard>
  );
};

export default Card;
