import TrendingSvg from '../svgs/TrendingSvg';
import ArtistsSvg from '../svgs/ArtistsSvg';
import ClipSvg from '../svgs/ClipSvg';
import StoriesSvg from '../svgs/StoriesSvg';
import { Wrapper, SvgBox } from './Header.styled';

import { HeaderProps } from '../../../types/home';

const Header = ({ name }: HeaderProps) => {
  return (
    <Wrapper>
      <SvgBox>
        {name === 'trending' && <TrendingSvg />}
        {name === 'artists' && <ArtistsSvg />}
        {name === 'clips' && <ClipSvg />}
        {name === 'stories' && <StoriesSvg />}
      </SvgBox>
      <span>{name}</span>
    </Wrapper>
  );
};

export default Header;
