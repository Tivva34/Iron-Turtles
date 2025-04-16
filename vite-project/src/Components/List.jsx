import MovieCardSmall from "./MovieCardSmall/MovieCardSmall";

function List({ arr }) {
  console.log(arr);

  return (
    <ul className="list">
      {arr.map((movie, index) => (
        <MovieCardSmall key={index} movie={movie} />
      ))}
    </ul>
  );
}

export default List;

// Original

// function List({ arr }) {
//   console.log(arr);

//   return (
//     <ul className="list">
//       {arr.map((movie, index) => (
//         <MovieCardSmall key={index} movie={movie} movieid={movie.id || movie.imdbID} />
//       ))}
//     </ul>
//   );
// }

// export default List;
