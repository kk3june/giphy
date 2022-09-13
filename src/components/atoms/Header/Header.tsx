import { TRENDING, ARTISTS, CLIPS, STORIES } from 'src/constants';

import { HeaderProps } from '../../../types/home';
import ArtistsSvg from '../Svgs/ArtistsSvg';
import ClipSvg from '../Svgs/ClipSvg';
import StoriesSvg from '../Svgs/StoriesSvg';
import TrendingSvg from '../Svgs/TrendingSvg';

import { Wrapper, SvgBox } from './Header.styled';

const Header = ({ name }: HeaderProps) => {
  return (
    <Wrapper>
      <SvgBox>
        {name === TRENDING && <TrendingSvg />}
        {name === ARTISTS && <ArtistsSvg />}
        {name === CLIPS && <ClipSvg />}
        {name === STORIES && <StoriesSvg />}
      </SvgBox>
      <span>{name}</span>
    </Wrapper>
  );
};

export default Header;
