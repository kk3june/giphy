import TrendingSvg from '../Svgs/TrendingSvg';
import ArtistsSvg from '../Svgs/ArtistsSvg';
import ClipSvg from '../Svgs/ClipSvg';
import StoriesSvg from '../Svgs/StoriesSvg';
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
