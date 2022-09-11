import React from 'react';

import { VAC } from 'react-vac';

import SearchButton from '../components/atoms/Buttons/SearchButton';

const SearchButtonLayer = ({ onClick }: any) => {
  const searchButtonViewProps = {
    onClick,
  };

  return (
    <>
      <SearchButton {...searchButtonViewProps} />
      {/* <VAC name="SearchButton" data={searchButtonViewProps} /> */}
    </>
  );
};

export default SearchButtonLayer;
