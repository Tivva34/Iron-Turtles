import "./searchform.css";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const userInput = event.target.userInput.value;
    navigate(`/search/${encodeURIComponent(userInput)}`);
  };

  return (
    <form onSubmit={handleSearch} className="search__form">
      <label htmlFor="search" className="sr-only">
        Search movie
      </label>
      <input id="search" type="text" name={"userInput"} className="search__input" placeholder="Vad letar du efter?" />

      <button className="search__submit-button" aria-label="Submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}

export default SearchForm;
