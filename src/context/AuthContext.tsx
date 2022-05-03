import { createContext, useReducer } from "react";
import { authReducer } from "../reducers";
import { ReactChildren, authContextType } from "../types";

const authContext = createContext({} as authContextType);

const AuthProvider = ({ children }: ReactChildren) => {
  const initialAuthState = {
    error: false,
    loading: false,
    userDetails: {
      userEmail: "",
      token: "",
    },
  };
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, authContext };
