import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="absolute z-20 w-full bg-transparent">
        <div className="mx-auto bg-transparent container_header">
          <div className="flex flex-row flex-wrap py-32 md:py-48 lg:py-48">
            <div className="flex-none">
              <img className="h-48 md:h-48 lg:h-48 logo" src="img/Logo.png" />
            </div>
            <div className="flex flex-row-reverse items-center grow">
              <ul className="hidden md:block lg:block">
                <li className="mr-48 font-medium text-white md:text-tiny lg:text-tiny opacity-70 hover:opacity-100">
                  <a href="">문의하기</a>
                </li>
                <li className="font-medium text-white md:text-tiny lg:text-tiny opacity-70 hover:opacity-100">
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
