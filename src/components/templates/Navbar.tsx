import React from 'react';
import Logo from '../atoms/Logo';
import { css } from '@emotion/react';
import MenuLinkList from './MenuLinkList';

const Navbar = () => {
  const list = [
    { name: 'reactions' },
    { name: 'entertainment' },
    { name: 'sports' },
    { name: 'stickers' },
    { name: 'artists' },
    { name: '•' },
  ];

  return (
    <nav
      css={css`
        display: flex;
        align-items: center;
        height: 80px;
      `}
    >
      <Logo />
      <MenuLinkList list={list} />
    </nav>
  );
};

export default Navbar;
