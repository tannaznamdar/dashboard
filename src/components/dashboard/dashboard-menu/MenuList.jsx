import propTypes from 'prop-types'

import MenuListItem from "./MenuListItem";


function MenuList({menuItems}) {
  return (
          <ul className="text-base font-medium text-gray-200">
            {menuItems?.map((item) => (
              <MenuListItem item={item} key={item.id} />
            ))}
          </ul>
  );
}

MenuList.propTypes ={
    menuItems: propTypes.array.isRequired
}

export default MenuList;
