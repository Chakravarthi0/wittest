import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";
import { signInService, signUpService, signOutService } from "../services";
import { authContext } from "../context";
import { authInputType } from "../types";
import { auth } from "../firebaseConfig";
import { createUser } from "../utils";

const useAuth = () => {
  const { authState, authDispatch } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        authDispatch({
          type: "SIGN_IN_USER",
          payload: {
            userEmail: user.email,
            token: user.uid,
          },
        });
      } else {
        authDispatch({ type: "SIGN_OUT_USER" });
      }
    });
  }, [authDispatch]);

  const signIn = async (
    { userEmail, password }: authInputType,
    from: { pathname: string }
  ) => {
    authDispatch({ type: "INITIALIZE" });
    try {
      let res = await signInService({ userEmail, password });
      const user = res?.user;
      if (user) {
        navigate(from);
        toast.success(`Login Successfull!`);
      }
    } catch (err: any) {
      authDispatch({ type: "SET_ERROR" });

      const msg = err.message
        .match(/\/(\S+)[)]./i)[1]
        .replace(/-/g, " ")
        .toUpperCase();
      toast.error(`${msg}`);
    }
  };

  const signUp = async ({
    userEmail,
    password,
    firstName,
    lastName,
  }: {
    userEmail: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    authDispatch({ type: "INITIALIZE" });
    try {
      let res = await signUpService({ userEmail, password });
      const user = res?.user;
      if (user) {
        navigate("/");
        toast.success(`Account Created Successfully!`);
        await createUser(user, { firstName, lastName });
      }
    } catch (err: any) {
      authDispatch({ type: "SET_ERROR" });

      const msg = err.message
        .match(/\/(\S+)[)]./i)[1]
        .replace(/-/g, " ")
        .toLowerCase();
      toast.error(`${msg}`);
    }
  };

  const signOut = () => {
    try {
      signOutService();
      navigate("/");
      toast.success("Signed out");
    } catch (err: any) {
      authDispatch({ type: "SET_ERROR" });

      const msg = err.message
        .match(/\/(\S+)[)]./i)[1]
        .replace(/-/g, " ")
        .toLowerCase();
      toast.error(`${msg}`);
    }
  };

  return { signIn, signOut, signUp, authState };
};

export { useAuth };
