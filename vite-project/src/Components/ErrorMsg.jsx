import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function ErrorMsg({ title, text }) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{text}</p>
      <Link className="errorpage__button " to="/">
        Back to start
      </Link>
    </section>
  );
}

export default ErrorMsg;
