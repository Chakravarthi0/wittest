import { useNavigate } from "react-router-dom";
import "./rules.css";

const Rules = () => {
  const navigate = useNavigate();
  return (
    <div className="rules-body text-center">
      <h1 className="page-head">Rules</h1>

      <ul className="list list-border rules-list">
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. cum nam
        </li>
        <li>Aspernatur laudantium iure sequi! Saepe recusandae</li>
        <li>aliquid autem quidem alias cupiditate</li>
        <li>
          sint eum mollitia at, ad voluptates, odio exercitationem magnam.
        </li>
      </ul>

      <button
        className="btn btn-primary start-quiz-btn"
        onClick={() => navigate("/question")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export { Rules };
