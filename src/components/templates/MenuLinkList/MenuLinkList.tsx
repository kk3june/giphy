import React from 'react';

import { MenuLinkProps } from 'src/types/menu';

import { UnOrdered, LinkItem, Anchor } from './MenuLinkList.styled';

const MenuLinkList = ({ list }: { list: MenuLinkProps[] }) => {
  return (
    <UnOrdered>
      {list.map((data) => {
        const { name } = data;
        return (
          <LinkItem key={name}>
            <Anchor href={name}>{name}</Anchor>
          </LinkItem>
        );
      })}
    </UnOrdered>
  );
};

export default MenuLinkList;
