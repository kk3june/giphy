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
  return isLoading ? (
    <div
      css={{
        fontSize: '100px',
      }}
    >
      isLoading
    </div>
  ) : (
    <StyledWrapper>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data &&
          data.map((item: any) => (
            <SwiperSlide key={item.id}>
              <CardLayer data={item} type={type} />
            </SwiperSlide>
          ))}
      </Swiper>
    </StyledWrapper>
  );
};

export default Carousel;
