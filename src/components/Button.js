const Button = ({ click, enableButton, text }) => {
  return (
    <button
      className="btn"
      type="button"
      onClick={click}
      disabled={enableButton}
    >
      {text}
    </button>
  );
};

export default Button;
