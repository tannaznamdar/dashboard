import { NavLink } from "react-router"

export default function Header(){

    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'About', href: '/about', current: false },
        { name: 'Todos', href: '/todos', current: false },
        { name: 'Dashboard', href: '/dashboard', current: false },
    ]

    return(
        <header className="bg-white shadow-md">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Desktop Navigation */}
                    <div className="flex space-x-4">
                        {navigation.map((item)=>
                        <NavLink to={item.href} className={({ isActive, isPending }) => `${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium transition duration-200`}>
                            {item.name}
                        </NavLink>
                        )}
                    </div>
                    
                </div>
            </div>
        </header>
    )
}