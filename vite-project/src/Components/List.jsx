import MovieCardSmall from "./MovieCardSmall/MovieCardSmall";

function List({ movieList }) {
  return (
    <ul className="list">
      {movieList.map((movie, index) => {
        return <MovieCardSmall key={index} movie={movie} />;
      })}
    </ul>
  );
}

export default List;
