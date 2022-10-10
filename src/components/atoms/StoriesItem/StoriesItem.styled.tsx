import styled from '@emotion/styled';

const WIDTH_TYPE = {
  NORMAL: '33rem',
  WIDE: '16.5rem',
};

export const StyledStory = styled.a<{ type: any }>`
  height: 18.75rem;
  width: ${({ type }) => WIDTH_TYPE[type as keyof typeof WIDTH_TYPE]};
`;

export const TitleStory = styled.span`
  position: absolute;
  bottom: 0;
  padding: 1.25rem;
  font-size: 1.125rem;
  font-weight: bold;
  color: white;
`;
