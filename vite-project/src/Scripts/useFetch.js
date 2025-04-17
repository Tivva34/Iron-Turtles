import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => (response.data.Search ? setData([...response.data.Search]) : setData([...response.data])))
      .catch((error) => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, isError };
};

//Fungerade i bugfixbranchen

// export const useFetch = (url) => {
// 	const [data, setData] = useState([]);
// 	const [isLoading, setIsLoading] = useState(null);
// 	const [isError, setIsError] = useState(false);

// 	useEffect(() => {
// 	  setIsLoading(true);
// 	  axios
// 		.get(url)
// 		.then((response) => (response.data.Search ? setData([...response.data.Search]) : setData([...response.data])))
// 		.catch((error) => setIsError(true))
// 		.finally(() => setIsLoading(false));
// 	}, [url]);

// 	return { data, isLoading, isError };
//   };

// Krockande kod

// useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get(url)
//       .then((response) => (response.data.Search ? setData([...response.data.Search]) : setData([...response.data])))
//       .catch((error) => setIsError(true))
//       .finally(() => setIsLoading(false));
//   }, [url]);
// =======
// 	useEffect(() => {
// 		const fetchData = async () => {
// 			setIsLoading(true);
// 			setIsError(false);
// >>>>>>> dev

// 			try {
// 				const response = await axios.get(url);

// 				// Kontrollera om svaret är en array eller objekt
// 				setData(response.data);
// 			} catch (error) {
// 				setIsError(true);
// 				console.error("Error fetching data:", error);
// 			} finally {
// 				setIsLoading(false);
// 			}
// 		};

// 		fetchData();
// 	}, [url]);

// 	return { data, isLoading, isError };
// };

//Original

// export const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(null);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get(url)
//       .then((response) => setData([...response.data]))
//       .catch((error) => setIsError(true))
//       .finally(() => setIsLoading(false));
//   }, [url]);

//   return { data, isLoading, isError };
// };
