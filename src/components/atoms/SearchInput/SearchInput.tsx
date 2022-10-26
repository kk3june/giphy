import { css } from '@emotion/react';

import SearchBtton from '../Buttons/SearchButton';

import { InputBanner, Input } from './SearchInput.styled';

const SearchInput = ({ value, handleChange, handleSubmit }: any) => {
  return (
    <form
      css={css`
        position: relative;
        display: flex;
        width: 100%;
        background-color: white;
        border-radius: 0.9375rem;
      `}
      onSubmit={handleSubmit}
    >
      <label htmlFor="searchInput">
        <InputBanner>{value ? '' : <span>Search All the GIFs and Stickers</span>}</InputBanner>
      </label>
      <Input id="searchInput" name="searchInput" value={value} onChange={handleChange} />

      <SearchBtton />
    </form>
  );
};

export default SearchInput;
