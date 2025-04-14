import { Outlet } from "react-router-dom";
import { useLocalStorageWatchlist } from "../Scripts/useLocalStorageWatchlist";

function RootLayout() {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useLocalStorageWatchlist(); // Tar emot och dekonstruerar från en hook som kan uppdatera local storage

  return (
    <>
      <Outlet context={{ watchlist, addToWatchlist, removeFromWatchlist }} />
    </>
  );
}

export default RootLayout;
