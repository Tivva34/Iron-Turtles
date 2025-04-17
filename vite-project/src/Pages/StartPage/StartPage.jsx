import List from "../../Components/List";
import "./startPage.css";
import MovieCarousel from "../../Components/MovieCarousel/MovieCarousel";
import { useFetch } from "../../Scripts/useFetch";
import ErrorMsg from "../../Components/ErrorMsg";

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
    <ErrorMsg
      gifsrc={"https://discord.com/channels/@me/1353988068419567638/1362371560773648585"}
      alttext={"Gif with turtle"}
      specifierClass={"error-gif--flip-horizontal"}
    />;
    // return <section>Loading...</section>;
  }

  if (isError) {
    <ErrorMsg
      gifsrc={"https://discord.com/channels/@me/1353988068419567638/1362371560773648585"}
      alttext={"Gif with turtle"}
      specifierClass={"error-gif--flip-horizontal"}
    />;
  }

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
