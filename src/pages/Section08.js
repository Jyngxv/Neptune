import React, { useState } from 'react';
import Headline from '../components/Headline';
import Tab02 from '../components/Tab02';
const Section08 = () => {
  return (
    <section className="bg-bgcolor-100">
      <div className="container px-24 py-96 md:px-48 md:py-128 xl:px-0 xl:py-256">
        <div className="md:mb-64">
          <Headline
            textcolor1="text-black"
            textcolor2="text-primary"
            c_headline1="섹션08"
            c_headline2="슈퍼세일"
            // c_body1="생애 주기 관리는 반려동물의 체구와 나이에 기반하여 7가지 항목으로 관리방법을 안내합니다."
            // c_body2="고민관리는 15가지 고민 중 선택한 3가지 고민에 따른 관리방법과 솔루션을 제공합니다."
          ></Headline>
        </div>
        <div className="flex flex-row">
          <Tab02></Tab02>
        </div>
      </div>
    </section>
  );
};

export default Section08;
