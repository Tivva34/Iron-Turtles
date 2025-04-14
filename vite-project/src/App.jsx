import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useLocalStorageWatchlist } from "./Scripts/useLocalStorageWatchlist";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import MoviePage from "./Pages/MoviePage/MoviePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import StartPage from "./Pages/StartPage/StartPage";
import WatchListPage from "./Pages/WatchListPage/WatchListPage";
import { useLocalStorageWatchlist } from "./Scripts/useLocalStorageWatchlist";

function App() {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useLocalStorageWatchlist();

  const router = createBrowserRouter([
    { path: "/", element: <StartPage />, errorElement: <ErrorPage /> },
    { path: "/movie:id", element: <MoviePage />, errorElement: <ErrorPage /> },
    { path: "/search", element: <SearchPage />, errorElement: <ErrorPage /> },
    { path: "/watchlist", element: <WatchListPage /> },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
