import React from 'react';

const Appbtn = (props) => {
  return (
    <div className="text-center lg:text-left">
      <button className="px-48 py-16 font-black text-white rounded-full md:text-base md:py-20 md:px-56 md:px-font-black lg:px-56 text-tiny lg:py-20 cursor:pointer lg:text-base bg-primary hover:bg-white hover:text-primary hover:shadow-xl">
        {props.btn_name}
      </button>
    </div>
  );
};

export default Appbtn;
