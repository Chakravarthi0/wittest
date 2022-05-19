import { ChangeEvent, useState } from "react";
import { createQuestionType, ReactChangeEvent } from "../../types";
import "./create-question.css";

const CreateQuestion = ({
  index,
  setCreateQuizData,
  isAdded,
}: {
  index: number;
  setCreateQuizData: React.Dispatch<
    React.SetStateAction<{
      quizTitle: string;
      quizCategory: string;
      quizImgUrl: string;
      noOfQuestions: number;
      questions: createQuestionType[];
    }>
  >;
  isAdded: createQuestionType | undefined;
}) => {
  const [questionData, setQuestionData] = useState({
    question: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answerIndex: 1,
  });

  const handleChange = (
    key: string,
    event:
      | ReactChangeEvent
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    setQuestionData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const isButtonDiabled = () => {
    if (
      questionData.question.trim() === "" ||
      questionData.optionOne.trim() === "" ||
      questionData.optionTwo.trim() === "" ||
      questionData.optionThree.trim() === "" ||
      questionData.optionFour.trim() === ""
    ) {
      return true;
    }
    return false;
  };

  const submitHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setCreateQuizData((prev) => {
      const questionsCopy = prev.questions.slice();
      questionsCopy[index] = {
        question: questionData.question,
        optionOne: questionData.optionOne,
        optionTwo: questionData.optionTwo,
        optionThree: questionData.optionThree,
        optionFour: questionData.optionFour,
        answerIndex: questionData.answerIndex,
      };
      return {
        ...prev,
        questions: questionsCopy,
      };
    });
  };
  return (
    <div>
      <form className="create-questions-form flex-container">
        <div>
          <h3 className="text-center create-quiz-heading form-label-required">
            Question {index + 1}
          </h3>
          <textarea
            className="question-text"
            value={questionData.question}
            onChange={(e) => handleChange("question", e)}
            required
          />
        </div>

        <h3 className="text-center create-quiz-heading">Options</h3>
        <div className="options-input-grid">
          <div>
            <h4 className="form-label-required">Option 1</h4>
            <input
              type="text"
              value={questionData.optionOne}
              onChange={(e) => handleChange("optionOne", e)}
              required
            />
          </div>
          <div>
            <h4 className="form-label-required">Option 2</h4>
            <input
              type="text"
              value={questionData.optionTwo}
              onChange={(e) => handleChange("optionTwo", e)}
              required
            />
          </div>

          <div>
            <h4 className="form-label-required">Option 3</h4>
            <input
              type="text"
              value={questionData.optionThree}
              onChange={(e) => handleChange("optionThree", e)}
              required
            />
          </div>

          <div>
            <h4 className="form-label-required">Option 4</h4>
            <input
              type="text"
              value={questionData.optionFour}
              onChange={(e) => handleChange("optionFour", e)}
              required
            />
          </div>
        </div>

        <div className="flex-container">
          <h3 className="text-center create-quiz-heading form-label-required">
            Select the Correct Option
          </h3>
          <select
            className="dropdown-list"
            value={questionData.answerIndex}
            onChange={(e) => handleChange("answerIndex", e)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            className={
              "btn btn-primary add-question-btn " +
              (isButtonDiabled() ? "disabled-primary-btn" : "")
            }
            disabled={isButtonDiabled()}
            onClick={submitHandler}
          >
            {isAdded ? "Update question" : "Add question"}
          </button>
        </div>
      </form>
    </div>
  );
};

export { CreateQuestion };
