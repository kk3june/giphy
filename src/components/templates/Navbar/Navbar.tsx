import React from 'react';

import { css } from '@emotion/react';

import SearchBarLayer from 'layer/SearchBarLayer';
import { BUTTON_LINK, CREATE_TEXT, UPLOAD_TEXT } from 'src/constants';

import Button from '../../atoms/Buttons/Button';
import Logo from '../../atoms/Logo/Logo';
import MenuLinkList from '../MenuLinkList/MenuLinkList';

import { Buttons } from './Navbar.styled';

const Navbar = () => {
  const list = [
    { name: 'reactions' },
    { name: 'entertainment' },
    { name: 'sports' },
    { name: 'stickers' },
    { name: 'artists' },
  ];

  return (
    <nav>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Logo />
        <MenuLinkList list={list} />
        {/* <Buttons>
          <Button name={UPLOAD_TEXT} type={BUTTON_LINK} />
          <Button name={CREATE_TEXT} type={BUTTON_LINK} />
        </Buttons> */}
      </div>
      <SearchBarLayer />
    </nav>
  );
};

export default Navbar;
