import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className=" w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="w-full shadow-2xl rounded-lg felx flex-col p-4 my-4 hover:scale-105 duration-300 ">
          <img className="w-20 mx-auto mt-[-3rem]" src={single} alt="" />
          <h1 className="text-2xl font-bold text-center py-8">Single User</h1>
          <p className=" text-center font-bold text-4xl">$149</p>
          <div className=" text-center font-medium">
            <p className=" border-b border-gray-200 py-2 mx-8 mt-4">
              500 GB storage
            </p>
            <p className=" border-b border-gray-200 py-2 mx-8 mt-4">
              1 Granted User
            </p>
            <p className=" border-b border-gray-200 py-2 mx-8 mt-4">
              Send Up to 2 GB
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] text-[#003000]  rounded-md mt-4  mx-auto my-6 px-6  py-3 cursor-pointer">Start Trial</button>
        </div>

        <div className="w-full shadow-2xl bg-gray-100 rounded-lg felx flex-col p-4 my-8 md:my-0 hover:scale-105 duration-300 ">
          <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={double} alt="" />
          <h1 className="text-2xl font-bold text-center py-8">Partnership</h1>
          <p className=" text-center font-bold text-4xl">$199</p>
          <div className=" text-center font-medium">
            <p className=" border-b border-gray-200 py-2 mx-8 mt-4">
              1 TB storage
            </p>
            <p className=" border-b border-gray-200 py-2 mx-8 mt-4">
        3 Granted User
            </p>
            <p className=" border-b border-gray-200 py-2 mx-8 mt-4">
              Send Up to 10 GB
            </p>
          </div>
          <button className="text-[#00df9a] w-[200px] bg-[#003000]  rounded-md mt-8  mx-auto my-6 px-6  py-3 cursor-pointer">Start Trial</button>
        </div>

        <div className="w-full shadow-2xl rounded-lg felx flex-col p-4 my-4 hover:scale-105 duration-300 ">
          <img className="w-20 mx-auto mt-[-3rem]" src={triple} alt="" />
          <h1 className="text-2xl font-bold text-center py-8">Group Account</h1>
          <p className=" text-center font-bold text-4xl">$299</p>
          <div className=" text-center font-medium">
            <p className=" border-b border-gray-200 py-2 mx-8 mt-4">
              5 TB storage
            </p>
            <p className=" border-b border-gray-200 py-2 mx-8 mt-4">
              10 Granted User
            </p>
            <p className=" border-b border-gray-200 py-2 mx-8 mt-4">
              Send Up to 20 GB
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] text-[#003000]  rounded-md mt-4  mx-auto my-6 px-6  py-3 cursor-pointer">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
