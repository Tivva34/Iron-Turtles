import React from "react";
import "./watchListPage.css";
import { useOutletContext } from "react-router-dom";
import List from "../../Components/List";

function WatchListPage(testArr) {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useOutletContext();
  console.log(watchlist);
  return (
    <section>
      <h1>WatchListPage</h1>
      {watchlist && <List arr={watchlist} />}
    </section>
  );
}

export default WatchListPage;
