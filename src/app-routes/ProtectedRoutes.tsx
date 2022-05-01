import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authContext } from "../context";

const ProtectedRoutes = () => {
  const location = useLocation();
  const {
    authState: {
      userDetails: { token },
    },
  } = useContext(authContext);
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/signin"} state={{ from: location }} />
  );
};

export default ProtectedRoutes;
