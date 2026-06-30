import MovieCardSmall from "./MovieCardSmall/MovieCardSmall";

function List({ arr }) {
  return (
    <ul className="list">
      {arr.map((movie, index) => (
        <MovieCardSmall key={index} movie={movie} />
      ))}
    </ul>
  );
}

export default List;
