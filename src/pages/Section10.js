import React, { useState, useEffect } from 'react';
import Headline from '../components/Headline';
import Appbtn from '../components/Appbtn';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Petnumber from '../components/Petnumber';

const Section10 = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1], [0.2, 1.2]);
  const temp = <Petnumber />;
  const temp2 = <span>벌써 {temp}마리가 등록되었어요</span>;
  return (
    <section className="bg-[#0a0a0a]">
      <div className="container px-24 py-96 md:px-48 md:py-128 xl:px-0 xl:py-256">
        <div className="mb-24">
          <Headline
            textcolor1="text-white"
            textcolor2="text-secondary"
            textcolor3="text-neutral-900"
            c_headline1={temp2}
            c_headline2="지금 바로 등록해보세요"
            textalign="text-center"
            // c_body1="생애 주기 관리는 반려동물의 체구와 나이에 기반하여 7가지 항목으로 관리방법을 안내합니다."
            // c_body2="고민관리는 15가지 고민 중 선택한 3가지 고민에 따른 관리방법과 솔루션을 제공합니다."
          ></Headline>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center mb-96 xl:mb-128">
            <Appbtn btn_name="너도 등록해" />
          </div>
          <motion.div className="mx-auto w-90% xl:w-1024" style={{ scale }}>
            <img src="img/device12.png"></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section10;
