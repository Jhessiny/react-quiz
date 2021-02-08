import { useEffect, useState } from "react";
import Button from "./Button";

const Score = ({ score, questionsLength }) => {
  const [approved, setApproved] = useState(false);
  const minGrade = questionsLength / 2;

  useEffect(() => {
    if (score >= minGrade) {
      console.log("approved", score, minGrade);
      setApproved(true);
    }
  }, [score, minGrade]);

  const restartTest = () => {
    window.location.reload(true);
  };

  return (
    <div className="score-info">
      <div className="q-head">
        <h2>Teste finalizado com sucesso!</h2>
      </div>
      <div className="q-body">
        <p>Você acertou {score} questões de 5.</p>
        <p>
          Você está
          <span className={approved ? "approved-p" : "repproved-p"}>
            {approved ? " aprovado." : " reprovado."}
          </span>
        </p>
        {approved ? <p>Parabéns!</p> : <p>Tente novamente!</p>}
      </div>
      <Button text="Try Again" click={restartTest} />
    </div>
  );
};

export default Score;
