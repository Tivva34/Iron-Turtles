import React from "react";
import "./ErrorPage.css";
import TurtleSVG from "../../assets/404-turtle.svg";
import Button from "../../components/Button";

function ErrorPage() {
  return (
    <div className="error-container">
      <h1>Oh no! This was not supposed to happen...</h1>
      <img src={TurtleSVG} alt="404 Turtle" className="error__turtle" />
      <Button
        id="go-back"
        className="page__button page__button--big"
        onClickFunction={() => window.history.back()}
        btntext="← Take me back"
      />
    </div>
  );
}

export default ErrorPage;
