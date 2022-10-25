import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import SearchBar from 'components/modules/SearchBar/SearchBar';
import { getSearchData } from 'pages/api/fetchAPI';
import { QUERY_KEYS } from 'src/constants';

const SearchBarLayer = () => {
  const [value, setValue] = useState('');
  const router = useRouter();

  const searchInputProps = {
    value,
    handleChange: (event: any) => {
      setValue(event.target?.value);
    },
    handleSubmit: (event: any) => {
      event.preventDefault();
      router.push({
        pathname: `/search/${value}`,
      });
    },
  };

  return <SearchBar inputProps={searchInputProps} />;
};

export default SearchBarLayer;
