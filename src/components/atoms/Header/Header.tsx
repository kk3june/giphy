import { TRENDING, ARTISTS, CLIPS, STORIES } from 'src/constants';

import { HeaderProps } from '../../../types/home';
import ArtistsSvg from '../Svgs/ArtistsSvg';
import ClipSvg from '../Svgs/ClipSvg';
import StoriesSvg from '../Svgs/StoriesSvg';
import TrendingSvg from '../Svgs/TrendingSvg';

import { Wrapper, SvgBox, Title } from './Header.styled';

const Header = ({ name, type }: HeaderProps) => {
  return (
    <Wrapper>
      {type === 'index' && (
        <SvgBox>
          {name === TRENDING && <TrendingSvg />}
          {name === ARTISTS && <ArtistsSvg />}
          {name === CLIPS && <ClipSvg />}
          {name === STORIES && <StoriesSvg />}
        </SvgBox>
      )}

      {type === 'index' ? <span>{name}</span> : <Title>{name}</Title>}
    </Wrapper>
  );
};

export default Header;
