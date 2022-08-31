import styled from '@emotion/styled';

interface CardTypeProps {
  readonly cardType: 'trending' | 'artists';
}

export const StyledCard = styled.div``;

export const StyledImg = styled.img<CardTypeProps>`
  height: ${props => (props.cardType === 'trending' ? '140px' : '270px')};
  margin: 0 2px;
  border-radius: 5px;
`;
