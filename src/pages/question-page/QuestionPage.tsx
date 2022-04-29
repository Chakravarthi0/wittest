import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuitQuizModal, Question } from "../../components";
import "./question-page.css";

const QuestionPage = () => {
  const navigate = useNavigate();
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
      <h1 className="page-head question-head">Rick And Morty</h1>
      {/* question */}
      <div className="question-body">
        <div className="quiz-stat">
          <p>Question: 5/5</p>
          <p>Score 100</p>
        </div>

        <Question />
        <button
          className="btn btn-primary next-btn"
          onClick={() => navigate("/result")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { QuestionPage };
