import "./moviePage.css";
import { useOutletContext } from "react-router-dom";

function MoviePage() {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useOutletContext();
  console.log(watchlist);

  return <h1>MoviePage</h1>;
}

export default MoviePage;
