import { useState } from "react";
import { NavLink } from "react-router"

import { Bars4Icon} from "@heroicons/react/24/outline";

import MenuItem from "./header-menu/MenuItem";
import MobileMenu from "./header-menu/MobileMenu";

export default function Header(){

    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'About', href: '/about', current: false },
        { name: 'Todos', href: '/todos', current: false },
    ]

    const [mobileMenu, setMobileMenu]= useState (false)

    const closeMobileMenu = ()=>{
        setMobileMenu(false)
    }

    const openMobileMenu = ()=>{
        setMobileMenu(true)
    }

    return(
        <header className="bg-white shadow-md">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-between w-full items-center py-4">

                    {/* Desktop Navigation */}
                      <MenuItem  navigation={navigation}/>

                      <button>
                          <NavLink to='/dashboard/panel' className={({ isActive, isPending }) => `${isActive ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium transition duration-200 ring-1 ring-gray-400`}>  User account </NavLink>
                      </button>

                    {/* mobile menu */}
                    <button className="size-6 text-gray-500 md:hidden" onClick={openMobileMenu}>
                        <Bars4Icon />
                    </button>
                    
                    <MobileMenu navigation={navigation} closeMobileMenu={closeMobileMenu} mobileMenu={mobileMenu} />
                    
                </div>
            </div>
        </header>
    )
}