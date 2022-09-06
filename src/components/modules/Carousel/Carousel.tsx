import CardListLayer from '../../../layer/CardListLayer';

interface CardListLayerProps {
  data: any;
  width?: string;
  height?: string;
}

const Carosel = ({ data, width, height }: CardListLayerProps) => {
  return <CardListLayer data={data} width={width} height={height} />;
};

export default Carosel;
