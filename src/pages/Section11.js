import React, { useState } from 'react';
import Headline from '../components/Headline';
import Appbtn from '../components/Appbtn';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Section11 = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1], [0.2, 1.2]);
  return (
    <section className="bg-center bg-cover xl:bg-fixed bg-bg03">
      <div className="container px-24 py-64 md:px-48 md:py-96 xl:px-0 xl:py-256">
        <div className="mb-24">
          <Headline
            textcolor1="text-white"
            textcolor2="text-white"
            c_headline1="세션11"
            c_headline2="우리의 이야기"
            // textalign="text-l"
            // c_body1="생애 주기 관리는 반려동물의 체구와 나이에 기반하여 7가지 항목으로 관리방법을 안내합니다."
            // c_body2="고민관리는 15가지 고민 중 선택한 3가지 고민에 따른 관리방법과 솔루션을 제공합니다."
          ></Headline>
        </div>
        <div className="flex flex-col">
          <div className="">
            <button className="px-24 py-14 xl:px-32 xl:py-16 xl:text-tiny font-bold text-white backdrop-blur-md bg-primary rounded-12 xl:rounded-16 hover:bg-[#0026c9]">
              자세히 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section11;
