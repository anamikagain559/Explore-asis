import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import TouristSpotCard from "./TouristSpotCard";
import { Typewriter } from "react-simple-typewriter";
const CountrySpots = () => {
  const loadedSpots = useLoaderData();
  const { country_Name } = useParams();


  // Filter spots based on country name
  const filteredSpots = loadedSpots.filter(
    (spot) => spot.country_Name === country_Name
  );
  console.log(filteredSpots);
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary text-center m-5">Country :  {country_Name}</h2>
    
      <div className="grid md:grid-cols-2 gap-4">
        {filteredSpots.map((spot) => (
          <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>
        ))}
      </div>
    </div>
  );
};

export default CountrySpots;
