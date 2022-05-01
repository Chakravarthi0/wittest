import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const signOutService = () => {
  signOut(auth);
};

export { signOutService };
