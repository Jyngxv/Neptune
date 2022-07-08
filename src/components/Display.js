import React from 'react';
import classnames from 'classnames';

const Display = (props) => {
  const display1 = classnames('font-Gilory text-center lg:text-left text-lg md:text-2xl lg:text-4xl font-black', props.textcolor1);
  const display2 = classnames('linear-wipe font-Gilroy text-center lg:text-left text-lg md:text-2xl lg:text-4xl font-black mb-16');
  const body1 = classnames('text-center lg:text-left text-tiny md:text-base lg:text-md font-bold text-neutral-300 whitespace-pre-wrap');
  const body2 = classnames('text-center lg:text-left text-tiny md:text-base lg:text-base font-bold text-neutral-300 whitespace-pre-wrap');

  return (
    <div className="pb-48">
      <div className="flex flex-col">
        <p className={display1}>{props.c_display1}</p>
        <p className={display2}>{props.c_display2}</p>
        <p className={body1}>{props.c_body1}</p>
        <p className={body2}>{props.c_body2}</p>
      </div>
    </div>
  );
};

export default Display;
