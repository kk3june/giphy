import React from 'react';
import styled from '@emotion/styled';
import { ButtonItem } from './Button.styled';

const Button = (props: any) => {
  return (
    <a href={props.name}>
      <ButtonItem>
        <span>{props.name}</span>
      </ButtonItem>
    </a>
  );
};

export default Button;
