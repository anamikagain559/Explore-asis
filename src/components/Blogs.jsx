import React from "react";
import LocationCard from "./LocationCard";

const Blogs = () => {
  return (
    <div className="dark:bg-black">
      <section className="bg-lightGray my-16 py-16 relative dark:bg-black">
        <div className="max-w-[1400px] mx-auto px-3">
          <span className="flex flex-col items-center">
            <p className="text-primary font-bold capitalize tracking-[0.15em]">
              Blog Post
            </p>
            <h2 className="text-2xl font-bold capitalize my-4 dark:text-white">
              Our Latest Blog
            </h2>
          </span>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10">
            <LocationCard image="https://i.ibb.co/vh81Xbw/shutterstock-1088519279v2.jpg"
                  text="Enjoy The Beauty Place Cambodia "></LocationCard>
            <LocationCard image="https://i.ibb.co/BZ7NYmT/vietnam-1-1611926800-profile-Image-2x-jpg.webp"
                  text="Vietnam is the westernmost capital city in continental Europe"></LocationCard>
            <LocationCard image="https://i.ibb.co/jz9STPc/image-processing20220717-4-6zqbu1.jpg"
                  text="Malaysia in January: Travel Tips, Weather & More"></LocationCard>
            <LocationCard image="https://i.ibb.co/RHW3TDy/145613.jpg"
                  text="Surprising changes to political life in three years in Malaysia"></LocationCard>
          </div>
        </div>
      </section>
      <section className="flex justify-between max-w-[1400px] mx-auto lg:py-16 my-16 gap-8 overflow-hidden dark:bg-black">
         <img src="https://i.ibb.co/QbwrkRg/travel-agency-logo-travel-company-logo-1-design-template-bc9dcb1ca0e92d6394dea26418a87c8e-screen.jpg" alt="" className="w-[300px] h-[200px]" />
         <img src="https://i.ibb.co/84J34cW/logo4.jpg" alt="" className="w-[300px] h-[200px]" />
         <img src="https://i.ibb.co/z6ntNJC/1600w-TWAjs1-N3-SXo.webp" alt="" className="w-[300px] h-[200px]" />
         <img src="https://i.ibb.co/Qr3N71X/images-4.jpg" alt="" className="w-[300px] h-[200px]" />
      </section>
      <section className="bg-[url('https://i.ibb.co/z8f1QR8/1140-euros-and-travel.jpg')] bg-no-repeat bg-cover bg-center relative x-10 lg:py-32 py-16">
        <div className="flex flex-col justify-center items-center lg:w-1/2 mx-auto px-3">
            <h2 className="font-bold text-2xl text-center mb-8">
                Sign Up For Our Newsletter
            </h2>
            <div className="flex lg:flex-row flex-col items-center w-full gap-x-[.1rem] gap-y-4 lg-bg-black rounded-md">
            <input type="email" placeholder="Enter Your Email Here" className="bg-[#22283C] text-white rounded-l-md w-full h-16 px-4"/>
            <button className="bg-primary text-white whitespace-pre h-16 px-8 rounded-r-md hover:bg-white hover:text-primary hover:shadow transition-bg hover:border hover:border-primary"> Subscribe Now</button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
