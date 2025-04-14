import { useState } from 'react';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import MoviePage from './Pages/MoviePage/MoviePage';
import SearchPage from './Pages/SearchPage/SearchPage';
import StartPage from './Pages/StartPage/StartPage';
import WatchListPage from './Pages/WatchListPage/WatchListPage';
import MovieCaroussel from './Components/MovieCaroussel';

function App() {
	const router = createBrowserRouter([
		{ path: '/', element: <StartPage />, errorElement: <ErrorPage /> },
		{
			path: '/movie:id',
			element: <MoviePage />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/search',
			element: <SearchPage />,
			errorElement: <ErrorPage />,
		},
		{ path: '/watchlist', element: <WatchListPage /> },
	]);

	return (
		<div className="app">
			<MovieCaroussel />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
