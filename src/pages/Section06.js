import React, { useEffect, useState } from 'react';
import Headline from '../components/Headline';
import Tab from '../components/Tab01';
import { useRive } from '@rive-app/react-canvas';

const Section06 = () => {
  const params = {
    src: 'img/centurion.riv',
    autoplay: true,
  };
  const { RiveComponent, rive } = useRive(params);
  return (
    <section>
      <div className="container">
        <div className="mb-128">
          <Headline
            textcolor1="text-black"
            textcolor2="text-primary"
            c_headline1="섹션6"
            c_headline2="맞춤형 비법"
            c_body1="생애 주기 관리는 반려동물의 체구와 나이에 기반하여 7가지 항목으로 관리방법을 안내합니다."
            c_body2="고민관리는 15가지 고민 중 선택한 3가지 고민에 따른 관리방법과 솔루션을 제공합니다."
          ></Headline>
        </div>
        <div className="flex flex-row">
          <Tab></Tab>
        </div>
      </div>
    </section>
  );
};

export default Section06;
