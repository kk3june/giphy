import React, { useState } from 'react';
import Logo from '../../atoms/Logo/Logo';
import { css } from '@emotion/react';
import MenuLinkList from '../MenuLinkList/MenuLinkList';
import Button from '../../atoms/Buttons/Button';
import UserButton from '../../modules/UserButton/UserButton';
import SearchBar from '../../modules/SearchBar/SearchBar';
import { Buttons } from './Navbar.styled';

const Navbar = () => {
  const [user, setUser] = useState('log in');
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
        <UserButton user={user} />
      </div>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
