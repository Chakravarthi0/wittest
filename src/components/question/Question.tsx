import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../hooks";
import "./question.css";

const Question = () => {
  const navigate = useNavigate();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const { getNextQuestion, getPreviousQuestion, gameState, setOption } =
    useGame();
  const { questions, currentQuestionIndex, selectedOptions } = gameState;
  const { question, options } = questions[currentQuestionIndex];

  useEffect(() => {
    setSelectedOptionIndex(selectedOptions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  return (
    <>
      <div className="quiz-stat">
        <p>
          Question: {currentQuestionIndex + 1}/{questions.length}
        </p>
      </div>
      <div className="question-body">
        <p className="question-statement">{question}</p>

        <div className="options-container">
          {options.map((option: string, index: number) => (
            <p
              key={option}
              className={
                "option " +
                (selectedOptionIndex === index ? "selected-option" : "")
              }
              onClick={() => setSelectedOptionIndex(index)}
            >
              {option}
            </p>
          ))}

          <div className="question-actions-container">
            <button
              className={"btn btn-primary " + (currentQuestionIndex === 0 ? "disabled-primary-btn" : "")}
              onClick={() => {
                setOption(selectedOptionIndex);
                getPreviousQuestion();
              }}
              disabled={currentQuestionIndex === 0}
            >
              {"< Prev"}
            </button>
            {currentQuestionIndex + 1 === questions.length ? (
              <button
                className="btn btn-primary"
                onClick={() => {
                  setOption(selectedOptionIndex);
                  navigate("/result");
                }}
              >
                Finish
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => {
                  setOption(selectedOptionIndex);
                  getNextQuestion();
                }}
              >
                {"Next >"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { Question };
