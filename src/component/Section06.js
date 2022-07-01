import React from 'react';
import { useScroll } from './Usescroll.js';

const Section06 = () => {
  useScroll();
  return (
    <section id="ddd" className="">
      <div className="container">
        <div className="wrapper pb-0">
          <div className="sm:mb-64 mb-128">
            <div className="flex flex-col sm:text-center">
              <p className="nt-title-text font-black text-black">적당을 모르는</p>
              <p className="nt-title-text font-black text-primary sm:mb-24 mb-48">반려동물 케어</p>
              <p className="nt-sub-text sm:w-100% md:w-4/5 w-3/5 sm:mx-auto text-neutral-500 font-medium">
                사료에서 끝나는 것이 아닌간식, 영양제, 용품까지 섬세하게 고민없는 쇼핑을 도와줍니다. 여기에 얼마나 먹여야하는지까지도, 모든 것에 대한 고민이
                사라지죠.
              </p>
              {/* <div>
                <a href="">
                  <ul className="hover:bg-neutral-300">
                    <li>
                      <img className="w-96" src="img/face01.png" />
                    </li>
                    <li className="mt-8">
                      <div className="flex flex-col pl-32">
                        <div>
                          <p className="nt-sub-text text-neutral-600 font-medium">영양학 수의사</p>
                        </div>
                        <div>
                          <p className="nt-title2-text font-bold mb-0">김정민</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container-expand">
        <div id="expand" className="">
          {/* <video id="expand" className="" autoPlay loop playsInline muted>
          <source src="video/large_2x.mp4" type="video/mp4" />
        </video> */}
        </div>
      </div>
    </section>
  );
};

export default Section06;
