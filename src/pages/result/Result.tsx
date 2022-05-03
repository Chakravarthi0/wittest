import { useNavigate } from "react-router-dom";
import { useGame } from "../../hooks";
import { DocumentData } from "firebase/firestore";
import { ResultCard } from "../../components";
import "./result.css";

const Result = () => {
  const navigate = useNavigate();
  const {
    resetQuiz,
    gameState: { questions, selectedOptions },
  } = useGame();
  const totalPoints = questions.reduce(
    (acc: number, curr: number, index: number) =>
      questions[index].answerIndex === selectedOptions[index] ? acc + 20 : acc,
    0
  );
  return (
    <div>
      <h1 className="result-head page-head">Result</h1>

      <h2 className="final-score">
        Final Score: {totalPoints}/{questions.length * 20}
      </h2>

      {questions.map((questionData: DocumentData, index: number) => (
        <ResultCard
          key={questionData.id}
          question={questionData.question}
          currentQuestionIndex={index}
          options={questionData.options}
          answerIndex={questionData.answerIndex}
          selectedOption={selectedOptions[index]}
        />
      ))}

      <button
        className="btn btn-primary finish-btn"
        onClick={() => {
          resetQuiz();
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export { Result };
