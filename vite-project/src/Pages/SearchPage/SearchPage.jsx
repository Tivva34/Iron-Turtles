import "./searchPage.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Scripts/useFetch";
import List from "../../Components/List";

function SearchPage() {
  const searchprase = useParams();

  const apiKey = "27b02bae";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchprase.searchprase)}`; // encodeURIComponent kodar om en sträng till att blir säker för att använda i en url. Tar bort mellanslag, kolon etc.
  // const url = `http://www.omdbapi.com/?apikey=27b02bae&s=harry%20potter`;

  const { data, isLoading, isError } = useFetch(url);

  // Hantera laddning och fel
  if (isLoading) {
    return <section>Loading...</section>;
  }

  if (isError) {
    return <section>Something went wrong!</section>;
  }

  return (
    <section className="page-section">
      <h1> Search Results for "{searchprase.searchprase}"</h1>; {data && <List arr={data} />}
    </section>
  );
}

export default SearchPage;
