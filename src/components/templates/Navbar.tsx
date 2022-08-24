import React from 'react';
import Logo from '../atoms/Logo';
import { css } from '@emotion/react';
import MenuLinkList from './MenuLinkList';

const Navbar = () => {
  const list = [
    { value: 'reactions' },
    { value: 'entertainment' },
    { value: 'sports' },
    { value: 'stickers' },
    { value: 'artists' },
    { value: '•' },
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
