import { createContext, useContext, useReducer, useEffect } from "react";
import { ReactChildren, quizContextType } from "../types";
import { quizReducer } from "../reducers";
import { getCategories, getQuizzes } from "../utils";

const quizContext = createContext({} as quizContextType);

const QuizProvider = ({ children }: ReactChildren) => {
  useEffect(() => {
    (async () => {
      quizDispatch({ type: "INITIALIZE" });
      try {
        const categories = await getCategories();
        const quizzes = await getQuizzes();
        quizDispatch({ type: "SET_QUIZ", payload: { categories, quizzes } });
      } catch (err) {
        console.log(err);
        quizDispatch({ type: "SET_ERROR" });
      }
    })();
  }, []);
  const initialQuizState = {
    categories: [],
    quizzes: [],
    error: false,
    loading: false,
  };
  const [quizState, quizDispatch] = useReducer(quizReducer, initialQuizState);
  return (
    <quizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </quizContext.Provider>
  );
};

export { QuizProvider, quizContext };
