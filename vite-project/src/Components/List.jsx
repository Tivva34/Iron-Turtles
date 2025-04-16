import MovieCardSmall from "./MovieCardSmall/MovieCardSmall";

function List({ arr }) {
  return (
    <ul className="list">
      {arr.map((movie, index) => (
        <MovieCardSmall key={index} movie={movie} movieid={movie.id || movie.imdbID} />
      ))}
    </ul>
  );
}

export default List;
