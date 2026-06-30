import { Outlet } from "react-router-dom";
import { useLocalStorageWatchlist } from "../Scripts/useLocalStorageWatchlist";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function RootLayout() {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useLocalStorageWatchlist(); // Tar emot och dekonstruerar från en hook som kan uppdatera local storage

  return (
    <div className="container">
      <Header />
      <main>
        <Outlet context={{ watchlist, addToWatchlist, removeFromWatchlist }} />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
