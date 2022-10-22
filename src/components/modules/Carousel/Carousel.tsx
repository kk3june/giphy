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
    <StyledWrapper>
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={3} slidesPerView="auto" navigation>
        {data &&
          data.map((item: any, index: any) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={`${item.type}-${index}`}>
              <CardLayer data={item} type={type} />
            </SwiperSlide>
          ))}
      </Swiper>
    </StyledWrapper>
  ) : (
    <div
      css={{
        fontSize: '100px',
      }}
    >
      isLoading
    </div>
  );
};

export default Carousel;
