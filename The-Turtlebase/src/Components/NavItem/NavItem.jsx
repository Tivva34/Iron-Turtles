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