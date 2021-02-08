import { useState, useEffect, useRef } from "react";
import "./App.css";
import Question from "./components/question";
import Score from "./components/Score";
import MyTimer from "./components/myTimer";
import { questions, answers } from "./questions.json";

const App = () => {
  const [userAnswers, setUserAnswers] = useState([null, "D", null, null, null]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finishedTest, setFinishedTest] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [timerEnd, setTimerEnd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimerEnd(true);
    }, 300000);
  });

  useEffect(() => {
    if (finishedTest) {
      const rightAnswers = userAnswers.filter(
        (ua, index) => ua == answers[index]
      );
      setCorrectAnswers(rightAnswers);
    }
  }, [userAnswers, finishedTest]);

  const onChangeQuestion = (optLetter) => {
    const userOpts = [...userAnswers];
    userOpts[currentQuestion] = optLetter;
    setUserAnswers(userOpts);
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion >= 4) {
      setFinishedTest(true);
    }
  };

  let questionCard = (
    <div>
      <MyTimer />
      <Question
        currentQuestion={currentQuestion}
        question={questions[currentQuestion]}
        onChangeQuestion={onChangeQuestion}
        userAnswers={userAnswers}
      />
    </div>
  );

  if (finishedTest || timerEnd) {
    questionCard = (
      <Score score={correctAnswers.length} questionsLength={questions.length} />
    );
  }

  return <div className="q-card">{questionCard}</div>;
};

export default App;
