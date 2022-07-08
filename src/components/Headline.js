import React from 'react';
import classnames from 'classnames';

const Headline = (props) => {
  const headline1 = classnames('text-md md:text-xl lg:text-xl font-black', props.textcolor1, props.textalign);
  const headline2 = classnames('text-md md:text-xl lg:text-xl font-black mb-24', props.textcolor2, props.textalign);
  const body2 = classnames('text-tiny md:text-base lg:text-base font-medium text-neutral-800 whitespace-pre-wrap');
  return (
    <div className="wrapper">
      <div className="flex flex-col">
        <p className={headline1}>{props.c_headline1}</p>
        <p className={headline2}>{props.c_headline2}</p>
        <p className={body2}>{props.c_body1}</p>
        <p className={body2}>{props.c_body2}</p>
      </div>
    </div>
  );
};

export default Headline;
