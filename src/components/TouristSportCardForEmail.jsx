import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { LuClipboardEdit } from "react-icons/lu";
import { GrFormView } from "react-icons/gr";
import Swal from "sweetalert2";

function TouristSportCardForEmail({ spot, spots, setSpots }) {
  const { _id } = spot;
  
  const truncateString = (str, num) => {
    const words = str.split(" ");
    if (words.length <= num) {
      return str;
    }
    const truncated = words.slice(0, num).join(" ");
    return truncated + "...";
  };

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
        fetch(`https://travel-website-server-with-auth.vercel.app/touristsSpot/${_id}`, {
          method: "DELETE",
        })
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
    <>
      <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img src={spot.image} alt="ui/ux review check" />
          <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          <button
            class="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
              </svg>
            </span>
          </button>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {spot.tourists_spot_name}
            </h5>
            <p>
              <span className="font-bold text-gray">Average Cost : $</span>{" "}
              {spot.average_cost}
            </p>
          </div>
          <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            {truncateString(spot.short_description, 30)}
          </p>
          <div className=" flex  gap-4 mt-4 justify-between">
            <p>
              <span className="font-bold">Travel Time: </span>{" "}
              {new Date(spot.travel_time).toLocaleDateString()}
            </p>
            <p>
              <span className="font-bold">Season : </span> {spot.seasonality}
            </p>
          </div>

          <div className=" flex flex-col gap-2 mt-4">
            <p>
              <span className="font-bold">Total Visitors Per Year :</span>{" "}
              {spot.totalVisitorsPerYear}
            </p>
            <p></p>
            <p></p>
          </div>

          <div className="inline-flex flex-wrap items-center gap-3 mt-8 group gap-4">
            <span
              onClick={() => handleDelete(_id)}
              className="flex gap-2 border border-gray-900/5 bg-gray-900/5 p-3 rounded-2xl"
            >
              <RiDeleteBin5Fill className="text-[#FF0000]" />
              <p className="-mt-1 cursor-pointer">Delete</p>
            </span>
            <Link to={`/updateTouristsSpot/${_id}`}>
              <span className="flex gap-2 border border-gray-900/5 bg-gray-900/5 p-3 rounded-2xl hover:bg-gray-700/5 hover:border-gray-700">
                <LuClipboardEdit className="text-[#00d5ff]" />
                <p className="-mt-1">Edit</p>
              </span>
            </Link>
            <Link to={`/TouristsSpotDetails/${_id}`}>
              <span className="flex gap-2 border border-gray-900/5 bg-gray-900/5 p-3 rounded-2xl">
                <GrFormView className="text-[#2e7d3b]" />
                <p className="-mt-1">View Details</p>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TouristSportCardForEmail;
