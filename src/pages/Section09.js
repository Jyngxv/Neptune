import React, { useState } from 'react';
import Headline from '../components/Headline';
import Spline from '@splinetool/react-spline';

const Section09 = () => {
  return (
    <section className="bg-bgcolor-100">
      <div className="container px-24 py-96 md:px-48 md:py-128 xl:px-0 xl:py-256">
        <div className="mb-32 md:mb-64 xl:mb-64">
          <Headline
            textcolor1="text-black"
            textcolor2="text-primary"
            textcolor3="text-neutral-900"
            c_headline1="섹션9"
            c_headline2="무지막지한 혜택"
            // c_body1="생애 주기 관리는 반려동물의 체구와 나이에 기반하여 7가지 항목으로 관리방법을 안내합니다."
            // c_body2="고민관리는 15가지 고민 중 선택한 3가지 고민에 따른 관리방법과 솔루션을 제공합니다."
          ></Headline>
        </div>
        <div className="flex flex-col">
          <div className="">
            <div className="flex flex-col xl:flex-row xl:py-64 mx-auto xl:rounded-48 xl:hover:bg-[#f7f8fa] xl:hover:shadow-md">
              <div className="flex items-center mx-auto md:mx-0 xl:pl-64 basis-1/2">
                <div className="text-center md:text-left">
                  <p className="text-base font-bold sm:leading-snug md:text-md3 xl:text-lg text-neutral-800">지금 가입하면</p>
                  <p className="mb-24 text-base font-bold md:mb-32 md:text-md3 xl:mb-24 xl:text-lg">
                    <mark>56,000원</mark> 쿠폰팩 제공
                  </p>
                  <p className="hidden font-medium xl:block xl:text-base text-neutral-800">이 곳에 설명을 넣습니다.</p>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="xl:px-48">
                  <div className="p-24 bg-white shadow-xl h-400 rounded-24 xl:rounded-32 xl:hover:shadow-2xl">
                    {/* <Spline className="rounded-24" scene="https://prod.spline.design/8x4Dr-2eIl1o4Gn6/scene.splinecode" /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row py-64 md:py-96 xl:pl-64 mx-auto rounded-48 xl:hover:bg-[#f7f8fa] xl:hover:shadow-md">
              <div className="flex items-center mx-auto xl:hidden md:mx-0 basis-1/2">
                <div className="text-center xl:px-32 md:text-left">
                  <p className="text-base font-bold sm:leading-snug md:text-md3 xl:text-lg text-neutral-800">단 하나의 상품도</p>
                  <p className="mb-16 text-base font-bold md:text-md3 md:mb-32 xl:text-lg">
                    <mark>무조건 무료배송</mark>
                  </p>
                  <p className="hidden text-base font-medium text-neutral-800">이 곳에 설명을 넣습니다.</p>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="xl:pr-96">
                  <div className="p-24 bg-white shadow-xl h-400 rounded-24 xl:rounded-32 hover:shadow-2xl">
                    {/* <Spline className="rounded-24" scene="https://prod.spline.design/X4tcqt3jpRDjx8Kg/scene.splinecode" /> */}
                  </div>
                </div>
              </div>
              <div className="flex items-center hidden mx-auto my-auto xl:block xl:mx-0 basis-1/2">
                <div className="px-32 text-center xl:text-left">
                  <p className="text-lg font-bold text-neutral-800">단 하나의 상품도</p>
                  <p className="mb-16 text-lg font-bold">
                    <mark>무조건 무료배송</mark>
                  </p>
                  <p className="text-base font-medium text-neutral-800">이 곳에 설명을 넣습니다.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:py-64 mx-auto rounded-48 xl:hover:bg-[#f7f8fa] xl:hover:shadow-md">
              <div className="flex items-center mx-auto xl:pl-64 md:mx-0 basis-1/2">
                <div className="text-center md:text-left">
                  <p className="text-base font-bold sm:leading-snug md:text-md3 xl:text-lg text-neutral-800">반려동물을 등록하면</p>
                  <p className="mb-16 text-base font-bold md:mb-32 md:text-md3 xl:text-lg">
                    <mark>쿠폰을 또 드림</mark>
                  </p>
                  <p className="hidden text-base font-medium xl:block text-neutral-800">이 곳에 설명을 넣습니다.</p>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="xl:px-48">
                  <div className="p-24 bg-white shadow-xl h-400 rounded-24 xl:rounded-32 hover:shadow-2xl">
                    {/* <Spline className="rounded-24" scene="https://prod.spline.design/WwqgfV1Xe69SjYzq/scene.splinecode" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section09;
