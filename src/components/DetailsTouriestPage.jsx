import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
const DetailsTouriestPage = () => {
  const spots = useLoaderData();
  console.log(spots);
  const { id } = useParams();

  if (!spots) {
    return <div>No spot found!</div>;
  }

  return (
    <div className="p-20 dark:bg-black">
      <h1 className="text-3xl text-center my-20 text-purple-600 font-bold">
        Tourist Spot Detail
      </h1>
      <div className="grid md:grid-cols-2 gap-5 border p-5 rounded-md shadow-2xl dark:text-white">
        <div>
          <img src={spots.image} alt={spots.tourists_spot_name} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tourists Spot Name : {spots.tourists_spot_name}</h2>
          <p className="mb-3"><span className="text-lg font-bold"> Country Name :</span> {spots.country_Name}</p>
          <p className="mb-3"> <span className="text-lg font-bold">{spots.location}</span></p>
          <p className="mb-3"> <span className="text-lg font-bold">Description :  </span>{spots.short_description}</p>
          <p className="mb-3"><span className="text-lg font-bold"> Average Cost: </span>${spots.average_cost}</p>
          <p className="mb-3"> <span className="text-lg font-bold"> Seasonality: </span>{spots.seasonality}</p>
          <p className="mb-3"> <span className="text-lg font-bold"> Travel Time: </span> {spots.travel_time}</p>
          <p className="mb-3"> <span className="text-lg font-bold">  Total Visitors Per Year : </span> {spots.totalVisitorsPerYear} $</p>
          <p className="mb-3"> 
           <span className="text-lg font-bold"> Added By : </span>{spots.userName} ({spots.userEmail})
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsTouriestPage;
