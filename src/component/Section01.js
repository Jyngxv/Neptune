import React from 'react';

const Section01 = () => {
  return (
    <section>
      <div>
        <div className="absolute t-0 w-screen h-screen bg-black opacity-50 z-10"></div>
        <div className="container">
          <div className="nt-text-box-01 absolute sm:bottom-15% md:bottom-96 lg:bottom-10% bg-transparent z-20">
            <div className="mb-16">
              <p className="nt-header-text sm:grow font-black text-white sm:text-center ">내 반려동물에게</p>
              <p className="nt-header-text sm:grow font-black text-secondary sm:text-center sm:mb-16">딱 맞춤.</p>
            </div>
            <div className="mb-48">
              <p className="nt-sub-text text-neutral-300 font-medium leading-9 sm:text-center ">
                고민에 기반한 상품 추천부터 건강관리까지
                <br />
                가장 과학적인 펫 플랫폼, 푸드
              </p>
            </div>
            <div>
              <a href="https://pood.onelink.me/TunM/dee08b7c" target="_blank">
                <button className="btn-0 sm:px-32 sm:py-16 px-48 py-20 bg-primary rounded-full text-xl text-white font-black">푸드 앱 다운로드</button>
              </a>
            </div>
          </div>
          <div className="h-screen">
            <video className="nt-video" autoPlay loop playsInline muted>
              <source src="video/toss-blog.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section01;
