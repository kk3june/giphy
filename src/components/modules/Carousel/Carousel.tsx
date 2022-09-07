import StyledCarousel from 'components/modules/Carousel/Carousel.styled';
import CardLayer from 'layer/CardLayer';

interface CardListLayerProps {
  data: any;
  width?: string;
  height?: string;
  type?: string;
}

const Carousel = ({ data, width, height, type }: CardListLayerProps) => {
  return (
    <StyledCarousel width={width} height={height} type={type}>
      <CardLayer data={data} width={width} height={height} type={type} />
    </StyledCarousel>
  );
};

export default Carousel;
