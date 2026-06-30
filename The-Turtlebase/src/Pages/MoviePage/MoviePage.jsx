import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useOutletContext } from "react-router-dom";
import { useFetchMovieCard } from "../../Scripts/useFetchMovieCard";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaFilm, FaCalendarAlt } from "react-icons/fa";
import "./moviePage.css";

function MoviePage() {
  const { imdbID } = useParams(); // Hämtar imdbID från URL:n
  const navigate = useNavigate(); // För att navigera tillbaka till startsidan
  const [movie, setMovie] = useState(null); // State för att lagra filmens data
  const [error, setError] = useState(null); // För att hålla reda på eventuella fel

  const { data: omdbData, isLoading, isError } = useFetchMovieCard(`https://www.omdbapi.com/?i=${imdbID}&apikey=88d20769`);

  useEffect(() => {
    if (omdbData) {
      if (omdbData.Response === "False") {
        setError("Filmen kunde inte hittas.");
      } else {
        setMovie(omdbData); // Uppdatera state med filminformationen om filmen finns
      }
    }
  }, [imdbID, omdbData]);

  const { watchlist, addToWatchlist, removeFromWatchlist } = useOutletContext();

  // Kontrollera om filmen finns i watchlist
  const isInWatchlist = (movie) => {
    return watchlist.some((b) => b.imdbID === movie.imdbID);
  };

  // Hantera att gå tillbaka till startsidan
  const handleBackToHome = () => {
    navigate("/");
  };

  // Hantera att lägga till filmen till watchlist om den inte redan finns
  const handleAddToWatchlist = (movie) => {
    if (!isInWatchlist(movie)) {
      addToWatchlist(movie);
    }
  };

  const getNumericRating = (Rated) => {
    const numericRating = Rated?.match(/\d+(\.\d+)?/); // Matcha siffror med eller utan decimaler
    return numericRating ? numericRating[0] : "N/A"; // Returnera siffrorna eller "N/A" om inga siffror hittas
  };

  // Visa felmeddelande om det finns ett problem
  if (isError || error) {
    return <p className="error-text">{error || "Something went wrong while fetching the movie data."}</p>;
  }

  // Visa "loading" medan vi väntar på data
  if (isLoading || !movie) {
    return <p className="loading-text">Loading...</p>;
  }

  return (
    <div className="movie-page">
      <div className="movie-header">
        <img src={movie?.Poster} alt={movie?.Title} className="movie-poster" />
        <div className="movie-details">
          <h1 className="movie-title movie-title__small">
            {movie?.Title} ({movie?.Year})
          </h1>
          <article className="movie-desc">
            <aside className="movie-info movie-info__small">
              <div className="movie-rating">
                <i className="movie-icon">
                  <BsTicketPerforatedFill />
                </i>
                <p> {getNumericRating(movie?.Rated)} </p>
              </div>
              <div className="movie-year">
                <i className="movie-icon">
                  <FaCalendarAlt />
                </i>
                <p> {movie?.Released} </p>
              </div>
              <div className="movie-genre">
                <i className="movie-icon">
                  <FaFilm />
                </i>
                <p> {movie?.Genre} </p>
              </div>
            </aside>
            <p>{movie?.Plot}</p>
            <aside className="movie__extra-info">
              <p>
                <strong>Director:</strong> {movie?.Director}
              </p>
              <p>
                <strong>Actors:</strong> {movie?.Actors}
              </p>

              <p>
                <strong>Language:</strong> {movie?.Language}
              </p>
              <p>
                <strong>Awards:</strong> {movie?.Awards}
              </p>
            </aside>
          </article>
          <aside className="movie-card__button">
            {/* Knapp för att spara i Watchlist */}
            {isInWatchlist(movie) ? (
              <Button
                id={"smallCardBtn"}
                className={"errorpage__button lite-item__button"}
                onClickFunction={() => removeFromWatchlist(movie.imdbID)}
                btntext={"Remove"}
              />
            ) : (
              <Button
                id={"smallCardBtn"}
                className={"errorpage__button lite-item__button"}
                onClickFunction={() => handleAddToWatchlist(movie)}
                btntext={"Save"}
              />
            )}

            {/* Knapp för att gå tillbaka till startsidan */}
            <Button
              id="backToHome"
              className="errorpage__button lite-item__button"
              onClickFunction={handleBackToHome}
              btntext="Back to Home"
            />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
