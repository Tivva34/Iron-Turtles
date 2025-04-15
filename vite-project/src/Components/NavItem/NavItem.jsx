import { Link } from 'react-router-dom';
 import './navitem.css';

function NavItem({navItem}) {
  return (
    <li  
      className="nav__item"
    >
      <Link to={navItem.endpoint} className="nav__link">
        {navItem.icon}
        {navItem.name}
      </Link>
    </li>
  )
}

export default NavItem;

// filepath: c:\Users\mynam\Documents\FrontEnd24\React\Iron-Turtles\vite-project\src\Components\NavItem\NavItem.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// function NavItem({ navItem }) {
//     return (
//         <li className="nav__item">
//             <Link to={navItem.endpoint} className="nav__link">
//                 {navItem.icon} {/* Rendera ikonen */}
//                 {navItem.name}
//             </Link>
//         </li>
//     );
// }

// export default NavItem;

