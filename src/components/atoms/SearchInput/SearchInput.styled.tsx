import styled from '@emotion/styled';

export const InputBanner = styled.div`
  position: absolute;
  height: inherit;
  line-height: 3.125rem;
  margin-left: 0.9375rem;
  color: rgb(166, 166, 166);
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-style: none;
  padding-left: 0.9375rem;
  z-index: 1;
  :focus {
    outline: none;
  }
`;
