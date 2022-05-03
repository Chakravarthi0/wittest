import { DocumentData } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useQuiz } from "../../hooks";
import { QuizCard, Loader } from "../../components";
import "./home.css";

const Home = () => {
  const {
    quizState: { categories, loading: isCategoriesLoading },
  } = useQuiz();
  return (
    <div>
      {/* hero-section */}
      <div className="hero-section">
        <img src="/assests/home.svg" className="hero-img" />
        <div className="home-body">
          <h1 className="app-name">WitTest</h1>
          <h1 className="tag-line">Test your Wit</h1>
          <button className="btn btn-primary">
            <Link className="link white" to={"/quizzes"}>
              Explore Quizzes
            </Link>
          </button>
        </div>
      </div>

      {/* categories */}

      <div className="categories-container" id="categories-section">
        <h2 className="categories-head">Categories</h2>
        {isCategoriesLoading ? (
          <Loader isFullScreen={true} />
        ) : (
          <div className="categories">
            {categories?.map((ele: DocumentData) => (
              <QuizCard
                title={ele.categoryTitle}
                redirectTo={`/quizzes/${ele.categoryName}`}
                imgUrl={ele.categoryImgUrl}
                id={ele.id}
                key={ele.id}
                isCategoryCard={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { Home };
