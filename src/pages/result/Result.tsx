import { useNavigate } from "react-router-dom";
import { Question } from "../../components";
import "./result.css";

const Result = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="result-head page-head">Result</h1>

      <h2 className="final-score">Final Score: 100/100</h2>

      <Question isFromResult={true} />

      <button
        className="btn btn-primary finish-btn"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  );
};

export { Result };
