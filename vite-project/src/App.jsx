import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import MoviePage from "./Pages/MoviePage/MoviePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import StartPage from "./Pages/StartPage/StartPage";
import WatchListPage from "./Pages/WatchListPage/WatchListPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <StartPage /> },
        {
          path: "/movie:id",
          element: <MoviePage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        { path: "/watchlist", element: <WatchListPage /> },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

// Originalkod
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <StartPage />, errorElement: <ErrorPage /> },
    {
      path: "/movie:id",
      element: <MoviePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
      errorElement: <ErrorPage />,
    },
    { path: "/watchlist", element: <WatchListPage /> },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
