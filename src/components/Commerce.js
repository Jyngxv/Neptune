import classNames from 'classnames';
import React from 'react';
import '../App.css';

const Commerce = (props) => {
  const text1 = classNames('text-md md:text-lg xl:text-2xl font-extrabold text-black');
  const text2 = classNames('text-md md:text-lg xl:text-2xl font-extrabold text-black mb-8 xl:mb-24');
  const text3 = classNames('text-tiny md:text-md font-medium xl:text-base text-neutral-800');
  return (
    <div className="relative w-100% h-auto">
      <div className="absolute top-5% right-5% xl:top-10% xl:right-5% z-30 bg-white p-24">
        <div className="flex flex-col">
          <p className={text1}>{props.c_text1}</p>
          <p className={text2}>{props.c_text2}</p>
          <p className={text3}>{props.c_text3}</p>
        </div>
      </div>
      <div className="mx-auto xl:w-960">
        <img src={props.c_img}></img>
      </div>
    </div>
  );
};

export default Commerce;
