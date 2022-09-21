import ArrowRightSvg from 'components/atoms/Svgs/ArrowRightSvg';
import StyledCarousel from 'components/modules/Carousel/Carousel.styled';
import CardLayer from 'layer/CardLayer';

interface CarouselLayerProps {
  type: string | undefined;
  data: any;
  width: string | undefined;
  height: string | undefined;
  clickArrowSvg: any;
}

const Carousel = ({ data, width, height, type, clickArrowSvg }: CarouselLayerProps) => {
  return (
    <StyledCarousel width={width} height={height} type={type}>
      <CardLayer data={data} width={width} height={height} type={type} />

      <ArrowRightSvg type={type} onClick={clickArrowSvg} />
    </StyledCarousel>
  );
};

export default Carousel;
