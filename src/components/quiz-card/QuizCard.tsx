import { useNavigate } from "react-router-dom";
import { quizCardType } from "../../types";
import { useGame } from "../../hooks";
import "./quiz-card.css";

const QuizCard = ({
  title,
  redirectTo,
  isCategoryCard,
  imgUrl,
  id,
}: quizCardType) => {
  const { getQuestions } = useGame();
  const navigate = useNavigate();
  return (
    <div className="card quiz-card">
      <div className="quiz-img-container">
        <img className="quiz-img img-responsive" src={imgUrl} alt={title} />
      </div>
      <p className="quiz-title text-center">{title}</p>
      <div className="card-actions text-center">
        {isCategoryCard ? (
          <button
            className="btn btn-primary btn-wide"
            onClick={() => navigate(redirectTo)}
          >
            Explore
          </button>
        ) : (
          <button
            className="btn btn-primary btn-wide"
            onClick={() => {
              navigate(redirectTo);
              getQuestions(id, title);
            }}
          >
            Play
          </button>
        )}
      </div>
    </div>
  );
};

export { QuizCard };
