import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { AuthContext } from "../Provider/AuthProvide";
import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Navbar.css";

const NewNav = () => {
  const [dropdown, setDropdown] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged out successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (

      <div className="navbar bg-base-100 dark:bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" p-4 bg-primary dark:bg-black text-white dark:text-black font-bold text-lg rounded-lg shadow-xl lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {" "}
              <NavLink
                to="/"
                className="leading-normal no-underline text-black dark:text-white font-bold text-lg hover:text-primary"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allTouristsSpot"
                className="leading-normal no-underline text-black font-bold text-lg hover:text-primary"
              >
                All Tourists Spot
              </NavLink>
            </li>
            <li>
            
              <NavLink
                to="/add"
                className="leading-normal no-underline text-black font-bold text-lg hover:text-primary"
              >
                Add Tourists Spot
              </NavLink>
            </li>
            <li>
              {user && (
                <NavLink
                  to={`myTouristsSpot/${user.email}`}
                  className="leading-normal no-underline text-black font-bold text-lg hover:text-primary"
                >
                  My Tourists Spot
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="flex item-center gap-2">
          <img
            src="https://i.ibb.co/56n0z1w/section-icon-png.webp"
            alt=""
            className="ml-2 lg:mt-3 mt-2 h-10 "
          />
          <p className="lg:text-2xl text-lg font-bold lg:pt-4 dark:text-white"> Explore Asia</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary dark:text-white"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allTouristsSpot"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary dark:text-white"
            >
              All Tourists Spot
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/add"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary dark:text-white"
            >
              Add Tourists Spot
            </NavLink>
          </li>
          <li>
            {user && (
              <NavLink
                to={`myTouristsSpot/${user.email}`}
                className="leading-normal no-underline text-black font-bold text-lg hover:text-primary dark:text-white"
              >
                My Tourists Spot
              </NavLink>
            )}
          </li>
        </ul>
    
       
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img
              src={user.photoURL}
              className="h-12 w-12 rounded-full"
              alt=""
              title={user.displayName}
            />
            <button
              onClick={handleSignOut}
              className="bg-primary rounded shadow lg:h-12 h-10 lg:px-10 px-4 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary ml-4"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-primary rounded shadow lg:h-12 h-10 lg:px-10 px-3 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary ml-4">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-primary rounded shadow lg:h-12 h-10 lg:px-10 px-4 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary ml-4">
                Register
              </button>
            </Link>
          </>
        )}

        
      </div>
    </div>

  );
};

export default NewNav;
