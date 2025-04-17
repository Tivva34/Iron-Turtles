import React from "react";
import "./watchListPage.css";
import { useOutletContext } from "react-router-dom";
import List from "../../Components/List";
import ErrorMsg from "../../Components/ErrorMsg";

function WatchListPage() {
  const { watchlist } = useOutletContext();
  console.log(watchlist);

  return (
    <section className="page-section">
      <h1>{watchlist.length < 1 ? "So empty... So sad.." : "My Watchlist"}</h1>
      {watchlist.length > 0 ? (
        <List arr={watchlist} />
      ) : (
        <ErrorMsg
          gifsrc={"https://img3.wikia.nocookie.net/__cb20130413210255/anime-arts/images/1/1d/Pokemon-gif-omg-noob.gif"}
          alttext={"Pokemongif"}
        />
      )}
    </section>
  );
}

export default WatchListPage;
