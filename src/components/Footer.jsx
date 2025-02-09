import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 text-gray-300 ">
      <div className="mb-4">
        <h1 className=" w-full text-3xl font-bold text-[#00df9a]">React</h1>
        <p className=" py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          debitis adipisci expedita sed eaque amet consectetur adipisicing.
        </p>
        <div className=" flex gap-2 md:w-[75%] justify-between">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between md:px-4 ">
        <div className="">
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className=" py-2 text-sm">Commerce</li>
            <li className=" py-2 text-sm">Marketing</li>
            <li className=" py-2 text-sm">Analytics</li>
            <li className=" py-2 text-sm">Insights</li>
          </ul>
        </div>

        <div className="">
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className=" py-2 text-sm">About</li>
            <li className=" py-2 text-sm">Blogs</li>
            <li className=" py-2 text-sm">Jobs</li>
            <li className=" py-2 text-sm">press</li>
          </ul>
        </div>

        <div className="">
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className=" py-2 text-sm">Pricing</li>
            <li className=" py-2 text-sm">Documentaiton</li>
            <li className=" py-2 text-sm">Guides</li>
            <li className=" py-2 text-sm">API Status</li>
          </ul>
        </div>

        <div className="">
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className=" py-2 text-sm">Claim</li>
            <li className=" py-2 text-sm">Policy</li>
            <li className=" py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
