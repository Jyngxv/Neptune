import React from 'react';
import Headline from '../components/Headline';
import { motion, Variants } from 'framer-motion';

const Section01 = () => {
  const leftToRight: variants = {
    offscreen: {
      x: -60,
      opacity: 10,
    },
    onscreen: {
      x: 0,
      opacity: 100,
    },
  };
  const lineLeftToRight: variants = {
    offscreen2: {
      x: -900,
      opacity: 10,
    },
    onscreen2: {
      x: 150,
      opacity: 100,
    },
  };

  return (
    <section className="relative bg-black">
      <div className="container px-24 py-96 md:px-48 md:py-128 xl:px-0 xl:py-256">
        <div className="wrapper">
          <div className="flex flex-col">
            <div className="z-30 flex flex-row">
              <motion.div className="bg-black xl:mb-128" initial="offscreen" whileInView="onscreen">
                <motion.p className="font-bold text-white text-7xl" variants={leftToRight} transition={{ duration: 0.2 }}>
                  어렵고
                </motion.p>
                <motion.p className="font-bold text-white text-7xl" variants={leftToRight} transition={{ duration: 0.4 }}>
                  힘들었던
                </motion.p>
                <motion.p className="font-bold text-white text-7xl linear-wipe-1" variants={leftToRight} transition={{ duration: 0.6 }}>
                  시간을 넘어서.
                </motion.p>
              </motion.div>
              <div className=""></div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="pr-64 basis-1/3">
              <p className="text-white xl:text-4xl">07</p>
              <p className="text-white xl:text-md3 xl:mb-12">상품을 해메는 시간</p>
              <p className="text-neutral-600 xl:text-base">
                Stela's Artist participate the subscription licensing policy for opportunity to give 220 Countries Creator
              </p>
            </div>
            <div className="pr-64 basis-1/3">
              <p className="text-white xl:text-4xl">5,152</p>
              <p className="text-white xl:text-md3 xl:mb-12">실패하는 비용</p>
              <p className="text-neutral-600 xl:text-base">
                Stela's Artist participate the subscription licensing policy for opportunity to give 220 Countries Creator
              </p>
            </div>
            <div className="pr-64 basis-1/3">
              <p className="text-white xl:text-4xl">999+</p>
              <p className="text-white xl:text-md3 xl:mb-12">Outstanding Stars</p>
              <p className="text-neutral-600 xl:text-base">
                Stela's Artist participate the subscription licensing policy for opportunity to give 220 Countries Creator
              </p>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute h-8 bg-white w-60% right-0 top-[538px]"
        variants={lineLeftToRight}
        initial="offscreen2"
        whileInView="onscreen2"
        transition={{ duration: 0.5 }}
      ></motion.div>
    </section>
  );
};

export default Section01;
