import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className=" text-white ">
      <div className="max-w-[800px] text-center w-full h-screen flex m-auto items-center justify-center flex-col mt-[-96px]">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>

        <div className="md:text-5xl sm:text-4xl text-xl font-bold flex">
          <p className="pr-3 py-4">Flexible, financing for </p>
          <ReactTyped
            className="py-4"
            strings={[" BTB", " BTC", " SAAS"]}
            typeSpeed={80}
            backSpeed={80}
            loop={true}
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue BTB, BTC & SAAS
          platforms.
        </p>
      </div>
    </div>
  );
};

export default Hero;
