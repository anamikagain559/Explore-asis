// Inside the DetailsTouriestPage component
import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import TouristSpotCard from "./TouristSpotCard";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvide";
import TouristSportCardForEmail from "./TouristSportCardForEmail";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { LuClipboardEdit } from "react-icons/lu";
import { GrFormView } from "react-icons/gr";
const DetailsTouristPageEmail = () => {
  const loadedSpots = useLoaderData();
  const { email } = useParams();
  const { user, logOut } = useContext(AuthContext);
  const filteredSpots = loadedSpots.filter((spot) => spot.userEmail === email);
  const [spots, setSpots] = useState(filteredSpots);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://travel-website-server-with-auth.vercel.app/touristsSpot/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Tourists Spot has been deleted.",
                "success"
              );
              const remaining = spots.filter((spt) => spt._id !== _id);
              setSpots(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="p-20">
      <h1 className="text-2xl text-center my-10 text-primary  font-poppins font-bold">
        Tourist Spots Added By Me: {filteredSpots.length}
      </h1>
      {/* <div className="grid md:grid-cols-3 gap-4 mt-10">
        {spots.map((spot) => (
          <TouristSportCardForEmail
            key={spot._id}
            spot={spot}
            spots={spots}
            setSpots={setSpots}
          ></TouristSportCardForEmail>
        ))}
      </div> */}

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Spot's Name</th>

              <th>Location</th>
              <th>Average Cost</th>
              <th>Seasonality</th>
              <th>Travel Time</th>
              <th>Total Visitors Per Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {spots.map((spot, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={spot.image}
                          alt={`Avatar of ${spot.tourists_spot_name}`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{spot.tourists_spot_name}</div>
                      <div className="text-sm opacity-50">
                        {spot.country_Name}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{spot.location}</td>
                <td>{spot.average_cost}</td>
                <td>{spot.seasonality}</td>
                <td> {new Date(spot.travel_time).toLocaleDateString()}</td>
                <td>{spot.totalVisitorsPerYear}</td>
                <td>
                  <div className="flex gap-2">
                    <span
                      onClick={() => handleDelete(spot._id)}
                      className="flex gap-2 border border-gray-900/5 bg-gray-900/5 p-3 rounded-2xl"
                    >
                      <RiDeleteBin5Fill className="text-[#FF0000]" />
                      <p className="-mt-1 cursor-pointer">Delete</p>
                    </span>
                    <Link to={`/updateTouristsSpot/${spot._id}`}>
                      <span className="flex gap-2 border border-gray-900/5 bg-gray-900/5 p-3 rounded-2xl hover:bg-gray-700/5 hover:border-gray-700">
                        <LuClipboardEdit className="text-[#00d5ff]" />
                        <p className="-mt-1">Update</p>
                      </span>
                    </Link>
                    <Link to={`/TouristsSpotDetails/${spot._id}`}>
                      <span className="flex gap-2 border border-gray-900/5 bg-gray-900/5 p-3 rounded-2xl">
                        <GrFormView className="text-[#2e7d3b]" />
                        <p className="-mt-1">View </p>
                      </span>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsTouristPageEmail;
