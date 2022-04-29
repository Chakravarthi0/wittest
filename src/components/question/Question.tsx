import { questionType } from "../../types";
import "./question.css";

const Question = ({ isFromResult }: questionType) => {
  return (
    <div className="question-body">
      <p className="question-statement">
        What does Rick use to travel between dimensions and universes?
      </p>

      <div className="options-container">
        <p
          className={
            "option " +
            (isFromResult ? "no-hover default-cursor wrong-answer" : "")
          }
        >
          Space laser
        </p>
        <p
          className={
            "option " + (isFromResult ? "default-cursor no-hover" : "")
          }
        >
          Universe Key
        </p>
        <p
          className={
            "option " +
            (isFromResult ? "default-cursor correct-answer no-hover" : "")
          }
        >
          Portal gun
        </p>
        <p
          className={
            "option " + (isFromResult ? "no-hover default-cursor" : "")
          }
        >
          Tardis
        </p>
      </div>
    </div>
  );
};

export { Question };
