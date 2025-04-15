import './logo.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-the-turtlebase.svg';


function Logo() {
    
  return (
    <Link to="/" className="header__link">
    <img src={logo} alt="Logo the turtlebase" className="heade__logo" />
    </Link>
  )
}

export default Logo;