import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { authInputType } from "../../types";

const signUpService = ({ userEmail, password }: authInputType) => {
  return createUserWithEmailAndPassword(auth, userEmail, password);
};

export { signUpService };
