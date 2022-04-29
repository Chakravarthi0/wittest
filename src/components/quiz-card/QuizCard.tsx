import { useNavigate } from "react-router-dom";
import { quizCardType } from "../../types";
import "./quiz-card.css";

const QuizCard = ({ title, redirectTo, isCategoryCard }: quizCardType) => {
  const navigate = useNavigate();
  return (
    <div className="card quiz-card">
      <div className="quiz-img-container">
        <img
          className="quiz-img img-responsive"
          src="../../assests/rickandmorty.jpg"
        />
      </div>
      <p className="quiz-title text-center">{title}</p>
      <div className="card-actions text-center">
        <button
          className="btn btn-primary btn-wide"
          onClick={() => navigate(redirectTo)}
        >
          {isCategoryCard ? "Explore" : "Play"}
        </button>
      </div>
    </div>
  );
};

export { QuizCard };
