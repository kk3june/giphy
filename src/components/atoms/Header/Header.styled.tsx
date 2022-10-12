import styled from '@emotion/styled';

const FONT_SIZE = {
  INDEX: '1.2rem',
  LARGE_HEADER: '1.9rem',
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: capitalize;
`;

export const SvgBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.1875rem;
  height: 2.1875rem;
  margin-right: 0.625rem;
`;

export const Title = styled.span<{ type: any }>`
  font-size: ${({ type }) => FONT_SIZE[type as keyof typeof FONT_SIZE]};
`;
