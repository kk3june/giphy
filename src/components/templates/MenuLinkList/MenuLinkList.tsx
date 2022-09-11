import React from 'react';

import MenuLinkProps from '../../../types/menu';

import { UnOrdered, LinkItem, Anchor } from './MenuLinkList.styled';

const MenuLinkList = ({ list }: { list: MenuLinkProps[] }) => {
  return (
    <UnOrdered>
      {list.map((data, idx) => {
        const { name } = data;
        return (
          <LinkItem key={idx}>
            <Anchor href={name}>{name}</Anchor>
          </LinkItem>
        );
      })}
    </UnOrdered>
  );
};

export default MenuLinkList;
