import React from "react";

type authInitializeType = {
  type: "INITIALIZE";
};

type authErrorType = {
  type: "SET_ERROR";
};

type authSignIntype = {
  type: "SIGN_IN_USER";
  payload: {
    userEmail: any;
    token: string;
  };
};

type authSignOutType = {
  type: "SIGN_OUT_USER";
};

type authActionType =
  | authInitializeType
  | authErrorType
  | authSignIntype
  | authSignOutType;

type authStateType = {
  error: boolean;
  loading: boolean;
  userDetails: {
    userEmail: string;
    token: string;
  };
};

type authDispatchType = (action: authActionType) => void;

type authContextType = {
  authState: authStateType;
  authDispatch: React.Dispatch<authActionType>;
};

export type {
  authActionType,
  authStateType,
  authContextType,
  authDispatchType,
};
