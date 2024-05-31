import React, { useState, useEffect } from "react";
import TouristSpotCard from "./TouristSpotCard";
import { useLoaderData } from "react-router-dom";

const AllTouristSpots = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

  }, []);

  const loadedSpots = useLoaderData();
  const [spots, setSpots] = useState(loadedSpots);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sorting logic based on selected option
    if (selectedOption === "low") {
      setSpots([...spots].sort((a, b) => a.average_cost - b.average_cost));
    } else if (selectedOption === "high") {
      setSpots([...spots].sort((a, b) => b.average_cost - a.average_cost));
    }
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  if (loading) {
    return <div className="flex justify-center items-center"><span className="loading loading-lg"></span></div>;
  }
  return (
    <div className="p-20">
      {loading && ( // Display loading spinner if loading is true
        <span className="loading loading-infinity loading-lg"></span>
      )}
      {!loading && ( // Render content when loading is false
        <>
          <h1 className="text-2xl text-center my-10 text-primary font-poppins font-bold">
            All Tourist Spots: {spots.length}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto flex justify-center items-center"
          >
            <select
              className="select select-bordered w-full max-w-xs"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option disabled selected>
                Sort By Average Cost
              </option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ml-4"
            >
              Sort
            </button>
          </form>

          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {spots.map((spot) => (
              <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllTouristSpots;
