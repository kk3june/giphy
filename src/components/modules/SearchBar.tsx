import React, { useState } from 'react';
import styled from '@emotion/styled';
import SearchInput from '../atoms/SearchInput';
import SearchButton from '../atoms/SearchButton';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const handleSubmit = (value: string) => {
    console.log(value);
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

  return (
    <SearchBarWrapper>
      <SearchInput {...searchInputProps} />
      <SearchButton {...searchButtonProps} />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  background-color: white;
  border-radius: 5px;
`;

export default SearchBar;
