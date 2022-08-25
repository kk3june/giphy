import React, { useState } from 'react';
import Logo from '../atoms/Logo';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MenuLinkList from './MenuLinkList';
import Button from '../atoms/Button';
import UserButton from '../modules/UserButton';

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
    <nav
      css={css`
        display: flex;
        align-items: center;
        height: 80px;
      `}
    >
      <Logo />
      <MenuLinkList list={list} />
      <Buttons>
        <Button name="upload" />
        <Button name="create" />
      </Buttons>
      <UserButton user={user} />
    </nav>
  );
};

const Buttons = styled.div`
  display: flex;
  margin-left: 14px;
  a {
    margin-right: 5px;
  }
`;
export default Navbar;
