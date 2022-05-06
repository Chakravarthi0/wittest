type questionType = {
  question: string;
  options: string[];
  answerIndex: number;
};

type addQuestionHelperType = {
  quizId: string;
  questionData: questionType;
};

type addQuizHelperType = {
  quizTitle: string;
  quizCategory: string;
  quizImgUrl: string;
};

export type { addQuestionHelperType, addQuizHelperType };
