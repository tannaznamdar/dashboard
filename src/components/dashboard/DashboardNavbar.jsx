import propTypes from "prop-types";
import { useEffect } from "react";

import { ArrowRightStartOnRectangleIcon, BellAlertIcon, MagnifyingGlassIcon, Bars3Icon, MoonIcon } from "@heroicons/react/24/outline";
import userImg from "./../../assets/image/user.png";
import { NavLink } from "react-router";

function DashboardNavbar({ openMenu }) {
    
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  //dark mood
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex items-center justify-between bg-white dark:bg-slate-700 border-b shadow-sm lg:px-8 px-4">
      <div className="flex items-center w-full">
        <button
          className="md:hidden flex mr-4 rounded-sm p-1 focus:ring-1 focus:ring-indigo-500"
          onClick={openMenu}
        >
          <Bars3Icon className="size-5 text-gray-400" />
        </button>

        <form
          action="#"
          className="flex bg-white dark:bg-slate-700 items-center gap-3 py-5 lg:w-2/3 w-full"
        >
          <span>
            <MagnifyingGlassIcon className="size-5 text-gray-400 dark:text-white" />
          </span>
          <input
            type="text"
            placeholder="search..."
            className="w-full outline-none dark:bg-slate-700"
          />
        </form>
      </div>

      <div className="flex items-center justify-end w-full">
        <span className="border-r-2 md:flex">
          <MoonIcon
            className="size-5 text-gray-400 md:mx-4 mx-2 transition duration-150 hover:text-gray-600 dark:hover:text-gray-300 dark:text-white"
            onClick={toggleDarkMode}
          />
        </span>

        <span className="border-r-2 md:flex hidden">
          <BellAlertIcon className="size-6 text-gray-400 md:mx-4 mx-2 transition duration-150 hover:text-gray-600 dark:hover:text-gray-300 dark:text-white" />
        </span>
        <figure className="w-9 h-9 mx-4 rounded-full overflow-hidden hidden md:flex flex-shrink-0">
          <img src={userImg} alt="user" />
        </figure>

        <button>
          <NavLink className="flex items-center" to='/'>
            <span className=" ml-2 pr-3 font-semibold text-sm text-gray-700 dark:text-white">
              Logout
            </span>
            <ArrowRightStartOnRectangleIcon className="size-5 text-gray-400 transition duration-150 rotate-180 hover:text-gray-600 dark:text-white dark:hover:dark:text-white" />
          </NavLink>
        </button>
      </div>
    </div>
  );
}

DashboardNavbar.propTypes = {
  // openMenu: propTypes.function
};

export default DashboardNavbar;
