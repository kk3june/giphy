// import { VAC } from 'react-vac';

import Grid from '../components/modules/Gird/Grid';

const GridLayer = ({ data, type, isLoading }: any) => {
  const gridProps = {
    data,
    type,
    isLoading,
  };

  return (
    <>
      <Grid {...gridProps} />
      {/* <VAC name="Grid" data={gridProps} /> */}
    </>
  );
};

export default GridLayer;
