// import React, { useState } from 'react';
import React, { Component } from 'react';
import '../style/tab.css';
import Commerce from './Commerce';
import { tab } from '@testing-library/user-event/dist/tab';
import Slier02 from '../components/Slider02';

const menuList = {
  0: <Commerce c_text1="지금 만나보세요" c_text2="정말로요?" c_text3="이 곳에 임시 문구" c_img="img/device11.png"></Commerce>,
  1: <Commerce c_text1="당장 만나보세요" c_text2="정말로요?" c_text3="이 곳에 임시 문구" c_img="img/device11.png"></Commerce>,
  2: <Commerce c_text1="롸잇나우 만나보세요" c_text2="정말로요?" c_text3="이 곳에 임시 문구" c_img="img/device11.png"></Commerce>,
  3: <Commerce c_text1="만나보세요" c_text2="정말로요?" c_text3="이 곳에 임시 문구" c_img="img/device11.png"></Commerce>,
};

class Tab extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) => {
    this.setState({ menu: menuIndex });
  };

  render() {
    return (
      <div className="flex flex-col w-100% tab02">
        <div className="mb-128">
          <ul className="">
            <p className="font-bold leading-loose text-md">
              <li className={`${this.state.menu === 0 ? 'active' : ''}`} onClick={() => this.changeMenu(0)}>
                투데이
              </li>
            </p>
            <p className="font-bold leading-loose text-md">
              <li className={`${this.state.menu === 1 ? 'active' : ''}`} onClick={() => this.changeMenu(1)}>
                랭킹
              </li>
            </p>
            <p className="font-bold leading-loose text-md">
              <li className={`${this.state.menu === 2 ? 'active' : ''}`} onClick={() => this.changeMenu(2)}>
                푸드 배송
              </li>
            </p>
            <p className="font-bold leading-loose text-md">
              <li className={`${this.state.menu === 3 ? 'active' : ''}`} onClick={() => this.changeMenu(3)}>
                포토 어워즈
              </li>
            </p>
          </ul>
        </div>
        <div className="basis-2/3">
          <div className="ml-auto contentArea">{menuList[this.state.menu]}</div>
        </div>
      </div>
    );
  }
}

export default Tab;
