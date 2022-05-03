import { createContext, useReducer } from "react";
import { gameReducer } from "../reducers";
import { ReactChildren, gameContextType } from "../types";

const gameContext = createContext({} as gameContextType);

const GameProvider = ({ children }: ReactChildren) => {
  const initialGameState = {
    loading: false,
    error: false,
    questions: [{}],
    currentQuestionIndex: 0,
    selectedOptions: [],
    quizTitle: "",
  };
  const [gameState, gameDispatch] = useReducer(gameReducer, initialGameState);
  return (
    <gameContext.Provider value={{ gameState, gameDispatch }}>
      {children}
    </gameContext.Provider>
  );
};

export { GameProvider, gameContext };
