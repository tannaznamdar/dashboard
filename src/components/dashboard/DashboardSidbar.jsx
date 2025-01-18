import propTypes from 'prop-types'

import logo from "./../../assets/image/Tailwind CSS.png";
import { XMarkIcon, HomeIcon, UsersIcon, FolderIcon, CalendarIcon, ClipboardDocumentListIcon, ChartPieIcon } from "@heroicons/react/24/outline";

import MenuList from "./dashboard-menu/MenuList";

function DashboardSidbar({closeMenu, mobileMenu}) {

  let menuItems = [
    { id: 1, 
        title: "Dashboard", 
        icon: <HomeIcon />, 
        href: "/dashboard/panel", 
        current: true },
    {
      id: 2,
      title: "Team",
      icon: <UsersIcon />,
      href: "/dashboard/Team",
      current: false,
    },
    {
      id: 3,
      title: "Projects",
      icon: <FolderIcon />,
      href: "/dashboard/Projects",
      current: false,
    },
    {
      id: 4,
      title: "Calendar",
      icon: <CalendarIcon />,
      href: "/dashboard/Calendar",
      current: false,
    },
    {
      id: 5,
      title: "Documents",
      icon: <ClipboardDocumentListIcon />,
      href: "/dashboard/Documents",
      current: false,
    },
    {
      id: 6,
      title: "Reports",
      icon: <ChartPieIcon />,
      href: "/dashboard/Reports",
      current: false,
    },
  ];
  
  return (
    <>
      <div
        className={`w-full h-full bg-gray-500  opacity-80 ${mobileMenu ? "fixed top-0 left-0" : ""}`}
        onClick={closeMenu}>
      </div>
      
      <div
        className={`md:flex md:flex-col bg-indigo-600 dark:bg-slate-800 p-5 fixed h-full overflow-y-auto lg:w-80 md:w-72 w-64  ${mobileMenu ? "flex flex-col" : " hidden"}`} >
        <div className="flex justify-between">
          <figure className="w-9 h-9 mb-10">
            <img src={logo} alt="logo" />
          </figure>

          <span>
            <XMarkIcon
              className="size-6 text-indigo-100 md:hidden flex"
              onClick={closeMenu}
            />
          </span>
        </div>

        <div>
          <MenuList menuItems={menuItems} />
        </div>
      </div>
    </>
  );
}

DashboardSidbar.propTypes ={
  closeMenu: propTypes.func.isRequired
}

export default DashboardSidbar;
