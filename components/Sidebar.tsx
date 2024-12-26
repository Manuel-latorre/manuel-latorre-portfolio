import Image from 'next/image';
import React from 'react';
import avatar1 from '../public/avatar1.png';
import Contacts from './Contacts';

const Sidebar = () => {
  return (
    <div className="bg-[#2C2C2C] w-fit p-4 rounded-xl flex flex-col justify-between items-center">
      <div className="flex flex-col items-center">
        <div className="w-[200px] h-[200px] relative">
          <Image
            src={avatar1}
            alt="Profile picture"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-xl font-semibold text-white">Manuel Latorre</h1>
          <h2 className="text-base font-semibold text-white">Desarrollador Fullstack</h2>
        </div>
      </div>
      
      <div className="w-[30%] h-3 rounded-full bg-[#4DE58F] my-8"></div>
      
      <div className="w-full">
        <Contacts />
      </div>
    </div>
  );
};

export default Sidebar;