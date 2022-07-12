import React from 'react';
import Headline from '../components/Headline';
import Title from '../components/Title';
import Slider03 from '../components/Slider03';
const Section04 = () => {
  return (
    <section className="bg-bgcolor-600">
      <div className="container px-24 py-96 md:px-48 md:py-128 xl:px-0 xl:py-256">
        <div className="flex flex-col xl:flex-row md:mb-0 xl:mb-128">
          <div className="mb-64 md:mb-120 xl:basis-1/2">
            <div className="flex flex-col">
              <div className="">
                <Headline
                  textcolor1="text-white"
                  textcolor2="text-secondary"
                  c_headline1="FOUR"
                  c_headline2="반려동물 슈퍼케어"
                  c_body1="사료에서 끝나는 것이 아닌간식, 영양제, 용품까지 섬세하게 고민없는 쇼핑을 도와줍니다."
                  c_body2="여기에 얼마나 먹여야하는지까지도, 모든 것에 대한 고민이 사라지죠."
                ></Headline>
              </div>
              <div className="md:block xl:block">
                <Title
                  textcolor1="text-white"
                  textcolor2="text-secondary"
                  // textcolor3="text-neutral-900"
                  // c_title1="과학적일 수 밖에없는 이유"
                  // c_title2="반려동물 슈퍼케어"
                  // c_body1="사료에서 끝나는 것이 아닌간식, 영양제, 용품까지 섬세하게 고민없는 쇼핑을 도와줍니다."
                  // c_body2="여기에 얼마나 먹여야하는지까지도, 모든 것에 대한 고민이 사라지죠."
                ></Title>
                <div className="py-24">
                  <ul>
                    <li>
                      <img className="mr-32 opacity-50 h-36 xl:h-48 md:h-64 xl:h-64 hover:opacity-100" src="img/logo-snu.png" alt="서울대학교 수의과대학" />
                    </li>
                    <li>
                      <img className="mr-32 opacity-50 h-36 xl:h-48 md:h-64 xl:h-64 hover:opacity-100" src="img/logo-aafco.png" />
                    </li>
                    <li>
                      <img className="mr-32 opacity-50 h-36 xl:h-48 md:h-64 xl:h-64 hover:opacity-100" src="img/logo-fediaf.png" />
                    </li>
                    <li>
                      <img className="mr-32 opacity-50 h-36 xl:h-48 md:h-64 xl:h-64 hover:opacity-100" src="img/logo-nrc.png" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:basis-1/2">
            <div className="mx-auto mr-auto w-70% md:w-400 xl:w-[360px]">
              {/* <img className="mx-auto " src="img/device01.png" /> */}
              <Slider03></Slider03>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section04;
