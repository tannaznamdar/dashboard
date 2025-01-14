import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router";

export default function MobileMenu({mobileMenu, closeMobileMenu, navigation,
}) {
  return (
    <>
      {/* overlay */}
      <div
        className={`w-full h-full bg-gray-500 opacity-80 ${mobileMenu ? "fixed top-0 left-0" : "hidden"}`}
        onClick={closeMobileMenu}>
      </div>

      <div
        className={`lg:hidden flex bg-indigo-600 dark:bg-slate-800 p-5 fixed left-0 top-0  bottom-0 overflow-y-auto h- lg:w-80 md:w-72 w-64  ${
          mobileMenu ? "flex flex-col" : " hidden"}`}>

          <span className="mb-5">
            <XMarkIcon
              className="size-6 text-indigo-100 md:hidden flex"
              onClick={closeMobileMenu}/>
          </span>

        {
            navigation.map((item) =>(
                <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive, isPending }) =>
                    `${isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium transition duration-200`}>
                    {item.name}
                 </NavLink>
            ))             
        }
      </div>
    </>

  );
}
