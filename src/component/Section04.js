import React from 'react';

const Section04 = () => {
  return (
    <section className="bg-neutral-900">
      <div className="container">
        <div className="wrapper pb-0">
          <div className="sm:mb-64 mb-128">
            <div className="flex flex-col sm:text-center">
              <p className="nt-title-text font-black text-white sm:text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                찾았다.
              </p>
              <p
                className="nt-title-text font-black text-secondary sm:mb-24 mb-48 sm:text-center"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                인생 사료.
              </p>
              <p className="nt-sub-text sm:w-100% md:w-4/5 w-3/5 sm:mx-auto text-neutral-500 font-medium">
                모든 반려인들은 매번 고민합니다. 무엇을 먹여야 하지? 하지만 매번 실패하고, 다시 새로운 상품을 찾으러 떠납니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-bg02 bg-cover bg-no-repeat sm:pb-96 md:pb-160 lg:pb-256">
        <div className="animate-fadeInUp" data-aos="fade-up">
          <img className="sm:w-75% md:hidden lg:hidden mx-auto" src="img/device01.png" />
          <img className="sm:hidden md:w-80% w-1024 mx-auto animate-fadeInUp" src="img/device05.png" />
        </div>
      </div>
    </section>
  );
};

export default Section04;
