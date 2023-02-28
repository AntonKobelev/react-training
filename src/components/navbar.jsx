import React from 'react';
import Navlink from "./navLink";

const Navbar = ({onItemClick, menuItems}) => {
  
  return (
    <div>
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item) => (
          <Navlink key={item.id} {...item} onActiveChange={onItemClick} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
