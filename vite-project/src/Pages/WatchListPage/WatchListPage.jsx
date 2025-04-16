import React from "react";
import "./watchListPage.css";
import { useOutletContext } from "react-router-dom";
import List from "../../Components/List";
import ErrorMsg from "../../Components/ErrorMsg";

function WatchListPage() {
	const { watchlist } = useOutletContext();
	console.log(watchlist);

	return (
		<section className="watchlist-section">
			<h1>WatchListPage</h1>
			{watchlist.length > 0 ? (
				<List arr={watchlist} />
			) : (
				<ErrorMsg
					title={"This is not a great list. In fact, it's not even a list."}
					text={"Let's fill it up!"}
				/>
			)}
		</section>
	);
}

export default WatchListPage;
