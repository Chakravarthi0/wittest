import "./Knowledge-board.css";

type KnowledgeBoardType = {
  quizzesAttempted: number;
  totalScore: number;
};

const KnowledgeBoard = ({
  quizzesAttempted,
  totalScore,
}: KnowledgeBoardType) => {
  const getKnowledgeLevel = () => {
    if (totalScore < 1000) {
      return "Beginner";
    } else if (totalScore < 2000) {
      return "Intermediate";
    } else {
      return "Expert";
    }
  };
  return (
    <div>
      <h2 className="page-head">Knowledge Board</h2>
      <div className="quiz-board-container flex-container">
        <div className="quiz-board-item">
          <h4>Quiz played</h4>
          <p>{quizzesAttempted}</p>
        </div>

        <p className="vl"></p>

        <div className="quiz-board-item">
          <h4>Total points</h4>
          <p>{totalScore}</p>
        </div>

        <p className="vl"></p>

        <div className="quiz-board-item">
          <h4>Knowledge level</h4>
          <p>{getKnowledgeLevel()}</p>
        </div>
      </div>
    </div>
  );
};

export { KnowledgeBoard };
