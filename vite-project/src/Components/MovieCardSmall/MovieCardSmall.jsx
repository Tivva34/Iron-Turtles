import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useOutletContext } from "react-router-dom";
import Logo from "../Logo/Logo";

function MovieCardSmall({ movie }) {
	const { watchlist, addToWatchlist, removeFromWatchlist } = useOutletContext();

	const isInWatchlist = (movie) => {
		return watchlist.some((b) => b.id === movie.id);
	};

	return (
		<>
			<div id={movie.id} className="list-item__div">
				<li className="list-item__li">
					<Link to={`/movie/${movie.imdbID}`} className="list-item__link">
						<div className="list-item__img-div">
							<img
								src={movie.Poster}
								alt={`Poster of ${movie.Title}`}
								className="list-item__img"
							/>
						</div>
					</Link>
					<h3 className="list-item__title">{movie.Title}</h3>
				</li>
				{isInWatchlist(movie) ? (
					<Button
						id={"smallCardBtn"}
						className={"errorpage__button lite-item__button"}
						onClickFunction={() => removeFromWatchlist(movie.id)}
						btntext={"Remove"}
					/>
				) : (
					<Button
						id={"smallCardBtn"}
						className={"errorpage__button lite-item__button"}
						onClickFunction={() => addToWatchlist(movie)}
						btntext={"Save"}
					/>
				)}
			</div>
		</>
	);
}

export default MovieCardSmall;
