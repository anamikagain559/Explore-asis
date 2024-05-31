import React from "react";
import { HiStar } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Packages = () => {
  const [touristsSpotData, setTouristsSpotData] = useState(null);
  useEffect(() => {
    fetch("https://travel-website-server-with-auth.vercel.app/touristsSpot")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTouristsSpotData(data);
        console.log(touristsSpotData); // Log data after it's been set in state
      });
  }, []);
  const Card = ({ spot }) => {
    return (
      <div>
        <div className="overflow-hidden my-0 mx-auto rounded-2xl">
          <img
            src={spot.image}
            alt=""
            className="rounded-2xl w-[300] h-[300px] hoverImg"
          />
        </div>
        <h5 className="text-2xl py-4 font-semibold dark:text-white">
          {spot.tourists_spot_name}
        </h5>
        <span className="flex items-center justify-between">
          <div className="bg-white text-gray shadow rounded-sm w-16 p-2 flex items-center gap-1">
            <HiStar className="text-orange" /> 4.8
          </div>
          <p className="dark:text-white">(2.5k Review)</p>
          <div className="bg-primary text-white text-lg text-center w-20 p-1 rounded-md transition-bg hover:bg-white hover:text-primary">
            ${spot.average_cost}
          </div>
        </span>
        <Link to={`TouristsSpotDetails/${spot._id}`}>
          <div className="flex justify-center items-center mt-4">
            <button className="text-white bg-primary text-center w-full p-1 rounded-md transition-bg hover:bg-white hover:text-primary">
              View Details
            </button>
          </div>{" "}
        </Link>
      </div>
    );
  };
  return (
    <div>
      <div className="relative bg-lightGray dark:bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-lightGray my-16 py-16 relative dark:bg-black">
            <div className="max-w-[1400] mx-auto px-3">
              <span className="flex flex-col items-center">
                <p className="text-primary font-bold capitalize tracking-[0.15em]">
                  Popular Packages
                </p>
                <h2 className="text-4xl text-center font-bold capitalize my-4 dark:text-white">
                  Checkout Our Packages
                </h2>
              </span>
              <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10">
                {touristsSpotData ? (
                  touristsSpotData.map((spot, index) => (
                    <Card key={index} spot={spot} />
                  ))
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>

            <img
              src="../assets/img/svg_icon/1.svg"
              alt=""
              className="lg:block hidden absolute -bottom-16 left-0"
            />
            <img
              src="../assets/img/svg_icon/1.svg"
              alt=""
              className="lg:block hidden absolute bottom-0 right-0"
            />
          </div>
        </div>
        <img
          src="https://i.ibb.co/H2B5yQN/intro.webp"
          alt=""
          className="lg:block hidden absolute -top-16 left-0"
        />
      </div>
    </div>
  );
};

export default Packages;
