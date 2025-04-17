import axios from "axios";
import { useState, useEffect } from "react";
// import ErrorMsg from "../Components/ErrorMsg";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    // setTimeout(() => {
    axios
      .get(url)
      .then((response) => (response.data.Search ? setData([...response.data.Search]) : setData([...response.data])))
      .catch((error) => setIsError(true))
      .finally(() => setIsLoading(false));

    //   setInterval(3000);
    // }, 3000);
  }, [url]);

  return { data, isLoading, isError };
};
