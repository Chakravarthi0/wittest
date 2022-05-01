import { authStateType, authActionType } from "../types";

const authReducer = (state: authStateType, action: authActionType) => {
  switch (action.type) {
    case "INITIALIZE":
      return { ...state, error: false, loading: true };
    case "SIGN_IN_USER": {
      return {
        ...state,
        userDetails: {
          userEmail: action.payload.userEmail,
          token: action.payload.token,
        },
        loading: false,
        error: false,
      };
    }
    case "SIGN_OUT_USER": {
      return {
        ...state,
        userDetails: {
          userEmail: "",
          token: "",
        },
        loading: false,
        error: false,
      };
    }
    case "SET_ERROR": {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
};

export { authReducer };
