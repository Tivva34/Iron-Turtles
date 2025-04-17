import { FaEye } from "react-icons/fa";
import { GiTurtleShell } from "react-icons/gi";
import NavItem from "../NavItem/NavItem";
import "./navbar.css";

function NavBar() {
  const navItems = [
    {
      name: "Home",
      endpoint: "/",
      icon: <GiTurtleShell />,
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