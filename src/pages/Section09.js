import React, { useState, useEffect } from 'react';
import Headline from '../components/Headline';
import Spline from '@splinetool/react-spline';
import { motion, Variants } from 'framer-motion';
import CountUp, { useCountUp } from 'react-countup';

const Section09 = () => {
  const FadeUp: variants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 100,
    },
  };
  return (
    <section className=" xl:py-256">
      <div className="container px-24 py-96 md:px-48 md:py-128 xl:px-0 xl:py-0">
        <div className="mb-64 md:mb-96 xl:mb-64">
          <Headline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-500"
            c_headline1="혜택"
            c_headline2="신규회원"
            textalign="text-center"
          ></Headline>
        </div>
        <motion.div className="flex flex-col" initial="offscreen" whileInView="onscreen">
          <motion.div className="flex flex-row mb-24">
            <motion.div className="p-48 mr-24 card01 rounded-16 basis-1/3" variants={FadeUp} transition={{ duration: 0.1 }}>
              <p className="mb-16 font-extrabold text-white text-md3 ">구매금액 최대적립</p>
              <p className="mb-64 font-bold text-white opacity-50 text-md2"> 나도 모르게 쌓이는 포인트를 경험해보세요.</p>
              <div className="text-center">
                <span className="text-white text-9xl font-Oswald linear-wipe-3">2</span>
                <span className="text-4xl font-bold text-white">%</span>
              </div>
            </motion.div>
            <motion.div className="relative px-48 pt-48 basis-2/3 card02 rounded-16" variants={FadeUp} transition={{ duration: 0.2, delay: 0.2 }}>
              <p className="mb-16 font-bold text-white text-md3">신규회원 웰컴 쿠폰팩</p>
              <p className="mb-64 font-bold text-white opacity-50 text-md2">
                신규회원이라면 누구나 <span className="opacity-100">56,000원 쿠폰팩</span>을 지급해드려요. 여기에 넉넉한 30일 유효기간까지. 총 7장의 쿠폰으로
                여유롭게 쇼핑하세요.
              </p>
              <img className="mx-auto overflow-hidden w-480" src="img/couponpack.png"></img>
              <div className="absolute bottom-0 h-120 w-100% mx-[-40px] dimmedCard"></div>
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-row">
            <motion.div className="relative px-48 pt-48 mr-24 card03 rounded-16 basis-1/2" variants={FadeUp} transition={{ duration: 0.2, delay: 0.3 }}>
              <p className="mb-16 font-extrabold text-white text-md3">추가 쿠폰</p>
              <p className="mb-64 font-bold text-white opacity-50 text-md2">내 반려동물을 등록하면 추가 쿠폰을 드려요.</p>
              <img className="mx-auto" src="img/petid.png"></img>
              <div className="absolute bottom-0  h-120 w-100% mx-[-40px] dimmedCard"></div>
            </motion.div>
            <motion.div className="p-48 card04 rounded-16 basis-1/2" variants={FadeUp} transition={{ duration: 0.2, delay: 0.4 }}>
              <div className="flex flex-col h-100%">
                <div className="">
                  <p className="mb-16 font-extrabold text-white text-md3">무료배송</p>
                  <p className="font-bold text-white opacity-50 text-md2">배송비 걱정없이 단 한개의 상품도 무료배송으로 받아보세요.</p>
                </div>
                <div className="mx-16 my-auto">
                  <div className="bg-[#343434] border-4 shadow-xl border-secondary h-128 rounded-32">
                    <div className="flex flex-row px-36">
                      <p className="text-xl font-bold pt-36 basis-1/2 text-neutral-200">배송비</p>
                      <span className="text-xl font-bold text-right text-white pt-36 basis-1/2">
                        <CountUp start={1000} end={0} duration={2} separator="," enableScrollSpy></CountUp>원
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section09;
