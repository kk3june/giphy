import React from 'react';

import styled from '@emotion/styled';

const StyeledHeader = styled.h1`
  color: #fff;
  line-height: 2;
  font-family: nexablack, sans-serif;
  font-size: 2.25rem;
  font-weight: bold;
`;

const HeadingOne = ({ title }: any) => {
  return <StyeledHeader>{title}</StyeledHeader>;
};

export default HeadingOne;
