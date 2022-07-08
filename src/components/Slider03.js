import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/swiper.css';
import 'swiper/css/effect-cards';
import 'swiper/css';
import { EffectCards, Autoplay } from 'swiper';

export default () => {
  return (
    <Swiper
      effect={'cards'}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      className="slider03"
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
