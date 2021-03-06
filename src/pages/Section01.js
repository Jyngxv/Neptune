import React from 'react';
import Dimmed from '../components/Dimmed';
import Display from '../components/Display';
import Appbtn from '../components/Appbtn';

const Section01 = () => {
  return (
    <section className="h-screen">
      <div>
        <Dimmed />
        <div className="absolute bottom-[7%] w-100% xl:w-1280 xl:left-0 xl:right-0 mx-auto xl:bottom-10%  overflow-x-hidden">
          <div className="mx-auto xl:px-0">
            <Display
              textcolor1="text-white"
              textcolor2="text-secondary"
              c_display1="HYPER"
              c_display2="PETSONALIZATION"
              c_body1="내 반려동물에게 딱 맞춘 커머스 플랫폼 - 푸드"
              // c_body2="초개인화 맞춤형 펫 커머스 플랫폼"
            ></Display>
          </div>
          <div className="">
            <a href="https://pood.onelink.me/TunM/dee08b7c" target="_blank">
              <Appbtn btn_name="푸드 앱 다운로드"></Appbtn>
            </a>
          </div>
        </div>

        <video className="nt-video" autoPlay loop playsInline muted>
          <source src="video/toss-blog.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Section01;
