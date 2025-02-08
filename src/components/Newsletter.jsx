import React from "react";

const Newsletter = () => {
  return (
    <div className=" text-white w-full py-16 px-4">
      <div className=" max-w-[1240px] grid mx-auto lg:grid-cols-3 sm:items-center">
        <div className="lg:col-span-2">
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4 ">
          <div className="w-full flex flex-col sm:flex-row">
            <input
              className="bg-white text-gray-700 flex w-full p-3  max-w-[500px] rounded-md"
              type="email"
              placeholder="Enter Email:"
            />
            <button className="bg-[#00df9a] w-[200px] text-[#003000] p-2 rounded-md mt-4 sm:ml-4 md:ml-4 sm:mt-0 cursor-pointer">
              Notify Me
            </button>
          </div>
          <p className=" my-4">
            We care about protection of your data. Read about our{" "}
            <span className="text-[#00df9a] underline"> privacy policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
