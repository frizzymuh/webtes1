import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-transparent z-50">
      <div className="py-4 px-2 min-[320px]:px-6 sm:px-12 md:px-18 lg:px-24 xl:px-30">
        <div className="flex items-center justify-between">
          <div className="text-white font-extrabold text-3xl md:mx-0 hidden sm:block">
            <a href="/home" className="cursor-pointer">
              Syllogism
            </a>
          </div>
          <div className="absolute top-[4812px] left-[64px] text-[30px] font-extrabold text-left inline-block w-52 h-[51px] cursor-pointer">
            Syllogism
          </div>
          <div className='border-r-2 h-auto min-[320px]:hidden'></div>
          <ul className="flex sm:space-x-4 space-x-2 md:space-x-8 lg:space-x-12">
            <li><a href="/home" className="text-white hover:text-gray-300 text-xs sm:text-lg">About</a></li>
            <li><a href="/experience" className="text-white hover:text-gray-300 text-xs sm:text-lg">Kelas</a></li>
            <li><a href="/experience" className="text-white hover:text-gray-300 text-xs sm:text-lg">Login/Sign up</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
