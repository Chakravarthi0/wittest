import { User } from "firebase/auth";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const createUser = async (
  user: User,
  userData: { firstName: string; lastName: string }
) => {
  let currentUserRef = doc(db, `users/${user.uid}`);
  const snapShot = await getDoc(currentUserRef);

  if (!snapShot.exists()) {
    const { firstName, lastName } = userData;
    try {
      await setDoc(currentUserRef, {
        email: user.email,
        firstName,
        lastName,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

const getUser = async (userId: string) => {
  let userRef = doc(db, `users/${userId}`);
  let snapShot = await getDoc(userRef);
  return snapShot.data();
};

export { createUser, getUser };
