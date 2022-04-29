import React from "react";
import { QuizCard } from "../../components";
import "./category.css";

const Category = () => {
  return (
    <div>
      <h1 className="quizzes-head">Quizzes</h1>

      <div className="quizzes-container">
        <QuizCard title={"Rick and Morty"} redirectTo={"/rules"} />
        <QuizCard title={"Rick and Morty"} redirectTo={"/rules"} />
        <QuizCard title={"Rick and Morty"} redirectTo={"/rules"} />
        <QuizCard title={"Rick and Morty"} redirectTo={"/rules"} />
        <QuizCard title={"Rick and Morty"} redirectTo={"/rules"} />
        <QuizCard title={"Rick and Morty"} redirectTo={"/rules"} />
        <QuizCard title={"Rick and Morty"} redirectTo={"/rules"} />
        <QuizCard title={"Rick and Morty"} redirectTo={"/rules"} />
      </div>
    </div>
  );
};

export { Category };
