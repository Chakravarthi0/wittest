import { useContext } from "react";
import { quizContext } from "../context";
import { getCategories, getQuizzes } from "../utils";

const useQuiz = () => {
  const { quizState, quizDispatch } = useContext(quizContext);

  const refreshQuiz = async () => {
    quizDispatch({ type: "INITIALIZE" });
    try {
      const categories = await getCategories();
      const quizzes = await getQuizzes();
      quizDispatch({ type: "SET_QUIZ", payload: { categories, quizzes } });
    } catch (err) {
      console.log(err);
      quizDispatch({ type: "SET_ERROR" });
    }
  };
  return { quizState, refreshQuiz };
};

export { useQuiz };
