import { useState } from "react";

import Navbar from "../../components/dashboard/DashboardNavbar";
import Sidbar from "../../components/dashboard/DashboardSidbar";

export default function DashboardLayout({ children }) {

  const [mobileMenu, setMobileMenu] = useState(false);
  
  //mobile mood
  const openMenu = () => {
    setMobileMenu(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setMobileMenu(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="mx-auto">
        <div className="flex flex-col">
          <Sidbar mobileMenu={mobileMenu} closeMenu={closeMenu}/>

          <div className="lg:pl-80 md:pl-72">
            <Navbar openMenu={openMenu} />

            <div className="md:p-10 px-4 py-7 h-full bg-white dark:bg-slate-600 dark:text-white">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}