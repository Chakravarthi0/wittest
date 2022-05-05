import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TimeUPModal, Loader, LoadingError } from "../";
import { useGame } from "../../hooks";
import "./question.css";

const Question = () => {
  const navigate = useNavigate();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const { getNextQuestion, getPreviousQuestion, gameState, setOption } =
    useGame();
  console.log(gameState);
  const { questions, currentQuestionIndex, selectedOptions, loading, error } =
    gameState;
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const currInterval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(currInterval);
          setShowModal(true);
        } else {
          setSeconds(59);
          setMinutes((prev) => prev - 1);
        }
      } else {
        setSeconds((prev) => prev - 1);
      }
    }, 1000);
    return () => {
      clearInterval(currInterval);
    };
  }, [seconds]);

  useEffect(() => {
    setSelectedOptionIndex(selectedOptions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  return (
    <>
      {error && <LoadingError />}
      {loading ? (
        <Loader isFullScreen={true} />
      ) : (
        <div>
          {showModal && <TimeUPModal />}
          <div className="quiz-stat">
            <p>
              Question: {currentQuestionIndex + 1}/{questions.length}
            </p>
            <p>
              {minutes < 10 ? "0" + minutes : minutes} :
              {seconds < 10 ? "0" + seconds : seconds}
            </p>
          </div>
          <div className="question-body">
            <p className="question-statement">
              {questions[currentQuestionIndex]?.question}
            </p>

            <div className="options-container">
              {questions[currentQuestionIndex]?.options.map(
                (option: string, index: number) => (
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
                )
              )}

              <div className="question-actions-container">
                <button
                  className={
                    "btn btn-primary " +
                    (currentQuestionIndex === 0 ? "disabled-primary-btn" : "")
                  }
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
                      navigate("/result", { replace: true });
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
        </div>
      )}
    </>
  );
};

export { Question };
