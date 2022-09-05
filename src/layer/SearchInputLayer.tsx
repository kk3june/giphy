import React, { useState } from 'react';
import { VAC, VACInput } from 'react-vac';
import SearchInput from '../components/atoms/SearchInput/SearchInput';

const SearchInputLayer = ({ value, onChange }: any) => {
  const searchInputViewProps = {
    value,
    onChange,
  };

  return (
    <>
      <SearchInput {...searchInputViewProps} />
      {/* <VACInput name="SearchInput" data={searchInputViewProps} /> */}
    </>
  );
};

export default SearchInputLayer;
