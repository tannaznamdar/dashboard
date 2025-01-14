import { NavLink } from "react-router"
import { Bars4Icon} from "@heroicons/react/24/outline";
import HeaderMenuItem from "./header-menu/HeaderMenuItem";

export default function Header(){

    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'About', href: '/about', current: false },
        { name: 'Todos', href: '/todos', current: false },
    ]

    return(
        <header className="bg-white shadow-md">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Desktop Navigation */}
                    <HeaderMenuItem  navigation={navigation}/>

                    <button className="size-6 text-gray-500 md:hidden">
                        <Bars4Icon />
                    </button>

                    <button>
                            <NavLink to='/dashboard' className={({ isActive, isPending }) => `${isActive ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium transition duration-200 ring-1 ring-gray-400`}>  User account </NavLink>
                    </button>

                </div>
            </div>
        </header>
    )
}