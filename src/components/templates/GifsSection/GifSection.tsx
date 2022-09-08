import { css } from '@emotion/react';

import EmbedSvg from 'components/atoms/Svgs/EmbedSvg';
import LikeSvg from 'components/atoms/Svgs/LikeSvg';
import ShareSvg from 'components/atoms/Svgs/ShareSvg';
import CardLayer from 'layer/CardLayer';

import { StyledSection, GifTitle, GifButton, GifButtonName, GifButtonWrapper } from './GifSection.styled';

const GifsSection = ({ gifById }: any) => {
  return (
    <StyledSection>
      <div>
        <GifTitle>{gifById?.[0].title}</GifTitle>
        <CardLayer data={gifById} width="500px" />
      </div>

      <GifButtonWrapper>
        <GifButton>
          <LikeSvg />
          <GifButtonName>Favorite</GifButtonName>
        </GifButton>

        <GifButton>
          <ShareSvg />
          <GifButtonName>Share</GifButtonName>
        </GifButton>

        <GifButton>
          <EmbedSvg />
          <GifButtonName>Embed</GifButtonName>
        </GifButton>
      </GifButtonWrapper>
    </StyledSection>
  );
};

export default GifsSection;
