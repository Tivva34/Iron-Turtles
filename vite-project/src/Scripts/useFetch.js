import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
	const [data, setData] = useState(null); // Ändra initialvärdet till null
	const [isLoading, setIsLoading] = useState(true); // Standard är att ladda
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setIsError(false);

			try {
				const response = await axios.get(url);

				// Kontrollera om svaret är en array eller objekt
				setData(response.data);
			} catch (error) {
				setIsError(true);
				console.error("Error fetching data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, isLoading, isError };
};
