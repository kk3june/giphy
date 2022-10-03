import styled from '@emotion/styled';

const CLICKABLE_BACKGROUND = {
  'Log In': 'linear-gradient(-135deg, rgb(0, 231, 149) 0%, rgb(0, 187, 221) 100%)',
  'Sign Up': 'linear-gradient(-135deg, rgb(74, 144, 226) 0%, rgb(148, 56, 255) 100%)',
};
const LINK_BACKGROUND = {
  'Log In': 'linear-gradient(-135deg, rgb(97, 87, 255) 0%, rgb(153, 51, 255) 100%)',
};

export const ButtonItem = styled.button<{ name: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: rgba(33, 33, 33, 33);
  background: ${({ name }) => LINK_BACKGROUND[name as keyof typeof LINK_BACKGROUND]};
  margin-bottom: 0.375rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 0.3125rem;
  color: white;
  text-transform: capitalize;
  font-size: 0.9375rem;
  font-weight: bold;
`;

export const ButtonItemClickable = styled.button`
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;
  border-style: none;
  border-radius: 1.325rem;
  /* background: ${({ name }) => CLICKABLE_BACKGROUND[name as keyof typeof CLICKABLE_BACKGROUND]}; */
  background-color: rgba(33, 33, 33, 33);
  color: white;
  font-size: 1.0625rem;
  font-weight: bold;
`;
