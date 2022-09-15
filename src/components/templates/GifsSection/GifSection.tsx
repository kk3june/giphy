import EllipsisVertical from 'components/atoms/Svgs/EllipsisVerticalSvg';
import EmbedSvg from 'components/atoms/Svgs/EmbedSvg';
import LikeSvg from 'components/atoms/Svgs/LikeSvg';
import ShareSvg from 'components/atoms/Svgs/ShareSvg';
import CardLayer from 'layer/CardLayer';

import { StyledSection, GifTitle, GifButton, GifButtonName, GifButtonWrapper } from './GifSection.styled';

const GifsSection = ({ gifById, type }: any) => {
  return (
    <StyledSection type={type}>
      <div>
        <GifTitle>{gifById?.[0].title}</GifTitle>
        <CardLayer data={gifById} type="gif" width="31.25rem" />
      </div>

      <GifButtonWrapper type={type}>
        <GifButton type={type}>
          <LikeSvg />
          <GifButtonName>Favorite</GifButtonName>
        </GifButton>

        <GifButton type={type}>
          <ShareSvg />
          <GifButtonName>Share</GifButtonName>
        </GifButton>

        {type !== 'detail' && (
          <GifButton type={type}>
            <EmbedSvg />
            <GifButtonName>Embed</GifButtonName>
          </GifButton>
        )}
        {type === 'detail' && (
          <GifButton type={type}>
            <EllipsisVertical />
          </GifButton>
        )}
      </GifButtonWrapper>
    </StyledSection>
  );
};

export default GifsSection;
