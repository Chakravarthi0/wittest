import { useNavigate } from "react-router-dom";
import { quizCardType } from "../../types";
import "./quiz-card.css";
import toast from "react-hot-toast";

const QuizCard = ({
  title,
  redirectTo,
  isCategoryCard,
  imgUrl,
  id,
}: quizCardType) => {
  const navigate = useNavigate();

  const copyUrlTOClipboard = async () => {
    await navigator.clipboard.writeText(
      `https://deploy-preview-4--wittest.netlify.app/rules/${id}`
    );
    toast.success("Link copied to clipboard");
  };
  return (
    <div className="card quiz-card">
      <div className="quiz-img-container">
        <img className="quiz-img img-responsive" src={imgUrl} alt={title} />
      </div>
      {!isCategoryCard && (
        <div
          className="share-icon material-icons bg-white-pure"
          onClick={copyUrlTOClipboard}
        >
          <i className="fas fa-share black"></i>
        </div>
      )}
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
