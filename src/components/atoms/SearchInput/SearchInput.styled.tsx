import styled from '@emotion/styled';

export const InputBanner = styled.div`
  position: absolute;
  height: inherit;
  line-height: 50px;
  margin-left: 15px;
  color: rgb(166, 166, 166);
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-style: none;
  padding-left: 15px;
  z-index: 1;
  :focus {
    outline: none;
  }
`;
