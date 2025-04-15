import React from "react";
import List from "../../Components/List";
import "./startPage.css";
import MovieCarousel from "../../Components/MovieCarousel/MovieCarousel";
import { useFetch } from "../../Scripts/useFetch";

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

  // Hantera laddning och fel
  if (isLoading) {
    return <section>Loading...</section>;
  }

  if (isError) {
    return <section>Something went wrong!</section>;
  }

  const addIdToArr = data.map((obj, index) => ({ ...obj, id: index }));

  // Slumpa ordningen på filmerna om data finns och är en array
  const shuffledMovies = shuffleArray(addIdToArr);

  return (
    <><MovieCarousel className="Carousel" />
    <section className="page-section">
      <h1>The Turtles Recommend</h1>
      {addIdToArr && <List arr={shuffledMovies} />}
    </section></>
  );
}

export default StartPage;
