import { FaHome, FaEye } from "react-icons/fa";
import NavItem from "../NavItem/NavItem";
import "./navbar.css";

function NavBar() {
  const navItems = [
    {

      name: "Home",
      endpoint: "/",
      icon: <FaHome />,
    },
    {
      name: "My Watchlist",
      endpoint: "/watchlist",
      icon: <FaEye />,
    },
  ];

  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map((item, index) => {
          return <NavItem key={index} navItem={item} />;
        })}
      </ul>
    </nav>
  );
}

export default NavBar;

//icon : <FontAwesomeIcon icon="fa-solid fa-house" />,
//icon : <FontAwesomeIcon icon="fa-solid fa-eye" />,

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse, faEye } from '@fortawesome/free-solid-svg-icons'; // Importera specifika ikoner
// import NavItem from '../NavItem/NavItem';
// import './navbar.css';

// function NavBar() {
//     const navItems = [
//         {
//             name: "Home",
//             endpoint: "/",
//             icon: <i class="fa-solid fa-house"></i>, // Lägg till ikonen här
//         },
//         {
//             name: "My Watchlist",
//             endpoint: "/movie",
//             icon: <i class="fa-solid fa-eye"></i>, // Lägg till ikonen här
//         },
//     ];

//     return (
//         <nav className="nav">
//             <ul className="nav__list">
//                 {
//                     navItems.map((item, index) => {
//                         return <NavItem
//                             key={index}
//                             navItem={item}
//                         />
//                     })
//                 }
//             </ul>
//         </nav>
//     );
// }

// export default NavBar;
