import React from 'react';
import styled from '@emotion/styled';

const Button = (props: any) => {
  return (
    <a href={props.name}>
      <ButtonItem>
        <span>{props.name}</span>
      </ButtonItem>
    </a>
  );
};

const ButtonItem = styled.button`
  cursor: pointer;
  width: 100%;
  background: linear-gradient(
    263.31deg,
    rgb(153, 51, 255) -97.49%,
    rgb(97, 87, 255) 94.14%
  );
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: white;
  text-transform: capitalize;
  font-size: 16px;
`;

export default Button;
