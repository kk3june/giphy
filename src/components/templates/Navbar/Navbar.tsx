import React, { useState } from 'react';

import { css } from '@emotion/react';

import Button from '../../atoms/Buttons/Button';
import Logo from '../../atoms/Logo/Logo';
import SearchBar from '../../modules/SearchBar/SearchBar';
import UserButton from '../../modules/UserButton/UserButton';
import MenuLinkList from '../MenuLinkList/MenuLinkList';

import { Buttons } from './Navbar.styled';

const Navbar = () => {
  const [userState, setUserState] = useState('log in');
  const list = [
    { name: 'reactions' },
    { name: 'entertainment' },
    { name: 'sports' },
    { name: 'stickers' },
    { name: 'artists' },
    { name: '•' },
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
        <Buttons>
          <Button name="upload" />
          <Button name="create" />
        </Buttons>
        <UserButton userState={userState} />
      </div>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
