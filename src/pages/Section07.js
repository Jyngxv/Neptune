import React from 'react';
import Headline from '../components/Headline';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Section07 = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1], [0.01, 2.2]);

  return (
    <section>
      <div className="container">
        <div className="mb-128">
          <Headline
            textcolor1="text-black"
            textcolor2="text-primary"
            c_headline1="섹션7"
            c_headline2="수의사에게 물어봐요"
            c_body1="생애 주기 관리는 반려동물의 체구와 나이에 기반하여 7가지 항목으로 관리방법을 안내합니다."
            c_body2="고민관리는 15가지 고민 중 선택한 3가지 고민에 따른 관리방법과 솔루션을 제공합니다."
          ></Headline>
        </div>
        <div className="">
          <motion.div className="videoss" style={{ scale }}>
            <video className="videoss" autoPlay loop playsInline muted>
              <source src="video/large_2x.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section07;
