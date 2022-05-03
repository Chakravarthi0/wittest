import { useState } from "react";
import { QuitQuizModal, Question } from "../../components";
import { useGame } from "../../hooks";
import "./question-page.css";

const QuestionPage = () => {
  const { gameState } = useGame();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {isModalOpen && (
        <QuitQuizModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <button
        className="btn btn-danger quit-btn modal-open-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Quit
      </button>
      <h1 className="page-head question-head">{gameState.quizTitle}</h1>

      <div className="question-body">
        <Question />
      </div>
    </div>
  );
};

export { QuestionPage };
