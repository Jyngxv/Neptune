import React from 'react';

const Section03 = () => {
  return (
    <section className="bg-neutral-900">
      <div className="container">
        <div className="wrapper sm:pb-0">
          <div className="sm:mb-64 mb-128">
            <div className="flex flex-col sm:text-center">
              <p className="nt-title-text font-black text-white sm:text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                수의학에 기반한
              </p>
              <p
                className="nt-title-text font-black text-secondary sm:mb-24 mb-48 sm:text-center"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                똑똑한 알고리즘
              </p>
              <p className="nt-sub-text sm:w-100% md:w-4/5 w-3/5 sm:mx-auto text-neutral-500 font-medium">
                모든 반려인들은 매번 고민합니다. 무엇을 먹여야 하지? 하지만 매번 실패하고, 다시 새로운 상품을 찾으러 떠납니다.
              </p>
            </div>
          </div>
          <div className="flex flex-row sm:hidden">
            <div className="sm:basis-full basis-1/2">
              <img className="sm:w-75% sm:mb-96 md:w-85% w-480 mx-auto mb-128" src="img/device01.png" />
              <p className="nt-title2-text text-secondary font-bold sm:w-95%">과학적일 수 밖에 없는 놀라운 이유.</p>
              <p className="nt-sub-text text-neutral-500 font-medium sm:w-95% md:mb-48 lg:mb-48">
                푸드 알고리즘은 미국 사료기준 협회의 영양소 기준인 AAFCO(he Association of American Feed Control Officials) 2020, 유럽 반려동물 식품 산업 연맹인
                FEDIAF Nutrional Guidelines 2020, NRC(Nutrient Requirements of Cats Dogs)연구를 비롯한 다양한 반려동물 논문을 기반으로 설계되었습니다. 또한
                서울대학교 수의과대학과 함께 알고리즘에 대한 연구개발을 진행하고 있습니다.
              </p>
              <ul>
                <li>
                  <img className="md:h-48 lg:h-64 mr-32 opacity-50 hover:opacity-100" src="img/logo-snu.png" />
                </li>
                <li>
                  <img className="md:h-48 lg:h-64 mr-32 opacity-50 hover:opacity-100" src="img/logo-aafco.png" />
                </li>
                <li>
                  <img className="md:h-48 lg:h-64 mr-32 opacity-50 hover:opacity-100" src="img/logo-fediaf.png" />
                </li>
                <li>
                  <img className="md:h-48 lg:h-64 mr-32 opacity-50 hover:opacity-100" src="img/logo-nrc.png" />
                </li>
              </ul>
            </div>
            <div className="sm:hidden basis-1/2 md:pt-128 pt-256 overflow-x-auto">
              <img className="md:w-85% w-480 mx-auto" src="img/device02.png" />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="sm:flex md:hidden lg:hidden sm:flex-wrap sm:overflow-x-scroll sm:pb-64 md:pb-160 lg:pb-256">
        <div className="sm:flex">
          <img className="sm:w-320 sm:pl-24 md:hidden lg:hidden mr-32" src="img/device01.png" />
          <img className="sm:w-320 md:hidden lg:hidden pr-24" src="img/device01.png" />
        </div>
      </div>
      <div className="sm:basis-full px-24 pb-96 md:hidden lg:hidden">
        <p className="nt-title2-text text-secondary font-bold sm:w-95%">과학적일 수 밖에 없는 놀라운 이유.</p>
        <p className="nt-sub-text text-neutral-500 font-regular sm:w-95% pb-32">
          푸드 알고리즘은 미국 사료기준 협회의 영양소 기준인 AAFCO(he Association of American Feed Control Officials) 2020, 유럽 반려동물 식품 산업 연맹인
          FEDIAF Nutrional Guidelines 2020, NRC(Nutrient Requirements of Cats Dogs)연구를 비롯한 다양한 반려동물 논문을 기반으로 설계되었습니다.
        </p>
        <ul>
          <li>
            <img className="h-48 mr-32 opacity-50 hover:opacity-100" src="img/logo-aafco.png" />
          </li>
          <li>
            <img className="h-48 mr-32 opacity-50 hover:opacity-100" src="img/logo-fediaf.png" />
          </li>
          <li>
            <img className="h-48 mr-32 opacity-50 hover:opacity-100" src="img/logo-nrc.png" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section03;
