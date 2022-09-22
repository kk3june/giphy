import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CardLayer from 'layer/CardLayer';
import { TRENDING, ARTISTS } from 'src/constants';

interface CarouselLayerProps {
  type: string | undefined;
  data: any;
}

const Carousel = ({ data, type }: CarouselLayerProps) => {
  // Swiper style
  const SwiperStyle = {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  };
  const SlideStyle = {
    width: 'auto',
    height: 'auto',
  };

  return (
    <Swiper
      style={SwiperStyle}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView="auto"
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data &&
        data.map((item: any) => (
          <SwiperSlide key={item.id} style={SlideStyle}>
            <CardLayer data={item} type={type} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Carousel;
