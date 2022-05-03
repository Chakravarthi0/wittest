import { DocumentData } from "firebase/firestore";

type quizStateType = {
  loading: boolean;
  error: boolean;
  quizzes: DocumentData;
  categories: DocumentData;
};

type quizInitializeType = {
  type: "INITIALIZE";
};

type quizErrorType = {
  type: "SET_ERROR";
};

type quizSetType = {
  type: "SET_QUIZ";
  payload: {
    quizzes: DocumentData;
    categories: DocumentData;
  };
};

type quizContextType = {
  quizState: quizStateType;
  quizDispatch: React.Dispatch<quizActionType>;
};

type quizActionType = quizInitializeType | quizErrorType | quizSetType;

export type { quizStateType, quizActionType, quizContextType };
