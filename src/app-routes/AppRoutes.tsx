import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  SignIn,
  SignUp,
  NotFound,
  Rules,
  QuestionPage,
  Result,
  Category,
  Profile,
  CreateQuiz,
} from "../pages";
import { useAuth } from "../hooks";
import ProtectedRoutes from "./ProtectedRoutes";

function AppRoutes() {
  const {
    authState: {
      userDetails: { token },
    },
  } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/quizzes" element={<Category />} />
      <Route path="/quizzes/:categoryName" element={<Category />} />
      <Route path="/rules/:quizId" element={<Rules />} />

      {!token ? (
        <>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </>
      ) : (
        <>
          <Route path="/signup" element={<Navigate replace to="/" />}></Route>
          <Route path="/signin" element={<Navigate replace to="/" />}></Route>
        </>
      )}

      <Route element={<ProtectedRoutes />}>
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
