import classNames from 'classnames';
import React from 'react';
import '../App.css';

const Commerce = (props) => {
  const text1 = classNames('text-2xl font-black text-black');
  const text2 = classNames('text-2xl font-black text-black mb-24');
  const text3 = classNames('font-medium text-base text-neutral-800');
  return (
    <div className="relative w-100% h-auto">
      <div className="absolute top-60% left-10% z-30">
        <div className="flex flex-col">
          <p className={text1}>{props.c_text1}</p>
          <p className={text2}>{props.c_text2}</p>
          <p className={text3}>{props.c_text3}</p>
        </div>
      </div>
      <div className="mx-auto w-960">
        <img src={props.c_img}></img>
      </div>
    </div>
  );
};

export default Commerce;
