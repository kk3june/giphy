import React from 'react';
import styled from '@emotion/styled';

const VMenuList = ({ value }: any) => {
  return (
    <Link>
      <Anchor href={value}>{value}</Anchor>
    </Link>
  );
};

const Link = styled.li`
  cursor: pointer;
  border-right: 4px solid black;
  height: 100%;
`;

const Anchor = styled.a`
  display: inline-block;
  text-align: center;
  width: 100%;
  height: calc(100% - 4px);
  padding: 0 8px;
  padding-top: 8px;
  background-color: black;
  color: rgb(255, 255, 255);
  text-decoration: none;
  text-transform: capitalize;
`;

export default VMenuList;
