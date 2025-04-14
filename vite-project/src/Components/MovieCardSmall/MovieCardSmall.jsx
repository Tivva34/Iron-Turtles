import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

function MovieCardSmall({ movie }) {
  console.log(movie);

  return (
    <>
      <div className="list-item__div">
        <Link className="nav-link">
          <li className="list-item__li">
            <div className="list-item__img-div">
              <img src={movie.Poster} alt="" className="list-item__img" />
            </div>
            <h3 className="list-item__title">{movie.Title}</h3>
          </li>
        </Link>
        <Button id={"smallCardBtn"} className={"lite-item__button"} btntext={"Save"} />
      </div>
    </>
  );
}

export default MovieCardSmall;
