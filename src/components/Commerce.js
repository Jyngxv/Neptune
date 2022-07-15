import classNames from 'classnames';
import React from 'react';
import '../App.css';

const Commerce = (props) => {
  const text1 = classNames('text-md md:text-lg xl:text-2xl font-bold text-black');
  const text2 = classNames('text-md md:text-lg xl:text-2xl font-bold text-black mb-8 xl:mb-24');
  const text3 = classNames('text-base md:text-md2 font-medium xl:text-md2 text-neutral-800 pl-2');
  return (
    <div className="relative flex flex-row">
      <div className=" basis-2/3">
        <img className="" src={props.c_img}></img>
      </div>
      <div className="my-auto bg-white basis-1/3">
        <div className="flex flex-col">
          <p className={text1}>
            <mark>{props.c_text1}</mark>
          </p>
          <p className={text2}>{props.c_text2}</p>
          <p className={text3}>{props.c_text3}</p>
        </div>
      </div>
      <div className="sec08Dimmed w-100%  absolute bottom-0 h-256"></div>
    </div>
  );
};

export default Commerce;
