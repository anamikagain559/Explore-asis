import React, { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvide";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css";

const AddTouristsSpotPage = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    tourists_spot_name: "",
    country_Name: "",
    location: "",
    short_description: "",
    average_cost: "",
    seasonality: "",
    travel_time: new Date(),
    totalVisitorsPerYear: "",
    userEmail: "",
    userName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, travel_time: date });
  };
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on form submission
    
    const updatedFormData = {
      ...formData,
      userEmail: user.email,
      userName: user.displayName,
    };
    // Your form submission logic
    fetch("https://travel-website-server-with-auth.vercel.app/touristsSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // Show success message
          Swal.fire({
            title: "Success!",
            text: "Tourists Spot added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });

          // Reset form data
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
      })
      .catch((error) => {
        // Handle error
      })
      .finally(() => {
        setLoading(false); // Set loading to false after form submission completes
      });
  };

  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-3xl font-semibold mb-4 text-center text-primary">
        Add Tourists Spot
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 dark:text-white">
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
          <label
            htmlFor="tourists_spot_name"
            className="block mb-2 dark:text-white"
          >
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
          <label htmlFor="country_Name" className="block mb-2 dark:text-white">
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
          <label htmlFor="location" className="block mb-2 dark:text-white">
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
          <label
            htmlFor="short_description"
            className="block mb-2 dark:text-white"
          >
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
          <label htmlFor="average_cost" className="block mb-2 dark:text-white">
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
          <label htmlFor="seasonality" className="block mb-2 dark:text-white">
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
          <label htmlFor="travel_time" className="block mb-2 dark:text-white">
            Travel Time
          </label>
          <DatePicker
            selected={formData.travel_time}
            onChange={handleDateChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="totalVisitorsPerYear"
            className="block mb-2 dark:text-white"
          >
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
            className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-blue-600 transition duration-300 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpotPage;
