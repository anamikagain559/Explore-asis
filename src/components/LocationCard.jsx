import React from "react";
import { FaComments } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
const LocationCard = ({ image, text }) => {
  return  <div className="bg-white px-2 pt-1 rounded-2xl">
  <div className="overflow-hidden my-0 mx-auto rounded-2xl ">
    <img
      src={image}
      alt=""
      className="rounded-2xl w-[300] h-[300px] hoverImg"
    />
  </div>
  <p className="text-gray pt-4 pb-2 text-xl ">#Travel</p>
  <h5 className="text-2xl py-2 font-semibold dark:text-black">{text}</h5>
  <span className="flex items-center justify-between">
    <div className="bg-white text-gray shadow rounded-sm w-16 p-2 flex items-center gap-1">
      <FaComments className="text-black text-2xl" /> 48 
    </div>
    <div className="flex gap-2"> <FaEye className="mt-1"/>
    <p className="font-semibold dark:text-black">
    23k+ View
    </p></div>
    {/* <div className="bg-primary text-white text-lg text-center w-20 p-1 rounded-md transition-bg hover:bg-white hover:text-primary">
      $1200
    </div> */}
  </span>
</div>;
};

export default LocationCard;
