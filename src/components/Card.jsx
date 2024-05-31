import React from "react";
import { Link } from "react-router-dom";
const Card = ({ country }) => {
  const { _id, country_Name, description, imageURL } = country;
  console.log(country);
  return (
    <Link to={`/countrySpot/${country_Name}`}>
      <div className=" m-2 lg:w-[440px] bg-base-100 shadow-xl relative rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-105">
        <figure className="relative rounded-2xl overflow-hidden">
          <img src={imageURL} alt="Shoes" className="rounded-2xl" />
          <div className="absolute top-0 right-0 p-2 transition-all duration-300">
            <button className="text-primary bg-lightGray px-2 py-2 rounded-2xl shadow-md hover:text-white hover:bg-primary transform hover:scale-105 font-bold">
              3 packages
            </button>
          </div>
          <div className="absolute bottom-0 left-0 p-2 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white">{country_Name}</h2>
            <p className="text-white">{description}</p>
          </div>
        </figure>
      </div>
    </Link>
  );
};

export default Card;
