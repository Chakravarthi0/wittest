import { DocumentData, DocumentReference } from "firebase/firestore";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CreateQuestion, LoadingModal } from "../../components";
import { useQuiz } from "../../hooks";
import { ReactChangeEvent, createQuestionType } from "../../types";
import { addQuiz, addQuestion } from "../../utils";
import "./create-quiz.css";

const CreateQuiz = () => {
  const [isEnteringQuestions, setIsEnteringQuestions] = useState(false);
  const [isUploadingData, setIsUploadingData] = useState(false);
  const [createQuizData, setCreateQuizData] = useState({
    quizTitle: "",
    quizCategory: "science",
    quizImgUrl: "",
    noOfQuestions: 5,
    questions: [] as createQuestionType[],
  });

  const {
    quizState: { categories },
    refreshQuiz,
  } = useQuiz();

  const navigate = useNavigate();

  const isButtonDisabled = () => {
    if (
      createQuizData.quizTitle.trim() === "" ||
      createQuizData.quizCategory.trim() === "" ||
      createQuizData.quizImgUrl.trim() === "" ||
      createQuizData.noOfQuestions < 5 ||
      createQuizData.noOfQuestions > 10
    ) {
      return true;
    }
    return false;
  };
  const handleChange = (
    key: string,
    event:
      | ReactChangeEvent
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    setCreateQuizData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const makeNumberArray = (num: number) => {
    const result = [];
    for (let i = 1; i <= num; i++) {
      result.push(i);
    }
    return result;
  };

  const canSubmit = () => {
    if (
      createQuizData.questions.length !== Number(createQuizData.noOfQuestions)
    ) {
      console.log(
        "no of q mismatch",
        createQuizData.questions.length,
        createQuizData.noOfQuestions
      );
      return true;
    } else {
      for (let i = 0; i < createQuizData.questions.length; i++) {
        if (!createQuizData.questions[i]) {
          console.log("empty ele at ", i);
          return true;
        }
      }
    }
    return false;
  };

  const submitQuiz = async () => {
    console.log("submitting");
    setIsUploadingData(true);
    const docId = await addQuiz({
      quizTitle: createQuizData.quizTitle.trim(),
      quizCategory: createQuizData.quizCategory,
      quizImgUrl: createQuizData.quizImgUrl.trim(),
    });

    const promiseArr: Promise<string | DocumentReference<DocumentData>>[] = [];

    try {
      createQuizData?.questions?.forEach((currQuestionData) => {
        promiseArr.push(
          addQuestion({
            quizId: docId,
            questionData: {
              question: currQuestionData?.question.trim(),
              options: [
                currQuestionData?.optionOne.trim(),
                currQuestionData?.optionTwo.trim(),
                currQuestionData?.optionThree.trim(),
                currQuestionData?.optionFour.trim(),
              ],
              answerIndex: currQuestionData?.answerIndex - 1,
            },
          })
        );
      });
      await Promise.all(promiseArr);
      setIsUploadingData(false);
      navigate("/quizzes");
      toast.success("Quiz created successfully");
      await refreshQuiz();
    } catch (err) {
      navigate("/quizzes");
      setIsUploadingData(false);
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      {isUploadingData && <LoadingModal />}
      {!isEnteringQuestions ? (
        <form className="quiz-info">
          <h1 className="text-center">Create Quiz</h1>
          <div>
            <label className="form-label-required text-large">
              Enter Title
            </label>
            <input
              type="text"
              value={createQuizData.quizTitle}
              onChange={(e) => handleChange("quizTitle", e)}
              required
            />
          </div>

          <div>
            <label className="form-label-required text-large">
              Enter number of questions(Min- 5, max-10)
            </label>
            <input
              type="number"
              min="5"
              max="10"
              value={createQuizData.noOfQuestions}
              onChange={(e) => handleChange("noOfQuestions", e)}
              required
            />
          </div>

          <div>
            <label className="form-label-required text-large">Category</label>
            <select
              value={createQuizData.quizCategory}
              placeholder={"Choose a category"}
              onChange={(e) => handleChange("quizCategory", e)}
            >
              {categories.map((ele: DocumentData) => (
                <option value={ele.categoryName}>{ele.categoryTitle}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label-required text-large">Image url</label>
            <input
              type="text"
              required
              value={createQuizData.quizImgUrl}
              onChange={(e) => handleChange("quizImgUrl", e)}
            />
          </div>

          <button
            className={
              "btn btn-primary " +
              (isButtonDisabled() ? "disabled-primary-btn" : "")
            }
            disabled={isButtonDisabled()}
            onClick={() => {
              setIsEnteringQuestions(true);
            }}
          >
            Next
          </button>
        </form>
      ) : (
        <div className="enter-questions-section">
          <button
            className="btn btn-primary back-btn"
            onClick={() => setIsEnteringQuestions(false)}
          >
            Back
          </button>
          {/* <CreateQuestion /> */}

          {[
            makeNumberArray(createQuizData.noOfQuestions).map((ele, index) => (
              <CreateQuestion
                index={index}
                setCreateQuizData={setCreateQuizData}
                isAdded={createQuizData.questions[index]}
              />
            )),
          ]}

          <div className="flex justify-center">
            <button
              className={
                "btn btn-primary questions-submit-button " +
                (canSubmit() ? "disabled-primary-btn" : "")
              }
              disabled={canSubmit()}
              onClick={submitQuiz}
            >
              Create Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { CreateQuiz };
