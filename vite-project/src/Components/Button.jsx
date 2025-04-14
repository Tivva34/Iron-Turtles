function Button({ id, className, onClickFunction, btntext }) {
  return (
    <button id={id} className={`page__button ${className}`} onClick={onClickFunction}>
      {btntext}
    </button>
  );
}

export default Button;
