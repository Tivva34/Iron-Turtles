import List from "../../Components/List";
import "./startPage.css";
import MovieCarousel from "../../Components/MovieCarousel/MovieCarousel";
import { useFetch } from "../../Scripts/useFetch";
import { useState } from "react";
import axios from "axios";

//  "Fisher-Yates shuffle-algorit" funktion för att slumpa ordningen på arrayen
const shuffleArray = (array) => {
  if (!Array.isArray(array)) return []; // Om arrayen inte är en array, returnera en tom array
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Byt plats på elementen
  }
  return shuffledArray;
};

function StartPage() {
  const url = "https://santosnr6.github.io/Data/favoritemovies.json";
  const { data, isLoading, isError } = useFetch(url);
  // console.log(data);
  const [convertedData, setConvertedData] = useState([]);
  // Hantera laddning och fel
  if (isLoading) {
    return <section>Loading...</section>;
  }

  if (isError) {
    return <section>Something went wrong!</section>;
  }

  // const addIdToArr = data.map((obj, index) => ({ ...obj, imdbID: index }));

  // Slumpa ordningen på filmerna om data finns och är en array
  const shuffledMovies = shuffleArray(data);

  return (
    <section className="carousel">
      <MovieCarousel />
      <section className="page-section">
        <h1>The Turtles Recommend</h1>
        {data && <List arr={shuffledMovies} />}
      </section>
    </section>
  );
}

export default StartPage;
