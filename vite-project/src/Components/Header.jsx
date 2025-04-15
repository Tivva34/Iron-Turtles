import Logo from '../Components/Logo/Logo';
import NavBar from '../Components/NavBar/NavBar';
import SearchForm from '../Components/SearchForm/SearchForm';
import '../index.css';

    function Header() {
          return (
            <header className="header">
              
                <Logo />              
              
                <SearchForm />
              
                <NavBar />
             
            </header>
          );
        }
        
  export default Header;

