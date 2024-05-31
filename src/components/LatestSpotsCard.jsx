import React from 'react'
import { HiStar } from "react-icons/hi";
const LatestSpotsCard = (spot) => {
  return (
    <div>
    <div className="overflow-hidden my-0 mx-auto rounded-2xl">
      <img
        src={spot.image}
        alt=""
        className="rounded-2xl w-[300] h-[300px] hoverImg"
      />
    </div>
    <h5 className="text-2xl py-4 font-semibold">{spot.tourists_spot_name}</h5>
    <span className="flex items-center justify-between">
      <div className="bg-white text-gray shadow rounded-sm w-16 p-2 flex items-center gap-1">
        <HiStar className="text-orange" /> 4.8
      </div>
      <p>Total Visitors({spot.totalVisitorsPerYear}) per year</p>
      <div className="bg-primary text-white text-lg text-center w-20 p-1 rounded-md transition-bg hover:bg-white hover:text-primary">
      ${spot.average_cost}
      </div>
    </span>
    <button>View Details</button>
  </div>
  )
}

export default LatestSpotsCard