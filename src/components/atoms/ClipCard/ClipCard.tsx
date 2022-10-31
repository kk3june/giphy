import React, { useMemo } from 'react';

import { css } from '@emotion/react';

import GifsSection from 'components/templates/GifsSection/GifSection';
import { getRandomColor } from 'hooks/useGetRandomColor';
import { CLIPS, DETAIL, UPNEXT } from 'src/constants';

import LikeSvg from '../Svgs/LikeSvg';
import LinkSvg from '../Svgs/LinkSvg';
import UserInfo from '../UserInfo/UserInfo';

import { GridItem, ClipAnchor, ClipVideo, Title, ClipsHoverSvg, StyledSkeleton } from './ClipCard.styled';

const ClipCard = ({ data, type, isLoading }: any) => {
  const color = useMemo(() => {
    return getRandomColor();
  }, []);
  return (
    <GridItem>
      <ClipAnchor href={`/clips/${data?.id}`} className="video" aria-label={data?.title}>
        <ClipVideo key={data?.id} autoPlay muted loop type={type}>
          <source src={data?.images.original.mp4} type="video/mp4" />
        </ClipVideo>
        <StyledSkeleton color={color} isLoading={isLoading} type={type} />
      </ClipAnchor>

      <div
        css={css`
          display: flex;
          width: ${type !== DETAIL ? '14.5rem' : ''};
        `}
      >
        <ClipAnchor href={`/clips/${data?.id}`} aria-label={data?.title}>
          <Title type={type}>{data?.title}</Title>
        </ClipAnchor>
        {type === DETAIL && <GifsSection type={type} />}
      </div>
      {data?.user && (
        <ClipAnchor href={`/writer/${data?.username}`} aria-label={data?.title}>
          <UserInfo avatar={data?.user?.avatar_url} userName={data?.user?.display_name} type="upNext" />
        </ClipAnchor>
      )}
      {type === DETAIL && (
        <div
          css={css`
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100px;
            z-index: -1;
            background-color: black;
          `}
        />
      )}

      {type === CLIPS && (
        <ClipsHoverSvg className="clips_hover">
          <LinkSvg />
          <LikeSvg />
        </ClipsHoverSvg>
      )}
      {type === UPNEXT && (
        <ClipsHoverSvg className="clips_hover">
          <LinkSvg />
          <LikeSvg />
        </ClipsHoverSvg>
      )}
    </GridItem>
  );
};

export default ClipCard;
