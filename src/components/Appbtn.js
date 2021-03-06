import React from 'react';

const Appbtn = (props) => {
  return (
    <div className="text-center xl:text-left">
      <button className="font-bold text-white rounded-full px-36 py-14 md:text-base md:py-20 md:px-56 md:px-font-bold xl:px-40 text-base xl:py-20 cursor:pointer xl:text-base bg-primary hover:bg-white hover:text-primary hover:shadow-xl">
        {props.btn_name}
      </button>
    </div>
  );
};

export default Appbtn;
