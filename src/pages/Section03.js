import React from 'react';
import Headline from '../components/Headline';
import Title from '../components/Title';
import Slider02 from '../components/Slider02';

const Section03 = () => {
  return (
    <section className="bg-bgcolor-300">
      <div className="container">
        <div className="mb-64 md:mb-96 lg:mb-128">
          <Headline
            textcolor1="text-white"
            textcolor2="text-secondary"
            c_headline1="THREE"
            c_headline2="반려동물 슈퍼케어"
            // c_body1="사료에서 끝나는 것이 아닌간식, 영양제, 용품까지 섬세하게 고민없는 쇼핑을 도와줍니다."
            // c_body2="여기에 얼마나 먹여야하는지까지도, 모든 것에 대한 고민이 사라지죠."
          ></Headline>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <div className="w-[420px] mx-auto">
              <div className="absolute left-0 right-0 z-20 mx-auto w-[420px]">
                <img src="../img/device0.png" />
              </div>
              <div className="z-10">
                <Slider02></Slider02>
              </div>
            </div>
            <div className="absolute top-[320px] left-32">
              <p className="text-[36px] font-medium text-neutral-800 w-[300px] hover:text-white">5초만에 빠르게</p>
              <p className="text-[36px] font-medium text-neutral-800 w-[300px] hover:text-white">정확하게</p>
              <p className="text-[36px] font-medium text-neutral-800 w-[300px] hover:text-white">믿을 수 있게</p>
            </div>
            <div className="absolute top-[320px] right-0">
              <p className="text-[36px] font-medium text-neutral-800 w-[270x] hover:text-white">5초만에 빠르게</p>
              <p className="text-[36px] font-medium text-neutral-800 w-[270px] hover:text-white">정확하게</p>
              <p className="text-[36px] font-medium text-neutral-800 w-[270px] hover:text-white">믿을 수 있게</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
