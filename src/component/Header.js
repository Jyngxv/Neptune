import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="absolute w-full bg-transparent z-20">
        <div className="container mx-auto bg-transparent">
          <div className="flex flex-wrap flex-row sm:py-24 py-48">
            <div className="flex-none">
              <img className="logo sm:h-40 h-48" src="img/Logo.png" />
            </div>
            <div className="flex flex-row-reverse grow items-center">
              <ul className="">
                <li className="sm:hidden text-xl font-bold text-white opacity-70 hover:opacity-100 mr-48">
                  <a href="">문의하기</a>
                </li>
                <li className="sm:hidden text-xl font-bold text-white opacity-70 hover:opacity-100">
                  <a href="">입점 및 제휴문의</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
