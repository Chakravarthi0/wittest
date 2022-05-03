import { useContext } from "react";
import { quizContext } from "../context";

const useQuiz = () => {
  const { quizState } = useContext(quizContext);

  return { quizState };
};

export { useQuiz };
