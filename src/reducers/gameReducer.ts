import { gameActionType, gameStateType } from "../types";

const gameReducer = (state: gameStateType, action: gameActionType) => {
  switch (action.type) {
    case "INITIALIZE":
      return { ...state, error: false, loading: true };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        loading: false,
      };
    case "PREVIOUS_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
        loading: false,
      };
    case "SET_OPTION":
      const selectedOptionsCopy = state.selectedOptions.slice();
      selectedOptionsCopy[state.currentQuestionIndex] =
        action.payload.userChosenOption;
      return {
        ...state,
        selectedOptions: selectedOptionsCopy,
        loading: false,
      };
    case "SET_QUIZ":
      return {
        ...state,
        questions: action.payload.questions,
        loading: false,
        selectedOptions: [],
        quizTitle: action.payload.quizTitle,
      };
    case "RESET_QUESTIONS":
      return {
        ...state,
        selectedOptions: [],
        currentQuestionIndex: 0,
      };
    case "RESET_QUIZ":
      return {
        ...state,
        error: false,
        loading: false,
        questions: [],
        selectedOptions: [],
        quizTitle: "",
        currentQuestionIndex: 0,
      };
    case "SET_ERROR":
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};

export { gameReducer };
