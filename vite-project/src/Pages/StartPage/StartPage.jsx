import React from "react";
import List from "../../Components/List";
import "./startPage.css";
import testMovies from "../../data/testMovies";

function StartPage() {
  return (
    <>
      <h1>Startpage</h1>
      <List movieList={testMovies} />
    </>
  );
}

export default StartPage;
