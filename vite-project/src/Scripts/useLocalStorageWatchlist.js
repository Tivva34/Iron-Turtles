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

<<<<<<< HEAD
  const removeFromWatchlist = (imdbID) => {
    console.log(imdbID);

    setWatchlist((prev) => prev.filter((b) => b.imdbID !== imdbID));
  };
=======
	const removeFromWatchlist = (id) => {
		console.log(id);

		setWatchlist((prev) => prev.filter((b) => b.id !== id));
	};
>>>>>>> dev

	return { watchlist, addToWatchlist, removeFromWatchlist };
};

// Original

// export const useLocalStorageWatchlist = () => {
//   const [watchlist, setWatchlist] = useState(() => {
//     const stored = localStorage.getItem("watchlist");
//     return JSON.parse(stored) || [];
//   });

//   useEffect(() => {
//     localStorage.setItem("watchlist", JSON.stringify(watchlist));
//   }, [watchlist]);

//   const addToWatchlist = (movie) => {
//     setWatchlist((prev) => [...prev, movie]);
//   };

//   const removeFromWatchlist = (id) => {
//     console.log(id);

//     setWatchlist((prev) => prev.filter((b) => b.id !== id));
//   };

//   return { watchlist, addToWatchlist, removeFromWatchlist };
// };
