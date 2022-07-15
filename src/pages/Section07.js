import React from 'react';
import Headline from '../components/Headline';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Section07 = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1], [0.1, 2.1]);

  return (
    <section>
      <div className="container px-24 xl:pb-0 py-96 md:px-48 md:py-128 xl:px-0 xl:py-128">
        <div className="mb-32 md:mb-128 xl:mb-64">
          <Headline
            textcolor1="text-black"
            textcolor2="text-black"
            textcolor3="text-neutral-800"
            c_headline1="이렇게 쉽게"
            c_headline2="수의사를 만날줄이야"
            c_body1="생애 주기 관리는 반려동물의 체구와 나이에 기반하여 7가지 항목으로 관리방법을 안내합니다."
            // c_body2="고민관리는 15가지 고민 중 선택한 3가지 고민에 따른 관리방법과 솔루션을 제공합니다."
          ></Headline>
        </div>
        <div className="">
          {/* <motion.div className="hidden md:block" style={{ scale }}>
            <video className="w-screen" autoPlay loop playsInline muted>
              <source src="video/large_2x.mp4" type="video/mp4" />
            </video>
          </motion.div> */}
          <motion.div className="md:hidden">
            <img className="mx-auto w-300" src=" img/device01.png"></img>
          </motion.div>
        </div>
      </div>
      <motion.div className="hidden overflow-hidden md:block h-640" style={{ scale }}>
        <video className="w-screen my-auto bg-fixed bg-center bg-cover py-512" autoPlay loop playsInline muted>
          <source src="video/large_2x.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
};

export default Section07;
