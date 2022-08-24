import React from 'react';
import VMenuLinkList from './MenuLinkListView';
import { VACList } from 'react-vac';

const MenuLinkList = ({ list }: any) => {
  const vMenuLinkListProps = {
    list,
    each: (data, idx) => ({
      ...data,
    }),
  };

  return (
    <>
      <VMenuLinkList {...vMenuLinkListProps} />
      {/* <VACList name="VMenuLinkList" data={vMenuLinkListProps} /> */}
    </>
  );
};

export default MenuLinkList;
