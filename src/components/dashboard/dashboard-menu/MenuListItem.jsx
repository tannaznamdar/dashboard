import propTypes from 'prop-types'
import { NavLink } from 'react-router';


function MenuListItem({item}) {
    return (
        <li>
        <NavLink key={item?.id} to={item.href} className={({isActive, isPending})=> `${isActive ? 'bg-blue-800 dark:bg-slate-600' : ''} mb-1 cursor-pointer p-2 rounded-md transition duration-100 flex gap-3`}>
          <span className="size-6 text-indigo-300">{item?.icon}</span>
          <span>{item?.title}</span>
        </NavLink>
      </li>
    );
  }

  MenuListItem.propTypes ={
    item: propTypes.object.isRequired
  }
  
  export default MenuListItem;