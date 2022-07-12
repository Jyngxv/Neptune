import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

export default () => {
  // limitProgress={1}
  // shadowPerProgress={true}
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1536: {
          slidesPerView: 4,
        },
        2000: {
          slidesPerView: 5,
        },
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="slider01"
    >
      <SwiperSlide>
        <img src="img/screen01.png"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen02.png"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen03.png"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen04.png"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen05.png"></img>
      </SwiperSlide>
    </Swiper>
  );
};
