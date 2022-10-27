import React from 'react';

import styled from '@emotion/styled';

import CardLayer from 'layer/CardLayer';

const StyleNormalGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NormalGrid = ({ data, type, isLoading, childWidth, childHeight }: any) => {
  return (
    <StyleNormalGrid>
      {data &&
        data.map((item: any) => (
          <CardLayer
            key={item.id}
            data={item}
            type={type}
            isLoading={isLoading}
            childWidth={childWidth}
            childHeight={childHeight}
          />
        ))}
    </StyleNormalGrid>
  );
};

export default NormalGrid;
