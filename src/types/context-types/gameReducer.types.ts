import { DocumentData } from "firebase/firestore";

type gameStateType = {
  loading: boolean;
  error: boolean;
  quizTitle: string;
  questions: DocumentData;
  currentQuestionIndex: number;
  selectedOptions: number[];
};

type gameInitializeType = {
  type: "INITIALIZE";
};

type gameErrorType = {
  type: "SET_ERROR";
};

type gameResetType = {
  type: "RESET_QUIZ";
};

type setGameType = {
  type: "SET_QUIZ";
  payload: {
    questions: DocumentData;
    quizTitle: string;
  };
};

type nextQuestionType = {
  type: "NEXT_QUESTION";
};

type previousQuestionType = {
  type: "PREVIOUS_QUESTION";
};

type setOptionType = {
  type: "SET_OPTION";
  payload: {
    userChosenOption: number;
  };
};

type gameActionType =
  | gameInitializeType
  | gameErrorType
  | setGameType
  | nextQuestionType
  | previousQuestionType
  | setOptionType
  | gameResetType;

type gameContextType = {
  gameState: gameStateType;
  gameDispatch: React.Dispatch<gameActionType>;
};

export type { gameActionType, gameStateType, gameContextType };
