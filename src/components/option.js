const Option = ({ propsRef, optText, optChecked, optIndex, changeInput }) => {
  const optLetters = ["A", "B", "C", "D"];

  return (
    <li>
      <input
        ref={propsRef}
        id={optLetters[optIndex]}
        name="answer"
        type="radio"
        value={optChecked}
        onChange={() => changeInput(optIndex)}
      />
      <label htmlFor={optLetters[optIndex]}>{optText}</label>
    </li>
  );
};

export default Option;
