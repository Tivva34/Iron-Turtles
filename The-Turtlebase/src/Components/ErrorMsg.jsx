import React from "react";
import { Link } from "react-router-dom";

function ErrorMsg({ gifsrc, alttext, specifierClass }) {
  return (
    <section className="page-section page-section--center">
      <img src={gifsrc} alt={alttext} className={`error-gif ${specifierClass}`} />

      <Link className="page__button page__button--big " to="/">
        Back to start
      </Link>
    </section>
  );
}

export default ErrorMsg;
