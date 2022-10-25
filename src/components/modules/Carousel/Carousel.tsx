import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { StyledWrapper } from 'components/modules/Carousel/Carousel.styled';
import CardLayer from 'layer/CardLayer';

interface CarouselLayerProps {
  type: string | undefined;
  data: any;
  isLoading: boolean;
}

const Carousel = ({ data, type, isLoading }: CarouselLayerProps) => {
  return (
    <StyledWrapper>
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={3} slidesPerView="auto" navigation>
        {data &&
          data.map((item: any) => (
            <SwiperSlide key={item.id}>
              <CardLayer data={item} type={type} isLoading={isLoading} />
            </SwiperSlide>
          ))}
      </Swiper>
    </StyledWrapper>
  );
};

export default Carousel;
