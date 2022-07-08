import React, { useState } from 'react';
import Headline from '../components/Headline';
import Spline from '@splinetool/react-spline';

const Section09 = () => {
  return (
    <section className="bg-bgcolor-100">
      <div className="container ">
        <div className="mb-64">
          <Headline
            textcolor1="text-black"
            textcolor2="text-primary"
            c_headline1="섹션9"
            c_headline2="무지막지한 혜택"
            // c_body1="생애 주기 관리는 반려동물의 체구와 나이에 기반하여 7가지 항목으로 관리방법을 안내합니다."
            // c_body2="고민관리는 15가지 고민 중 선택한 3가지 고민에 따른 관리방법과 솔루션을 제공합니다."
          ></Headline>
        </div>
        <div className="flex flex-col">
          <div className="">
            <div className="flex flex-row py-64 mx-auto rounded-48 hover:bg-[#f7f8fa] hover:shadow-xl">
              <div className="flex items-center pl-64 basis-1/2">
                <div className="">
                  <p className="font-bold text-md3 text-neutral-800">지금 가입하면</p>
                  <p className="mb-16 font-bold text-md3">
                    <mark>56,000원</mark> 쿠폰팩 제공
                  </p>
                  <p className="font-medium text-tiny text-neutral-800">이 곳에 설명을 넣습니다.</p>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="px-48">
                  <div className="p-24 bg-white shadow-xl h-400 rounded-48 hover:shadow-2xl">
                    <Spline className="rounded-24" scene="https://prod.spline.design/8x4Dr-2eIl1o4Gn6/scene.splinecode" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-64  pl-64 mx-auto rounded-48 hover:bg-[#f7f8fa] hover:shadow-xl">
              <div className="basis-1/2">
                <div className="pr-96">
                  <div className="p-24 bg-white shadow-xl h-400 rounded-32 hover:shadow-2xl">
                    <Spline className="rounded-24" scene="https://prod.spline.design/X4tcqt3jpRDjx8Kg/scene.splinecode" />
                  </div>
                </div>
              </div>
              <div className="flex items-center basis-1/2">
                <div className="px-32">
                  <p className="font-bold text-md3 text-neutral-800">단 하나의 상품도</p>
                  <p className="mb-16 font-bold text-md3">
                    <mark>무조건 무료배송</mark>
                  </p>
                  <p className="font-medium text-tiny text-neutral-800">이 곳에 설명을 넣습니다.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-64 mx-auto rounded-48 hover:bg-[#f7f8fa] hover:shadow-xl">
              <div className="flex items-center pl-64 basis-1/2">
                <div className="">
                  <p className="font-bold text-md3 text-neutral-800">반려동물을 등록하면</p>
                  <p className="mb-16 font-bold text-md3">
                    <mark>쿠폰을 또 드림</mark>
                  </p>
                  <p className="font-medium text-tiny text-neutral-800">이 곳에 설명을 넣습니다.</p>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="px-48">
                  <div className="p-24 bg-white shadow-xl h-400 rounded-32 hover:shadow-2xl">
                    <Spline className="rounded-24" scene="https://prod.spline.design/WwqgfV1Xe69SjYzq/scene.splinecode" />
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
