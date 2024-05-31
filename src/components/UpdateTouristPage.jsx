import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css";
import "./UpdateTouristPage.css";
const UpdateTouristPage = () => {
  const { id } = useParams();
  console.log(id);
  const [formData, setFormData] = useState({
    // State to hold form data
    image: "",
    tourists_spot_name: "",
    country_Name: "",
    location: "",
    short_description: "",
    average_cost: "",
    seasonality: "",
    travel_time: new Date(),
    totalVisitorsPerYear: "",
  });

  useEffect(() => {
    // Fetch the existing tourist spot data when component mounts
    fetch(`https://travel-website-server-with-auth.vercel.app/touristsSpot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Set the form data with the existing data
        setFormData({
          image: data.image,
          tourists_spot_name: data.tourists_spot_name,
          country_Name: data.country_Name,
          location: data.location,
          short_description: data.short_description,
          average_cost: data.average_cost,
          seasonality: data.seasonality,
          travel_time: new Date(data.travel_time),
          totalVisitorsPerYear: data.totalVisitorsPerYear,
        });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      travel_time: date,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send updated data to the server
    fetch(`https://travel-website-server-with-auth.vercel.app/touristsSpot/${id}`, {
      method: "PUT", // Use PUT method for updating existing data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Tourists spot updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });

          // Reset the form data state
          setFormData({
            image: "",
            tourists_spot_name: "",
            country_Name: "",
            location: "",
            short_description: "",
            average_cost: "",
            seasonality: "",
            travel_time: new Date(),
            totalVisitorsPerYear: "",
          });
        }
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 text-center text-primary">
        Update Tourists Spot
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tourists_spot_name" className="block mb-2">
            Tourists Spot Name
          </label>
          <input
            type="text"
            id="tourists_spot_name"
            name="tourists_spot_name"
            value={formData.tourists_spot_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country_Name" className="block mb-2">
            Country Name
          </label>
          <input
            type="text"
            id="country_Name"
            name="country_Name"
            value={formData.country_Name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="short_description" className="block mb-2">
            Short Description
          </label>
          <textarea
            id="short_description"
            name="short_description"
            value={formData.short_description}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="average_cost" className="block mb-2">
            Average Cost
          </label>
          <input
            type="number"
            id="average_cost"
            name="average_cost"
            value={formData.average_cost}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="seasonality" className="block mb-2">
            Seasonality
          </label>
          <select
            id="seasonality"
            name="seasonality"
            value={formData.seasonality}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          >
            <option value="">Select Seasonality</option>
            <option value="Summer">Summer</option>
            <option value="Winter">Winter</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="travel_time" className="block mb-2">
            Travel Time
          </label>
          <DatePicker
            selected={formData.travel_time}
            onChange={handleDateChange}
            style={{ width: "100%" }} // Set inline style for width
            className="w-full pl-3 pr-[300px] py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" // Maintain other styles
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="totalVisitorsPerYear" className="block mb-2">
            Total Visitors Per Year
          </label>
          <input
            type="number"
            id="totalVisitorsPerYear"
            name="totalVisitorsPerYear"
            value={formData.totalVisitorsPerYear}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTouristPage;
