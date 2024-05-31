import React, { useState } from "react";
// Assuming you have initialized your Firestore instance as 'db'
import Swal from "sweetalert2";
function AddCountry() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    imageURL: "",
    country_Name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setLoading(true);
    // Send data to the server
    fetch("https://travel-website-server-with-auth.vercel.app/country", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Country Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          // Reset form fields after successful submission
          setFormData({
            imageURL: "",
            country_Name: "",
            description: "",
          });
        } else {
          // Handle error case
          Swal.fire({
            title: "Error!",
            text: "Failed to add Tourist Spot",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error case
        Swal.fire({
          title: "Error!",
          text: "Failed to add Tourist Spot",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
    setLoading(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="add-country-form">
        <h2 className="text-3xl font-semibold mb-4">Add Country</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="form-group mb-4">
            <label htmlFor="country_Name" className="block mb-2">
              Country Name:
            </label>
            <input
              type="text"
              name="country_Name"
              id="country_Name"
              value={formData.country_Name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="description" className="block mb-2">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageURL" className="block mb-2">
              Image URL:
            </label>
            <input
              name="imageURL"
              type="text"
              id="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white mt-4 py-4 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex justify-center items-center"
          >
            {loading ? "Adding..." : "Add Country"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCountry;
