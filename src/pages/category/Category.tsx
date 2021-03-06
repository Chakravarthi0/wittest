import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DocumentData } from "firebase/firestore";
import { useQuiz } from "../../hooks";
import { QuizCard, Loader } from "../../components";
import "./category.css";

const Category = () => {
  const { categoryName } = useParams();
  const {
    quizState: { quizzes, loading: isquizzesLoading },
  } = useQuiz();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);

  useEffect(() => {
    let res = quizzes.slice();
    if (searchTerm.trim() !== "") {
      res = res.filter((quiz: { quizCategory: string; quizTitle: string }) =>
        quiz.quizTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (categoryName) {
      res = res.filter(
        (quiz: { quizCategory: string }) => quiz.quizCategory === categoryName
      );
    }
    setFilteredQuizzes(res);
  }, [categoryName, quizzes, searchTerm]);

  return (
    <div>
      <h1 className="quizzes-head">Quizzes</h1>

      {/* Searchbar */}

      <div className="search-container search icon search-container">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          className="search-input"
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      {isquizzesLoading ? (
        <div>
          <Loader isFullScreen={true} />
        </div>
      ) : (
        <div className={filteredQuizzes.length > 0 ? "quizzes-container " : ""}>
          {filteredQuizzes.length > 0 ? (
            filteredQuizzes.map((ele: DocumentData) => (
              <QuizCard
                key={ele.id}
                title={ele.quizTitle}
                imgUrl={ele.quizImgUrl}
                redirectTo={`/rules/${ele.id}`}
                isCategoryCard={false}
                id={ele.id}
              />
            ))
          ) : (
            <h1 className="text-center">No quizzes found</h1>
          )}
        </div>
      )}
    </div>
  );
};

export { Category };
