import React from 'react';
import styled from '@emotion/styled';

const SearchBttonView = () => {
  return (
    <SearchIconButton>
      <SearchIconSvg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        fill="white"
      >
        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
      </SearchIconSvg>
    </SearchIconButton>
  );
};

const SearchIconButton = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  border-style: none;
  border-radius: 5px;
  animation: 2s linear 0s infinite normal none running CNual;
  background-image: linear-gradient(
    45deg,
    rgb(153, 51, 255) 0%,
    rgb(255, 102, 102) 50%,
    rgb(153, 51, 255) 100%
  );
  text-align: center;
`;
const SearchIconSvg = styled.svg`
  color: white;
`;

export default SearchBttonView;
