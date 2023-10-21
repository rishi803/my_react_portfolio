import React, { useEffect, useState } from "react";
import MenuList from "./MenuList";
import MenuLink from "./MenuLink.js";
import "./Header.css";

// Icons
import { BiMenuAltRight } from "react-icons/bi";

function Header() {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleActive = () => {
    setMenuActive(!isMenuActive);
  };


//   import React, { useState } from 'react';
// import './Menu.css'; // Import the CSS file

// const menuItems = ['Home', 'About', 'Services', 'Contact'];

// function Menu() {
//   const [activeItem, setActiveItem] = useState(null);

//   const handleItemClick = (index) => {
//     // Update the active item when a menu item is clicked
//     setActiveItem(index);
//   };

//   return (
//     <ul id="menu">
//       {menuItems.map((item, index) => (
//         <li
//           key={index}
//           className={activeItem === index ? 'active' : ''}
//           onClick={() => handleItemClick(index)}
//         >
//           {item}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default Menu;

/* Menu styles */

// #menu {
//   list-style-type: none;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   background-color: #333;
// }

// #menu li {
//   padding: 10px 20px;
//   color: #fff;
//   cursor: pointer;
// }

// /* Active menu item style */
// #menu li.active {
//   background-color: #f39c12; /* Highlight color for active item */
//   font-weight: bold;
// }




  useEffect(() => {        // this may cause performance issue because of each time render so you should use above commented way
    const menu = document.getElementById("menu");
    var allLi = menu.querySelectorAll("li");

    function linkAction() {
      //Active Link
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", linkAction));
  });

  return (
    <header>
      <nav className="nav bd_grid">
        <a href="#" className="nav_logo">
          Personal
        </a>

        <ul className={isMenuActive ? "show" : ""} id="menu">
          {MenuLink &&
            MenuLink.map((menuData) => (
              <MenuList
                key={menuData.id}
                hyper_link={menuData.hyper_link}
                link_name={menuData.link_name}
                setMenuActive={setMenuActive}
              />
            ))}
        </ul>

        <i className="toggleMenu" onClick={toggleActive}>
          <BiMenuAltRight />
        </i>
      </nav>
    </header>
  );
}

export default Header;
