import React from "react";

function List(arr) {
  return (
    <ul className="list">
      {arr.map((item) => {
        return <MovieCardSmall>{item}</MovieCardSmall>;
      })}
    </ul>
  );
}

export default List;
