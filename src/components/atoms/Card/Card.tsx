import React from 'react';

import { StyledCard, StyledImg } from './Card.styled';

const Card = ({data, width}: any) => {

    return (
        <StyledCard key={data?.[0].id}>
            <a href={`gifs/${data?.[0].id}`}>
                <StyledImg src={data?.[0].images.original.url} width={width}/>
            </a>
        </StyledCard>
    );
};

export default Card;