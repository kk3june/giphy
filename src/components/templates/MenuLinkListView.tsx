import React from 'react';
import MenuListView from '../atoms/MenuListView';
import styled from '@emotion/styled';

const VMenuLinkList = ({ list, each }: any) => {
  return (
    <UnOrdered>
      {list.map((data, idx) => {
        const { id, value } = each(data);
        return <MenuListView key={idx} value={value} />;
      })}
    </UnOrdered>
  );
};

const UnOrdered = styled.ul`
  display: flex;
  height: 35px;
  background: linear-gradient(
      to right,
      rgb(0, 204, 255),
      rgb(153, 51, 255) 31%,
      rgb(230, 70, 182) 52%,
      rgb(255, 249, 170) 77%,
      rgb(0, 255, 153),
      rgb(0, 204, 255)
    )
    0% 50% / 200% 50%;
  list-style: none;
  margin-left: 10px;
`;

export default VMenuLinkList;
