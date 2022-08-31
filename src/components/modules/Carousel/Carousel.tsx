import CardLayer from '../../../layer/CardLayer';

interface CardLayerProps {
  data: any;
  cardType: string;
}

const Carosel = ({ data, cardType }: CardLayerProps) => {
  return (
    <>
      <CardLayer data={data} cardType={cardType} />
    </>
  );
};

export default Carosel;
