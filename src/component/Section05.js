import React from 'react';

const Section05 = () => {
  return (
    <section className="bg-neutral-900">
      <div className="container">
        <div className="wrapper pb-0">
          <div className="sm:mb-64 mb-128">
            <div className="flex flex-col sm:text-center">
              <p className="nt-title-text font-black text-white" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                우리의 추천
              </p>
              <p className="nt-title-text font-black text-secondary sm:mb-24 mb-48" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                히어로
              </p>
              <p className="nt-sub-text sm:w-100% md:w-4/5 w-3/5 sm:mx-auto text-neutral-500 font-medium">
                사료에서 끝나는 것이 아닌간식, 영양제, 용품까지 섬세하게 고민없는 쇼핑을 도와줍니다. 여기에 얼마나 먹여야하는지까지도, 모든 것에 대한 고민이
                사라지죠.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:flex-wrap sm:overflow-x-scroll sm:pb-96 md:pb-160 lg:pb-256">
        <div className="sm:flex">
          <img className="sm:hidden md:w-80% w-1024 mx-auto" src="img/device06.png" />
          <img className="sm:w-320 sm:pl-24 md:hidden lg:hidden mr-32" src="img/device01.png" />
          <img className="sm:w-320 md:hidden lg:hidden mr-32" src="img/device01.png" />
          <img className="sm:w-320 md:hidden lg:hidden pr-24" src="img/device01.png" />
        </div>
      </div>
    </section>
  );
};

export default Section05;
