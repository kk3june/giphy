import React, { useState } from 'react';
import { VAC, VACInput } from 'react-vac';
import SearchInputView from './SearchInputView';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const handleSubmit = (value: string) => {
    console.log(value);
  };

  const searchInputViewProps = {
    value,
    onChange: (event: any) => {
      setValue(event.target?.value);
    },
    onClick: () => {
      handleSubmit?.(value);
      setValue('');
    },
  };

  return (
    <>
      <SearchInputView {...searchInputViewProps} />
      {/* <VACInput name="SearchInputView" data={searchInputViewProps} /> */}
    </>
  );
};

export default SearchInput;
