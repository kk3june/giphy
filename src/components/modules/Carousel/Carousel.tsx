import StyledCarousel from 'components/modules/Carousel/Carousel.styled';
import CardLayer from 'layer/CardLayer';

interface CardListLayerProps {
  data: any;
  name?: string;
  width?: string;
  height?: string;
}

const Carousel = ({ data, width, height, name }: CardListLayerProps) => {
  return (
    <StyledCarousel height={height}>
      <CardLayer data={data} width={width} height={height} name={name} />
    </StyledCarousel>
  );
};

export default Carousel;
