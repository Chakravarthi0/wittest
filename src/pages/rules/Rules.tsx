import { DocumentData } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components";
import { useGame, useQuiz } from "../../hooks";
import "./rules.css";

const Rules = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const {
    quizState: { quizzes, loading },
  } = useQuiz();
  const { resetSelections, getQuestions } = useGame();
  const currentQuiz = quizzes.find((ele: DocumentData) => ele.id === quizId);

  useEffect(() => {
    resetSelections();
  }, []);
  return (
    <div className="rules-body text-center">
      {loading ? (
        <Loader isFullScreen={true} />
      ) : (
        <>
          <h1 className="page-head">{currentQuiz?.quizTitle}</h1>

          <h2>Rules</h2>

          <ul className="list list-border rules-list">
            <li>The quiz contains 5 questions.</li>
            <li>Each question carries 20 marks.</li>
            <li>You have 1 minute and 30 seconds to finsih the quiz.</li>
            <li>Each question has only one right answer.</li>
          </ul>

          <button
            className="btn btn-primary start-quiz-btn"
            onClick={() => {
              getQuestions(quizId, currentQuiz?.quizTitle);
              navigate("/question");
            }}
          >
            Start Quiz
          </button>
        </>
      )}
    </div>
  );
};

export { Rules };
