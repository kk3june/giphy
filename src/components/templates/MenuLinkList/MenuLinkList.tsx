import React from 'react';

import { MenuLinkProps } from 'src/types/types';

import { UnOrdered, LinkItem, Anchor } from './MenuLinkList.styled';

const MenuLinkList = ({ list }: { list: MenuLinkProps[] }) => {
  return (
    <UnOrdered>
      {list.map((data) => {
        const { name } = data;
        return (
          <LinkItem key={name}>
            <Anchor href={`/menu/${name}`} aria-label={`link to ${name} page`}>
              {name}
            </Anchor>
          </LinkItem>
        );
      })}
    </UnOrdered>
  );
};

export default MenuLinkList;
