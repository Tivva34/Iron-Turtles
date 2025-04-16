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
      <input type="text" name={"userInput"} className="search__input" placeholder="Vad letar du efter?" />
      <button className="search__submit-button">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}

export default SearchForm;

// Originalkod
// function SearchForm() {
//   return (
//    <MovieSearchInput />
//   );
// }

// export default SearchForm;

{
  /* <div className="searchbar">
<input type="text" placeholder="Search..." className="searchbar__input"  />
<i className="fa-solid fa-magnifying-glass"></i>

</div> */
}
