import React from 'react';

import styled from '@emotion/styled';

import CardLayer from 'layer/CardLayer';

const StyleNormalGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 48.5rem;
`;

const NormalGrid = ({ data, type, isLoading }: any) => {
  return isLoading ? (
    <div
      css={{
        fontSize: '100px',
      }}
    >
      isLoading
    </div>
  ) : (
    <StyleNormalGrid>
      {data && data.map((item: any) => <CardLayer key={item.id} data={item} type={type} />)}
    </StyleNormalGrid>
  );
};

export default NormalGrid;
