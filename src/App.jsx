import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/img/logo.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "./components/Card";
import Packages from "./components/Packages";
import beach from "./../public/beach.svg";
import bus from "./../public/bus-svgrepo-com.svg";
import wallet from "./../public/wallet.svg";
import food from "./../public/food.svg";
import suitcase from "./../public/suitcase.svg";
import hotel from "./../public/hotel.svg";
import Blogs from "./components/Blogs";
import { useLoaderData } from "react-router-dom";
import LatestSpotsCard from "./components/LatestSpotsCard";
import { Fade, Roll } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const countries = useLoaderData();
  const [touristsSpotData, setTouristsSpotData] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    fetch("https://travel-website-server-with-auth.vercel.app/touristsSpot")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setTouristsSpotData(data);
        setLoading(false); // Update loading state once data is fetched
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false); // Update loading state in case of error
      });
  }, []);

 
  if (loading) {
    return <div className="flex justify-center items-center"><span className="loading loading-lg"></span></div>;
  }

  // Render error message if data fetching fails
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="carousel w-full ">
        <div
          id="slide1"
          className="carousel-item relative lg:w-full lg:h-[700px]"
        >
          <Reveal
            className="carousel-item relative lg:w-full lg:h-[700px]"
            cascade
          >
            <img
              src="https://i.ibb.co/8mbvRfP/The-Pros-and-Cons-of-Living-in-Malaysia.webp"
              className="w-full h-full object-cover "
            />
          </Reveal>
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-1 lg:right-5 right-1 top-1/2">
            <a
              href="#slide4"
              className="bg-primary text-white mt-8 text-xl border-0 text-center align-middle px-3 py-2 rounded-xl shadow-lg"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="bg-primary text-white mt-8 text-xl border-0 text-center align-middle px-3 py-2 rounded-xl shadow-lg"
            >
              ❯
            </a>
          </div>
          <Fade cascade damping={0.9} delay={1000}>
            <div className="text-center text-white absolute lg:top-[40%] sm:top-[30%] top-[20%] lg:left-[35%] sm:left-[20%] left-[5%]">
              <h1 className="lg:text-7xl sm:text-4xl text-3xl lg:font-bold font-semibold lg:mb-10 mb-4 font-pacifico">
                Malaysia
              </h1>
              <p className="lg:text-2xl text-base">
               Vibrant culture, stunning landscapes, diverse cuisine
              </p>
              <button className="bg-primary text-white mt-8 text-xl border-0 text-center align-middle px-3 py-2 rounded-xl shadow-lg">
                Explore Now
              </button>
            </div>
          </Fade>
        </div>

        <div
          id="slide2"
          className="carousel-item relative lg:w-full lg:h-[700px]"
        >
          <Reveal
            className="carousel-item relative lg:w-full lg:h-[700px]"
            cascade
          >
            <img
              src="https://i.ibb.co/JpjwXGW/5e309f5d-75d2-4364-b9e7-05cba39b5367.jpg"
              className="w-full h-full object-cover "
            />
          </Reveal>
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-1 lg:right-5 right-1 top-1/2">
            <a
              href="#slide1"
              className="bg-primary text-white mt-8 text-xl border-0 text-center align-middle px-3 py-2 rounded-xl shadow-lg"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="bg-primary text-white mt-8 text-xl border-0 text-center align-middle px-3 py-2 rounded-xl shadow-lg"
            >
              ❯
            </a>
          </div>
          <Fade cascade damping={0.9} delay={1000}>
            <div className="text-center text-white absolute lg:top-[40%] sm:top-[30%] top-[20%] lg:left-[35%] sm:left-[20%] left-[5%]">
              <h1 className="lg:text-7xl sm:text-4xl text-3xl lg:font-bold font-semibold lg:mb-10 mb-4 font-pacifico">
              Cambodia
              </h1>
              <p className="lg:text-2xl text-base">
              Rich history, captivating temples, warm hospitality 
              </p>
              <button className="bg-primary text-white mt-8 text-xl border-0 text-center align-middle px-3 py-2 rounded-xl shadow-lg">
                Explore Now
              </button>
            </div>
          </Fade>
        </div>
        <div
          id="slide3"
          className="carousel-item relative lg:w-full lg:h-[700px]"
        >
          <Reveal
            className="carousel-item relative lg:w-full lg:h-[700px]"
            cascade
          >
            <img
              src="https://i.ibb.co/K9SSGMQ/landmark-pagoda-in-doi-inthanon-national-park-at-chiang-mai-thailand-163355-1.jpg"
              className="w-full h-full object-cover "
            />
          </Reveal>
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-1 lg:right-5 right-1 top-1/2">
            <a
              href="#slide2"
              className="bg-primary text-white mt-8 text-xl border-0 text-center align-middle px-3 py-2 rounded-xl shadow-lg"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="bg-primary text-white mt-8 text-xl border-0 text-center align-middle px-3 py-2 rounded-xl shadow-lg"
            >
              ❯
            </a>
          </div>
          <Fade cascade damping={0.9} delay={1000}>
            <div className="text-center text-white absolute lg:top-[40%] sm:top-[30%] top-[20%] lg:left-[35%] sm:left-[20%] left-[5%]">
              <h1 className="lg:text-7xl sm:text-4xl text-3xl lg:font-bold font-semibold lg:mb-10 mb-4 font-pacifico">
              Thailand 
              </h1>
              <p className="lg:text-2xl text-base">
               Land of smiles, culture, and adventure go and Explore
               
              </p>
              <button className="bg-primary text-white mt-8 text-xl border-0 text-center align-middle px-3 py-2 rounded-xl shadow-lg">
                Explore Now
              </button>
            </div>
          </Fade>
        </div>
        <div
          id="slide4"
          className="carousel-item relative lg:w-full lg:h-[700px]"
        >
          <Reveal
            className="carousel-item relative lg:w-full lg:h-[700px]"
            cascade
          >
            <img
              src="https://i.ibb.co/sWXt9Rr/318985.jpg"
              className="w-full h-full object-cover "
            />
          </Reveal>
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-1 lg:right-5 right-1 top-1/2">
            <a
              href="#slide3"
              className="bg-primary text-white mt-8 text-xl border-0 text-center align-middle px-3 py-2 rounded-xl shadow-lg"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="bg-primary text-white mt-8 text-xl border-0 text-center align-middle px-3 py-2 rounded-xl shadow-lg"
            >
              ❯
            </a>
          </div>
          <Fade cascade damping={0.9} delay={1000}>
            <div className="text-center text-white absolute lg:top-[40%] sm:top-[30%] top-[20%] lg:left-[35%] sm:left-[20%] left-[5%]">
              <h1 className="lg:text-7xl sm:text-4xl text-3xl lg:font-bold font-semibold lg:mb-10 mb-4 font-pacifico">
                Bangladesh
              </h1>
              <p className="lg:text-2xl text-base">
              Beautiful landscapes, rich culture, warm hospitality
              </p>
              <button className="bg-primary text-white mt-8 text-xl border-0 text-center align-middle px-3 py-2 rounded-xl shadow-lg">
                Explore Now
              </button>
            </div>
          </Fade>
        </div>
      </div>

      <div className="bg-[#040E27] p-12 -mt-3 ">
        <div className="mx-auto container pt-3">
          <div className="flex lg:flex-row flex-col lg:gap-10 gap-4 justify-center">
            <div>
              <h3 className="mb-4 text-white text-2xl font-normal">
                Where you want to go?
              </h3>
            </div>
            <div>
              <input
                type="text"
                placeholder="Where to go?"
                className="w-full h-12 bg-transparent border border-gray-700 rounded-md px-4 text-white"
              />
            </div>
            <div>
              <DatePicker
                className="lg:w-full sm:w-[550px] w-[295px] h-12 bg-transparent border border-gray-700 rounded-md px-4 text-white"
                dateFormat="dd/MM/yyyy" // Customize date format as needed
                placeholderText="Select a date"
              />
            </div>
            <div>
              <select className="w-full h-12 bg-transparent border border-gray-700 rounded-md px-4 text-white">
                <option>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div>
              <button
                className="bg-red-500 text-white inline-block py-3 lg:pl-10 sm:pl-[235px] pl-[113px] lg:pr-10 sm:pr-[235px] pr-[110px] font-medium rounded-md text-lg uppercase transition duration-300 ease-in-out cursor-pointer"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <Fade cascade damping={0.9} delay={500}>
        <section className=" max-w-[1400px] mx-auto relative px-3 py-12">
          <div className="xl:text-[25rem] lg:text-[20rem] leading-[.5] absolute left-0 w-full h-full text-center z-[-1] text-gray font-semibold opacity-10">
            Travel
          </div>
          <div>
            <span className="flex flex-col items-center">
              <p className="text-primary font-bold capitalize tracking-[0.15em] ">
                Inventore Veritatis
              </p>
              <h2 className="text-4xl text-center font-bold capitalize my-4 dark:text-white">
                Select Offers For 

                <Typewriter
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={70}
                    delaySpeed={1000}
                    words={[" Travelings", " Amazing Services", " Travel Guide"]}
                  />

              </h2>
            </span>
          </div>
          <div className="flex lg:flex-row flex-col gap-y-8 item-center justify-between my-12">
            <span className="flex flex-col items-center">
              <img className=" h-24 w-24 text-primary" src={hotel} alt="" />
              <p className="mt-2 dark:text-white">Travel Guide</p>
            </span>
            <span className="flex flex-col items-center">
              <img
                src={suitcase}
                alt=""
                className=" h-24 w-24 text-primary"
              ></img>
              <p className="mt-2 dark:text-white">Different Countries</p>
            </span>
            <span className="flex flex-col items-center">
              <img src={food} alt="" className=" h-24 w-24" />
              <p className="mt-2 dark:text-white">Different Countries</p>
            </span>
            <span className="flex flex-col items-center">
              <img src={wallet} alt="" className=" h-24 w-24" />
              <p className="mt-2 dark:text-white">The Best Prices</p>
            </span>
            <span className="flex flex-col items-center">
              <img src={bus} alt="" className=" h-24 w-24" />
              <p className="mt-2 dark:text-white">The Best Prices</p>
            </span>
            <span className="flex flex-col items-center">
              <img src={beach} alt="" className=" h-24 w-24" />
              <p className="mt-2 dark:text-white">Amazing Services</p>
            </span>
          </div>
        </section>
      </Fade>

      <div className=" max-w-[1400px] mx-auto my-0">
        <div className="flex flex-col gap-2 justify-center items-center text-center mb-10">
          <img
            src="
                https://i.ibb.co/56n0z1w/section-icon-png.webp"
            alt=""
            className=""
          />
          <h3 className="text-xl font-semibold text-primary shadow-2xl mb-6 ">
            Featured Tours
          </h3>
          <h2 className="text-4xl font-bold text-black dark:text-white">
            Beautiful Place Around Asia
          </h2>
        </div>
        <div className="grid md:grid-cols-3 grid-col-1 gap-4 mx-auto">
          {countries.map((country, index) => (
            <div key={index} className="col-span-1">
              <Card country={country}></Card>
            </div>
          ))}
        </div>
      </div>

      <Packages></Packages>
      <Blogs></Blogs>
    </>
  );
}

export default App;
