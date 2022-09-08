import styled from '@emotion/styled';

type StyledCardProps = {
  width: string | undefined;
  height: string | undefined;
  name?: string | undefined;
};

export const StyledCardWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

export const StyledCard = styled.div<StyledCardProps>`
  height: ${({ height }) => height};
`;

export const StyledImg = styled.img<{ name: string }>`
  display: inline-block;
  margin: 0 2px;
  border-radius: 5px;
  height: 100%;
  min-width: ${({ name }) => (name === 'artists' ? '343px' : '')};
`;
