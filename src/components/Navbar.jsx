import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex items-center h-24 justify-between max-w-[1240px] mx-auto px-4">
      <h1 className=" w-full text-3xl font-bold text-[#00df9a]">React</h1>
      <ul className="uppercase hidden md:flex">
        <li className="p-4 ">Home</li>
        <li className="p-4 ">Company</li>
        <li className="p-4 ">Resource</li>
        <li className="p-4 ">About</li>
        <li className="p-4 ">Contact</li>
      </ul>
      <div onClick={handleNav} className=" block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? " fixed top-0 left-0 w-[60%] border-r-1 h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className=" w-full text-3xl font-bold text-[#00df9a] mx-4 mt-8">React</h1>

        <ul className="pt-12 uppercase">
          <li className="p-4 border-b-gray-600 border-b-1">Home</li>
          <li className="p-4 border-b-gray-600 border-b-1">Company</li>
          <li className="p-4 border-b-gray-600 border-b-1">Resource</li>
          <li className="p-4 border-b-gray-600 border-b-1">About</li>
          <li className="p-4 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
