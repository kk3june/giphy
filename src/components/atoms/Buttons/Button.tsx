import React from 'react';

import { ButtonItem } from './Button.styled';

const Button = ({ name }: any) => {
  return (
    <a href={name}>
      <ButtonItem>
        <span>{name}</span>
      </ButtonItem>
    </a>
  );
};

export default Button;
