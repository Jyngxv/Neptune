import React from 'react';
import Headline from '../components/Headline';

const Section01 = () => {
  return (
    <section>
      <div className="container px-24 py-96 md:px-48 md:py-128 xl:px-0 xl:py-256">
        <div className="wrapper">
          <div className="flex flex-col">
            <div className="mx-auto mb-64">
              <video className="w-80% md:w-60% xl:w-40% m-auto" autoPlay loop muted>
                <source src="video/video01.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col text-center">
              <Headline
                textcolor1="text-black"
                textcolor2="text-primary"
                c_headline1="적당을 모르는"
                c_headline2="반려동물 슈퍼케어"
                c_body1="사료에서 끝나는 것이 아닌간식, 영양제, 용품까지 섬세하게 고민없는 쇼핑을 도와줍니다."
                c_body2="여기에 얼마나 먹여야하는지까지도, 모든 것에 대한 고민이 사라지죠."
              ></Headline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section01;
