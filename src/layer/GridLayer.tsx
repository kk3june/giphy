import { VAC } from 'react-vac';
import Grid from '../components/modules/Gird/Grid';

const GridLayer = ({ data }: any) => {
  const gridProps = {
    data,
  };

  return (
    <>
      <Grid {...gridProps} />
      {/* <VAC name="Grid" data={gridProps} /> */}
    </>
  );
};

export default GridLayer;
