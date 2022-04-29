import { useNavigate } from "react-router-dom";
import { QuizCard } from "../../components";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* hero-section */}
      <div className="hero-section">
        <img src="/assests/home.svg" className="hero-img" />
        <div className="home-body">
          <h1 className="app-name">WitTest</h1>
          <h1 className="tag-line">Test your Wit</h1>
          <button className="btn btn-primary">
            <a className="link white" href="#categories-section">
              Explore Categories
            </a>
          </button>
        </div>
      </div>

      {/* categories */}

      <div className="categories-container" id="categories-section">
        <h2 className="categories-head">Categories</h2>
        <div className="categories">
          <QuizCard
            title={"TV Shows"}
            redirectTo={"/categories"}
            isCategoryCard={true}
          />
          <QuizCard
            title={"TV Shows"}
            redirectTo={"/categories"}
            isCategoryCard={true}
          />
          <QuizCard
            title={"TV Shows"}
            redirectTo={"/categories"}
            isCategoryCard={true}
          />
          <QuizCard
            title={"TV Shows"}
            redirectTo={"/categories"}
            isCategoryCard={true}
          />
          <QuizCard
            title={"TV Shows"}
            redirectTo={"/categories"}
            isCategoryCard={true}
          />
          <QuizCard
            title={"TV Shows"}
            redirectTo={"/categories"}
            isCategoryCard={true}
          />
        </div>
      </div>
    </div>
  );
};

export { Home };
