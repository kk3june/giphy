import React, { useState } from 'react';

import SearchBar from 'components/modules/SearchBar/SearchBar';

const SearchBarLayer = () => {
  const [value, setValue] = useState('');
  const handleSubmit = (val: string) => {
    console.log(val);
  };

  const searchInputProps = {
    value,
    onChange: (event: any) => {
      setValue(event.target?.value);
    },
  };

  const searchButtonProps = {
    value,
    onClick: () => {
      handleSubmit?.(value);
      setValue('');
    },
  };
  return <SearchBar inputProps={searchInputProps} buttonProps={searchButtonProps} />;
};

export default SearchBarLayer;
