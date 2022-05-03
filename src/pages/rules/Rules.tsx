import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../hooks";
import "./rules.css";

const Rules = () => {
  const navigate = useNavigate();
  const { resetSelections } = useGame();
  useEffect(() => {
    resetSelections();
  }, []);
  return (
    <div className="rules-body text-center">
      <h1 className="page-head">Rules</h1>

      <ul className="list list-border rules-list">
        <li>The quiz contains 5 questions.</li>
        <li>Each question carries 20 marks.</li>
        <li>Each question has only one right answer.</li>
      </ul>

      <button
        className="btn btn-primary start-quiz-btn"
        onClick={() => navigate("/question")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export { Rules };
