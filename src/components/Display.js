import React from 'react';
import classnames from 'classnames';

const Display = (props) => {
  const display1 = classnames('text-center xl:text-left text-xl md:text-5xl xl:text-4xl font-extrabold', props.textcolor1);
  const display2 = classnames('linear-wipe mt-[-12px] xl:mt-0 text-center xl:text-left text-md3 md:text-2xl xl:text-4xl font-extrabold xl:mb-16 mb-8');
  const body1 = classnames('text-center xl:text-left text-tiny md:text-md xl:text-md font-medium text-neutral-300 whitespace-pre-wrap');
  const body2 = classnames('text-center xl:text-left text-tiny md:text-base xl:text-base font-bold text-neutral-300 whitespace-pre-wrap');

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
