import React from 'react';
import MenuLinkProps from '../../../types/menu';
import { UnOrdered, Link, Anchor } from './MenuLinkList.styled';

const MenuLinkList = ({ list }: { list: MenuLinkProps[] }) => {
  return (
    <>
      <UnOrdered>
        {list.map((data, idx) => {
          const { name } = data;
          return (
            <Link key={idx}>
              <Anchor href={name}>{name}</Anchor>
            </Link>
          );
        })}
      </UnOrdered>
    </>
  );
};

export default MenuLinkList;
