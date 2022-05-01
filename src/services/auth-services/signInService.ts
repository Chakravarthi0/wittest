import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { authInputType } from "../../types";

const signInService = ({ userEmail, password }: authInputType) => {
  return signInWithEmailAndPassword(auth, userEmail, password);
};

export { signInService };
