import EllipsisVertical from 'components/atoms/Svgs/EllipsisVerticalSvg';
import EmbedSvg from 'components/atoms/Svgs/EmbedSvg';
import LikeSvg from 'components/atoms/Svgs/LikeSvg';
import ShareSvg from 'components/atoms/Svgs/ShareSvg';
import { DETAIL } from 'src/constants';

import { GifButton, GifButtonName, GifButtonWrapper } from './GifSection.styled';

const GifsSection = ({ data, type }: any) => {
  return (
    <GifButtonWrapper type={type}>
      <GifButton type={type}>
        <LikeSvg size="xl" />
        <GifButtonName>Favorite</GifButtonName>
      </GifButton>

      <GifButton type={type}>
        <ShareSvg />
        <GifButtonName>Share</GifButtonName>
      </GifButton>

      {type !== DETAIL && (
        <GifButton type={type}>
          <EmbedSvg />
          <GifButtonName>Embed</GifButtonName>
        </GifButton>
      )}
      {type === DETAIL && (
        <GifButton type={type}>
          <EllipsisVertical />
        </GifButton>
      )}
    </GifButtonWrapper>
  );
};

export default GifsSection;
