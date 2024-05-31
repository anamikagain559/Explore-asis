import React from "react";
import {
  FaBehance,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationPin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import image1 from "../assets/img/destination/1.png";
import image2 from "../assets/img/destination/2.png";
import image3 from "../assets/img/destination/3.png";
import image4 from "../assets/img/destination/4.png";
import image5 from "../assets/img/destination/5.png";
import image6 from "../assets/img/destination/6.png";
const Footer = () => {
  return (
    <footer>
      <div className="bg-white py-16 dark:bg-black">
        <div className="max-w-[1400px] mx-auto grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 px-3">
          <div>
            <div
              className="flex gap-3
          "
            >
              <img
                src="https://i.ibb.co/56n0z1w/section-icon-png.webp"
                alt=""
              />
              <h1 className="font-bold text-2xl mt-2 dark:text-white">Explore Asia</h1>
            </div>

            <p className="text-gray py-4 text-lg">
              Continually productize compelling dome packed with all Elated
              utilize website and creating supply next-generation
            </p>
            <h5 className="font-semibold text-2xl py-4 dark:text-white">Follow us on:</h5>
            <span className="flex items-center gap-4">
              <FaFacebookF
                size={20}
                className="hover:text-primary cursor-pointer dark:text-primary"
              />
              <FaBehance
                size={20}
                className="hover:text-primary cursor-pointer dark:text-primary"
              />
              <FaInstagram
                size={20}
                className="hover:text-primary cursor-pointer dark:text-primary"
              />
              <FaWhatsapp
                size={20}
                className="hover:text-primary cursor-pointer dark:text-primary"
              />
              <FaLinkedinIn
                size={20}
                className="hover:text-primary cursor-pointer dark:text-primary"
              />
            </span>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8 dark:text-primary">Tour Type</h5>
            <ul>
              <li className="hover:text-primary  text-lg leading-10 cursor-pointer dark:text-white">
                Advance Tours
              </li>
              <li className="hover:text-primary  text-lg leading-10 cursor-pointer dark:text-white">
                Group Tours
              </li>
              <li className="hover:text-primary  text-lg leading-10 cursor-pointer dark:text-white">
                Seasonal Tours
              </li>
              <li className="hover:text-primary  text-lg leading-10 cursor-pointer dark:text-white">
                Relaxation Tours
              </li>
              <li className="hover:text-primary  text-lg leading-10 cursor-pointer dark:text-white">
                Family Friendly Tours
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8 dark:text-primary">Contact Info</h5>
            <ul>
              <span className="text-gray flex items-center pb-2 gap-2 lg:w-4/5">
                <FaPhone size={20}></FaPhone>
                <li className="leading-8">
                  +88130-589-745-6987 + 1655-456-533
                </li>
              </span>
              <span className="text-gray flex items-center pb-2 gap-2 lg:w-4/5">
                <FaClock size={20}></FaClock>
                <li className="leading-8">
                  Mon-Fri 09:00-18:00 (Except public holiday)
                </li>
              </span>
              <span className="text-gray flex items-center pb-2 gap-2 lg:w-4/5">
                <FaLocationPin></FaLocationPin>
                <li className="leading-8">
                  25/2 vokte Street Building Melborn City
                </li>
              </span>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8 dark:text-primary">Gallery</h5>
            <div className="grid grid-cols-3 gap-2">
              <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                <img
                  src={image1}
                  alt=""
                  className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                />
              </div>
              <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                <img
                  src={image2}
                  alt=""
                  className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                />
              </div>
              <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                <img
                  src={image3}
                  alt=""
                  className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                />
              </div>
              <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                <img
                  src={image4}
                  alt=""
                  className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                />
              </div>
              <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                <img
                  src={image5}
                  alt=""
                  className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                />
              </div>
              <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                <img
                  src={image6}
                  alt=""
                  className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightGray dark:bg-slate-500 py-10 flex items-center text-center justify-center">
        <p className="px-3 dark:text-white"> © Copyright 2022.ALl Rights Reserved by Anamika</p>
      </div>
    </footer>
  );
};

export default Footer;
