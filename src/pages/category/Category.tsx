import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DocumentData } from "firebase/firestore";
import { useQuiz } from "../../hooks";
import { QuizCard, Loader } from "../../components";
import "./category.css";

const Category = () => {
  const { quizId } = useParams();
  const {
    quizState: { quizzes, loading: isquizzesLoading },
  } = useQuiz();

  useEffect(() => {
    if (quizId) {
      const res = quizzes.filter(
        (quiz: { quizCategory: string }) => quiz.quizCategory === quizId
      );
      setFilteredQuizzes(res);
    } else {
      setFilteredQuizzes(quizzes);
    }
  }, [quizId, quizzes]);

  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);

  return (
    <div>
      <h1 className="quizzes-head">Quizzes</h1>

      {isquizzesLoading ? (
        <div>
          <Loader isFullScreen={true} />
        </div>
      ) : (
        <div className="quizzes-container">
          {filteredQuizzes.map((ele: DocumentData) => (
            <QuizCard
              key={ele.id}
              title={ele.quizTitle}
              imgUrl={ele.quizImgUrl}
              redirectTo={"/rules"}
              isCategoryCard={false}
              id={ele.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { Category };
