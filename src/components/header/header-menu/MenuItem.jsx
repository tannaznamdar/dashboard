import { NavLink } from "react-router"
import propTypes from 'prop-types'

function HeaderMenuItem({navigation}) {
  return (

    <div className="md:flex space-x-4 hidden">
      {navigation.map((item) => (
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
      ))}
    </div>
  );
}

HeaderMenuItem.propTypes ={
  navigation: propTypes.array.isRequired,
  }

  export default HeaderMenuItem;
