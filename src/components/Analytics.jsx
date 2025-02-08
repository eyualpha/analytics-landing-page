import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid  md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="laptop" />
        <div className=" flex flex-col justify-center">
          <p className=" uppercase text-[#00df9a] font-bold">
            Data Analytics Dashbord
          </p>
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            maiores atque, dolores dolorem esse, odit alias ad obcaecati aut
            iusto, cum adipisci dignissimos libero. Ut maiores quaerat saepe
            consequatur natus!
          </p>
          <button className="  bg-[#003000] w-[200px] text-[#00df9a] p-2 rounded-md mt-4 self-center md:self-start cursor-pointer">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
