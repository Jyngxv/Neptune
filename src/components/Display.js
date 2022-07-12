import React from 'react';
import classnames from 'classnames';
// linear - wipe;
const Display = (props) => {
  const display1 = classnames(
    'bg-primary  rotate-[340deg] mr-[-7%] xl:ml-0 pl-24 xl:pl-0 xl:rotate-0 lg:bg-transparent  text-left xl:text-left text-4xl md:text-5xl xl:text-6xl font-extrabold',
    props.textcolor1
  );
  const display2 = classnames(
    'bg-white mr-[-7%] xl:bg-transparent xl:linear-wipe text-primary rotate-[340deg] xl:text-secondary xl:rotate-0  xl:mt-0 text-center xl:text-left text-md3 md:text-2xl xl:text-4xl font-extrabold xl:mb-16 mb-8'
  );
  const body1 = classnames('text-center xl:text-left text-tiny md:text-md xl:text-md font-medium text-neutral-300 whitespace-pre-wrap');
  const body2 = classnames('text-center xl:text-left text-tiny md:text-base xl:text-base font-bold text-neutral-300 whitespace-pre-wrap');

  return (
    <div className="pb-240 xl:pb-64">
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
