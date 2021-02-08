import { useState, useRef, Fragment, useEffect } from "react";
import OptionList from "./optionsList";
import Button from "./Button";

const Question = ({
  question,
  onChangeQuestion,
  currentQuestion,
  userAnswers,
}) => {
  const qA = useRef(null);
  const qB = useRef(null);
  const qC = useRef(null);
  const qD = useRef(null);

  // const optLetters = ["A", "B", "C", "D"];

  const optionsRef = [qA, qB, qC, qD];
  const [enableButton, setEnableButton] = useState(true);
  // const [isNextChecked, setIsNextChecked] = useState(null);

  const insertQuestion = () => {
    const userAnswer = optionsRef.filter((opt) => opt.current.value === "true");
    const userAnswerLetter = userAnswer[0].current.id;
    onChangeQuestion(userAnswerLetter);
  };

  const enableButtonHandler = () => {
    setEnableButton(false);
  };

  return (
    <Fragment>
      <div className="q-head">
        <p className="p-head">
          Question
          <span className="number-question">{currentQuestion + 1}</span>/5
        </p>
        <h2 className="q-title">{question.title}</h2>
      </div>
      <div className="q-body">
        <OptionList
          optionsRef={optionsRef}
          optionsList={question.options}
          shouldEnableButton={enableButtonHandler}
          // isNextChecked={isNextChecked}
        />
        {/* <Button
          click={insertQuestion}
          enableButton={() =>
            enableButton("prev", currentQuestion, userAnswers)
          }
          text="Prev"
        /> */}
        <Button
          click={() => insertQuestion("next")}
          enableButton={enableButton}
          text="Next"
        />
      </div>
    </Fragment>
  );
};

export default Question;
