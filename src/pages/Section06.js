import React, { useEffect, useState } from 'react';
import Headline from '../components/Headline';
import Tab from '../components/Tab01';
import Tab03 from '../components/Tab03';
import { useRive } from '@rive-app/react-canvas';
import { motion } from 'framer-motion';

const Section06 = () => {
  const FadeUp: variants = {
    offscreen: {
      y: 400,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 100,
    },
  };
  return (
    <section>
      <div className="container px-24 pt-96 md:px-48 md:py-128 xl:px-0 xl:py-256">
        <div className="mb-32 md:mb-96 xl:mb-128">
          <Headline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="어려웠던"
            c_headline2="건강관리도 쉽게"
            c_body1="생애 주기 관리는 반려동물의 체구와 나이에 기반하여 7가지 항목으로 관리방법을 안내합니다."
            c_body2="고민관리는 15가지 고민 중 선택한 3가지 고민에 따른 관리방법과 솔루션을 제공합니다."
          ></Headline>
        </div>
        <motion.div className="relative flex flex-row" initial="offscreen" whileInView="onscreen">
          <motion.div className="px-24 basis-1/2" variants={FadeUp} transition={{ dealy: 1, duration: 2.5 }}>
            <img className="mx-auto w-400" src="img/img_sec06_device_01.png"></img>
            {/* <Tab></Tab> */}
          </motion.div>
          <motion.div className="px-24 pt-64 basis-1/2" variants={FadeUp} transition={{ dealy: 2, duration: 2.5 }}>
            <img className="mx-auto w-400" src="img/img_sec06_device_02.png"></img>
            {/* <Tab></Tab> */}
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-row md:hidden">{/* <Tab03></Tab03> */}</div>
    </section>
  );
};

export default Section06;
