import { useState, useEffect } from "react";

export const useLocalStorageWatchlist = () => {
  const [watchlist, setWatchlist] = useState(() => {
    const stored = localStorage.getItem("watchlist");
    return JSON.parse(stored) || [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    setWatchlist((prev) => [...prev, movie]);
  };

  const removeFromWatchlist = (imdbID) => {
    console.log(imdbID);
    setWatchlist((prev) => prev.filter((b) => b.imdbID !== imdbID));
  };

  return { watchlist, addToWatchlist, removeFromWatchlist };
};
