import React from 'react';

const Section01 = () => {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="flex flex-col">
            <div className="flex flex-col mx-auto mb-64">
              <video className="sm:w-85% md:w-55% lg:w-45% m-auto animate-pulse" autoPlay loop muted>
                <source src="video/video01.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col text-center">
              <p className="nt-title-text font-black" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                커머스를 넘어선
              </p>
              <p className="nt-title-text font-black text-primary sm:mb-24 mb-48" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                기술의 결정체
              </p>
              <p className="nt-sub-text sm:w-95% w-3/5 mx-auto text-neutral-800 font-medium">
                모든 반려인들은 매번 고민합니다. 무엇을 먹여야 하지? 하지만 매번 실패하고, 다시 새로운 상품을 찾으러 떠납니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section01;
