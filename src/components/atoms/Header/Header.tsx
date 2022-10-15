import ArtistsSvg from 'components/atoms/Svgs/ArtistsSvg';
import ClipSvg from 'components/atoms/Svgs/ClipSvg';
import StoriesSvg from 'components/atoms/Svgs/StoriesSvg';
import TrendingSvg from 'components/atoms/Svgs/TrendingSvg';
import { TRENDING, ARTISTS, CLIPS, STORIES, INDEX } from 'src/constants';
import { HeaderProps } from 'types/types';

import { Wrapper, SvgBox, Title } from './Header.styled';

const Header = ({ name, type }: HeaderProps) => {
  return (
    <Wrapper>
      {type === INDEX && (
        <SvgBox>
          {name === TRENDING && <TrendingSvg />}
          {name === ARTISTS && <ArtistsSvg />}
          {name === CLIPS && <ClipSvg />}
          {name === STORIES && <StoriesSvg />}
        </SvgBox>
      )}

      <Title type={type}>{name}</Title>
    </Wrapper>
  );
};

export default Header;
