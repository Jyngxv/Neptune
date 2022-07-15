import React from 'react';
import Headline from '../components/Headline';
import Title from '../components/Title';
import Slider02 from '../components/Slider02';
import { motion, Variants } from 'framer-motion';

const Section04 = () => {
  const lineUpToBottom: variants = {
    offscreen: {
      height: 0,
      opacity: 0,
    },
    onscreen: {
      height: 1200,
      opacity: 100,
    },
  };

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="container px-24 py-96 md:px-48 md:py-128 xl:px-0 xl:py-128">
        <div className="flex flex-col">
          <div className="relative">
            <div className="w-300 xl:w-[400px] mx-auto mb-48 xl:mb-0">
              <div className="absolute left-0 right-0 z-20 mx-auto w-300 xl:w-[400px]">
                <img src="../img/device0.png" />
              </div>
              <div className="z-10">
                <Slider02></Slider02>
              </div>
            </div>
            <div className="overflow-hidden md:absolute md:top-0 md:left-0">
              <p className="absolute text-md md:text-xl xl:text-9xl font-black text-center text-[#1a1a1a] w-100% hover:text-secondary font-Oswald uppercase ">
                NOT YOUR FAULT
              </p>
              <p className="text-md md:text-xl font-regular text-[#1a1a1a] w-100% hover:text-secondary linear-wipe-2">
                In Asia, there is a great demand on the global media enterprises such as CJ E&M and Tencent includinglarge in-house agencies like Dentsu,
                Hakuhodo and Cheil. They consume a massive music sources to digital media, retail, event, exhibition, PR, outdoor and sports marketing as well
                as broadcasting and printing media. We exerted our best efforts to the localization for the large media clients to use the marketing solution.In
                Asia, there is a <span className="text-secondary">great</span> demand on the global media enterprises such as CJ E&M and Tencent includinglarge
                in-house agencies like Dentsu, Hakuhodo and Cheil. They consume a massive music sources to digital media, retail, event, exhibition, PR, outdoor
                and sports marketing as well as broadcasting and printing media. We exerted our best efforts to the localization for the large media clients to
                use the marketing solution.In Asia, there is a great demand on the global media enterprises such as CJ E&M and Tencent includinglarge in-house
                agencies like Dentsu, Hakuhodo and Cheil. They consume a <span className="!text-secondary">massive</span> music sources to digital media,
                retail, event, exhibition, PR, outdoor and sports marketing as well as broadcasting and printing media. We exerted our best efforts to the
                localization for the large media clients to use the marketing solution.
              </p>
            </div>
            {/* <div className="md:absolute md:top-[320px] md:left-0 xl:left-32">
              <p className="text-md md:text-2xl font-bold text-neutral-500 w-[300px] hover:text-white">수의학 기반</p>
              <p className="text-md md:text-2xl  font-bold text-neutral-500 w-[300px] hover:text-white">알고리즘으로</p>
              <p className="text-md md:text-2xl  font-bold text-neutral-500 w-[300px] hover:text-white">최적의 상품 추천</p>
            </div> */}
            {/* <div className="md:absolute md:top-[320px] md:right-[-160px] xl:right-0">
              <p className="text-md md:text-2xl  font-bold text-neutral-500 w-[270x] hover:text-white">수의학 기반</p>
              <p className="text-md md:text-2xl  font-bold text-neutral-500 w-[270px] hover:text-white">나이와 고민</p>
              <p className="text-md md:text-2xl  font-bold text-neutral-500 w-[270px] hover:text-white">건강관리</p>
            </div> */}
          </div>
        </div>
      </div>
      <motion.div
        className="absolute w-8 top-0 left-50% bg-secondary z-60 overflow-auto"
        variants={lineUpToBottom}
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 1.5 }}
      ></motion.div>
    </section>
  );
};

export default Section04;
