import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';

export default () => {
  return (
    <Swiper
      spaceBetween={0}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={[true]}
      modules={[Autoplay]}
      className="slider02"
    >
      <SwiperSlide>
        <img src="img/screen06.png"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen07.png"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/screen08.png"></img>
      </SwiperSlide>
    </Swiper>
  );
};
