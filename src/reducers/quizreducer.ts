import { quizStateType, quizActionType } from "../types";

const quizReducer = (state: quizStateType, action: quizActionType) => {
  switch (action.type) {
    case "INITIALIZE":
      return { ...state, loading: true, error: false };
    case "SET_QUIZ":
      return {
        ...state,
        loading: false,
        quizzes: action.payload.quizzes,
        categories: action.payload.categories,
      };
    case "SET_ERROR":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export { quizReducer };
