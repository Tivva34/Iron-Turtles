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
      element: <RootLayout />, // Alla barn till den här komponenten får med sig innehållet i RootLayout, d.v.s. watchlist,addToWatchlist och removeFromWatchlist samt header och footer.
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <StartPage />, errorElement: <ErrorPage /> },
        {
          path: "/movie/:id",
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

export default App;
