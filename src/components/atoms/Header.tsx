import React from 'react';
import styled from '@emotion/styled';
import TrendingSvg from './svgs/TrendingSvg';
import ArtistsSvg from './svgs/ArtistsSvg';
import ClipSvg from './svgs/ClipSvg';
import StoriesSvg from './svgs/StoriesSvg';

import { HeaderProps } from '../../types/home';

const Header = ({ name }: HeaderProps) => {
  return (
    <Wrapper>
      <TrendingSvg />
      <span>{name}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: capitalize;
`;

export default Header;
