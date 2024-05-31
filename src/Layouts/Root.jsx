import React, { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

import NewNav from "../components/NewNav";

function Root() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode= ()=>{
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode && "dark"}`}>
        <input type="checkbox" value="synthwave" className="toggle theme-controller"
            onClick={toggleDarkMode}
          />
      <NewNav/>
      <div className=" dark:bg-black">
        <Outlet />
      </div>
      <Footer />
      </div>
  );
}

export default Root;

