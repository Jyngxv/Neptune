import React, { useState, Compoent } from 'react';
import '../style/tab.css';
import { tab } from '@testing-library/user-event/dist/tab';

const menuList = {
  0: <img src="img/device09.png"></img>,
  1: <img src="img/device10.png"></img>,
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
      <div className="flex flex-col xl:flex-row w-100%">
        <div className="flex items-center mb-32 grow md:mb-64 xl:mb-0 xl:basis-1/3">
          <ul>
            <p className="text-base font-bold md:text-md2 md:leading-relaxed xl:leading-loose xl:block xl:text-md3">
              <li className={`${this.state.menu === 0 ? 'active' : ''}`} onClick={() => this.changeMenu(0)}>
                라이프사이클 관리
              </li>
            </p>
            <p className="text-base font-bold xl:leading-loose md:leading-relaxed xl:block md:text-md2 xl:text-md3">
              <li className={`${this.state.menu === 1 ? 'active' : ''}`} onClick={() => this.changeMenu(1)}>
                고민 관리
              </li>
            </p>
          </ul>
        </div>
        <div className="xl:basis-2/3">
          <div className="ml-auto contentArea">{menuList[this.state.menu]}</div>
        </div>
      </div>
    );
  }
}

export default Tab;
