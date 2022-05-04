import { useContext } from "react";
import { gameContext } from "../context";
import { getQuiz } from "../utils";

const useGame = () => {
  const { gameState, gameDispatch } = useContext(gameContext);

  const getQuestions = async (
    quizId: string | undefined,
    quizTitle: string
  ) => {
    try {
      gameDispatch({ type: "INITIALIZE" });
      let quiz = await getQuiz(quizId);
      gameDispatch({
        type: "SET_QUIZ",
        payload: { questions: quiz, quizTitle },
      });
    } catch (err) {
      gameDispatch({ type: "SET_ERROR" });
    }
  };

  const setOption = (userChosenOption: number) => {
    gameDispatch({ type: "SET_OPTION", payload: { userChosenOption } });
  };

  const getNextQuestion = () => {
    if (gameState.currentQuestionIndex + 1 === gameState.questions.length) {
    }
    gameDispatch({ type: "NEXT_QUESTION" });
  };

  const getPreviousQuestion = () => {
    gameDispatch({ type: "PREVIOUS_QUESTION" });
  };

  const resetQuiz = () => {
    gameDispatch({ type: "RESET_QUIZ" });
  };

  const resetSelections = () => {
    gameDispatch({ type: "RESET_QUESTIONS" });
  };

  return {
    getQuestions,
    setOption,
    getNextQuestion,
    getPreviousQuestion,
    resetSelections,
    resetQuiz,
    gameState,
  };
};

export { useGame };
