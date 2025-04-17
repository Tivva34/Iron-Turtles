import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useOutletContext } from "react-router-dom";
import { useFetchMovieCard } from "../../Scripts/useFetchMovieCard";
import "./moviePage.css";

function MoviePage() {
  const { imdbID } = useParams(); // Hämtar imdbID från URL:n
  const navigate = useNavigate(); // För att navigera tillbaka till startsidan
  const [movie, setMovie] = useState(null); // State för att lagra filmens data
  const [error, setError] = useState(null); // För att hålla reda på eventuella fel

  const { data: omdbData, isLoading, isError } = useFetchMovieCard(`http://www.omdbapi.com/?i=${imdbID}&apikey=88d20769`);

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

  // Visa "loading" medan vi väntar på data
  if (isLoading || !movie) {
    return <p className="loading-text">Loading...</p>;
  }

  // Visa felmeddelande om det finns ett problem
  if (isError || error) {
    return <p className="error-text">{error || "Something went wrong while fetching the movie data."}</p>;
  }

  return (
    <div className="movie-page">
      <div className="movie-header">
        <img src={movie?.Poster} alt={movie?.Title} className="movie-poster" />
        <div className="movie-details">
          <h1 className="movie-title">
            {movie?.Title} ({movie?.Year})
          </h1>
          <p>
            <strong>Rated:</strong> {movie?.Rated}
          </p>
          <p>
            <strong>Released:</strong> {movie?.Released}
          </p>
          <p>
            <strong>Genre:</strong> {movie?.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie?.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie?.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie?.Plot}
          </p>
          <p>
            <strong>Language:</strong> {movie?.Language}
          </p>
          <p>
            <strong>Awards:</strong> {movie?.Awards}
          </p>

          {/* Knapp för att spara i Watchlist */}
          {isInWatchlist(movie) ? (
            <Button
              id={"smallCardBtn"}
              className={"errorpage__button list-item__button"}
              onClickFunction={() => removeFromWatchlist(movie.imdbID)}
              btntext={"Remove"}
            />
          ) : (
            <Button
              id={"smallCardBtn"}
              className={"errorpage__button list-item__button"}
              onClickFunction={() => handleAddToWatchlist(movie)}
              btntext={"Save"}
            />
          )}

          {/* Knapp för att gå tillbaka till startsidan */}
          <Button
            id="backToHome"
            className="errorpage__button list-item__button"
            onClickFunction={handleBackToHome}
            btntext="Back to Home"
          />
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
