import React, { useState } from 'react';
import { VAC, VACInput } from 'react-vac';
import SearchInputView from './SearchInputView';

const SearchInput = ({ value, onChange }: any) => {
  const searchInputViewProps = {
    value,
    onChange,
  };

  return (
    <>
      <SearchInputView {...searchInputViewProps} />
      {/* <VACInput name="SearchInputView" data={searchInputViewProps} /> */}
    </>
  );
};

export default SearchInput;
