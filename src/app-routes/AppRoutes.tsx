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
} from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/result" element={<Result />} />
      <Route path="/categories" element={<Category />} />

      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
