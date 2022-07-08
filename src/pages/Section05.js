import React from 'react';
import Headline from '../components/Headline';
import Slider01 from '../components/Slider01';
import '../App.css';
const Section05 = () => {
  return (
    <section className="bg-bgcolor-900">
      <div className="container pb-0">
        <div className="mb-64 md:mb-96 lg:mb-128">
          <Headline
            textcolor1="text-white"
            textcolor2="text-secondary"
            c_headline1="섹션05"
            c_headline2="반려동물 슈퍼케어"
            c_body1="사료에서 끝나는 것이 아닌간식, 영양제, 용품까지 섬세하게 고민없는 쇼핑을 도와줍니다."
            c_body2="여기에 얼마나 먹여야하는지까지도, 모든 것에 대한 고민이 사라지죠."
          ></Headline>
        </div>
      </div>
      <div className="pb-256">
        <Slider01></Slider01>
      </div>
    </section>
  );
};

export default Section05;
