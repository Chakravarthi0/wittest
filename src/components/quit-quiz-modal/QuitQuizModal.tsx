import { useNavigate } from "react-router-dom";
import { quitQuizModalType } from "../../types";
import { useGame } from "../../hooks";
import "./quit-quiz-modal.css";

const QuitQuizModal = ({ isModalOpen, setIsModalOpen }: quitQuizModalType) => {
  const navigate = useNavigate();
  const { resetQuiz } = useGame();
  return (
    <div>
      <div className={`modal-bg ` + (!isModalOpen ? "hidden" : "")}>
        <div className="modal position-rel">
          <h2 className="text-large list-head">Quit quiz</h2>
          <i
            className="material-icons modal-close-btn position-abs top-0 right-0"
            onClick={() => setIsModalOpen(false)}
          >
            close
          </i>
          <p>Are you sure that you want to quit?</p>
          <div className="modal-actions quit-modal-actions">
            <button
              className="btn btn-primary modal-close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              No
            </button>
            <button
              className="btn btn-primary-ol modal-close-btn"
              onClick={() => {
                resetQuiz();
                navigate("/");
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { QuitQuizModal };
