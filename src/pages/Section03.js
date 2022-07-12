import React from 'react';
import Headline from '../components/Headline';
import Title from '../components/Title';
import Slider02 from '../components/Slider02';

const Section03 = () => {
  return (
    <section className="bg-bgcolor-300">
      <div className="container px-24 py-96 md:px-48 md:py-128 xl:px-0 xl:py-256">
        <div className="mb-32 md:mb-96 xl:mb-128">
          <Headline
            textcolor1="text-white"
            textcolor2="text-secondary"
            textcolor3="text-neutral-900"
            c_headline1="THREE"
            c_headline2="반려동물 슈퍼케어"
            // c_body1="사료에서 끝나는 것이 아닌간식, 영양제, 용품까지 섬세하게 고민없는 쇼핑을 도와줍니다."
            // c_body2="여기에 얼마나 먹여야하는지까지도, 모든 것에 대한 고민이 사라지죠."
          ></Headline>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <div className="w-300 xl:w-[420px] mx-auto mb-48 xl:mb-0">
              <div className="absolute left-0 right-0 z-20 mx-auto w-300 xl:w-[420px]">
                <img src="../img/device0.png" />
              </div>
              <div className="z-10">
                <Slider02></Slider02>
              </div>
            </div>
            <div className="md:absolute md:top-[320px] md:left-0 xl:left-32">
              <p className="text-md md:text-md2 font-medium text-neutral-800 w-[300px] hover:text-white">5초만에 빠르게</p>
              <p className="text-md md:text-md2  font-medium text-neutral-800 w-[300px] hover:text-white">정확하게</p>
              <p className="text-md md:text-md2  font-medium text-neutral-800 w-[300px] hover:text-white">믿을 수 있게</p>
            </div>
            <div className="md:absolute md:top-[320px] md:right-[-160px] xl:right-0">
              <p className="text-md md:text-md2  font-medium text-neutral-800 w-[270x] hover:text-white">Love</p>
              <p className="text-md md:text-md2  font-medium text-neutral-800 w-[270px] hover:text-white">정확하게</p>
              <p className="text-md md:text-md2  font-medium text-neutral-800 w-[270px] hover:text-white">믿을 수 있게</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
