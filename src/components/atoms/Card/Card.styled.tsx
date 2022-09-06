import styled from '@emotion/styled';


export const StyledCard = styled.div``;

export const StyledImg = styled.img<{width: string}>`
    width: ${({width}) => width};
    margin: 0 2px;
    border-radius: 5px;
`;
