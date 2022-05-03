import { resultCardType } from "../../types";
import "./result-card.css";

const ResultCard = ({
  question,
  currentQuestionIndex,
  options,
  answerIndex,
  selectedOption,
}: resultCardType) => {
  return (
    <>
      <div className="quiz-stat"></div>

      <div className="question-body">
        <div className="flex result-stat-container">
          <p>Question.{currentQuestionIndex + 1} :</p>
          {selectedOption === answerIndex ? (
            <span className="success ">20/20</span>
          ) : (
            <span className="danger ">0/20</span>
          )}
          {selectedOption === -1 && (
            <span className="danger ">(not attempted)</span>
          )}
        </div>
        <p className="question-statement">{question}</p>

        <div className="options-container">
          {options.map((option: string, index: number) => (
            <p
              key={option}
              className={
                "option no-hover default-cursor " +
                (index == answerIndex
                  ? "correct-answer"
                  : index === selectedOption
                  ? "wrong-answer"
                  : "")
              }
            >
              {option}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export { ResultCard };
