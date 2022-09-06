import { css } from '@emotion/react';

import CardLayer from 'components/atoms/Card/Card';

const CardList = ({ data, width, height }: any) => {
  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        overflow: hidden;
      `}
    >
      {data && data.map((el: any) => <CardLayer data={el} width={width} height={height} />)}
    </div>
  );
};

export default CardList;
