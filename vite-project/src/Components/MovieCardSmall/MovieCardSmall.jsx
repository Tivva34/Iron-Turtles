import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useOutletContext } from "react-router-dom";
import Logo from "../Logo/Logo";

function MovieCardSmall({ movie, movieid }) {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useOutletContext(); //Outlet används i RootLayout används därför här för att "packa upp" innehållet som kommer med från RootLayout via App.jsx
  console.log(movie);

  const isInWatchlist = (book) => {
    if (watchlist.some((b) => b.id === book.id)) return true;
    else return false;
  };

  return (
    <>
      <div id={movie.id} className="list-item__div">
        <Link className="nav-link">
          <li className="list-item__li">
            <div className="list-item__img-div">
              <img src={movie.Poster} alt={`Poster of ${movie.Title}`} className="list-item__img" />
            </div>
            <h3 className="list-item__title">{movie.Title}</h3>
          </li>
        </Link>
        {isInWatchlist(movie) ? (
          <Button
            id={"smallCardBtn"}
            className={"lite-item__button"}
            onClickFunction={() => removeFromWatchlist(movie.id)}
            btntext={"Remove"}
          />
        ) : (
          <Button id={"smallCardBtn"} className={"lite-item__button"} onClickFunction={() => addToWatchlist(movie)} btntext={"Save"} />
        )}
      </div>
    </>
  );
}

export default MovieCardSmall;
