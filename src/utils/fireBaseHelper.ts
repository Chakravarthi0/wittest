import { User } from "firebase/auth";
import {
  getDoc,
  doc,
  setDoc,
  getDocs,
  DocumentData,
  collection,
} from "firebase/firestore";
import { categoriesRef, db, quizzesRef } from "../firebaseConfig";

const createUser = async (
  user: User,
  userData: { firstName: string; lastName: string }
) => {
  let currentUserRef = doc(db, `users/${user.uid}`);

  try {
    const snapShot = await getDoc(currentUserRef);

    if (!snapShot.exists()) {
      const { firstName, lastName } = userData;
      await setDoc(currentUserRef, {
        email: user.email,
        firstName,
        lastName,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (userId: string) => {
  try {
    let userRef = doc(db, `users/${userId}`);
    let snapShot = await getDoc(userRef);
    return snapShot.data();
  } catch (err) {
    console.log(err);
  }
};

const getCategories = async () => {
  try {
    let res = await getDocs(categoriesRef);
    const categories: DocumentData | undefined = res.docs.map((ele) => {
      return { ...ele.data(), id: ele.id };
    });
    return categories;
  } catch (err) {
    console.log(err);
    throw Error("something went wrong");
  }
};

const getQuizzes = async () => {
  try {
    let res = await getDocs(quizzesRef);
    const quizzes: DocumentData | undefined = res.docs.map((ele) => {
      return { ...ele.data(), id: ele.id };
    });
    return quizzes;
  } catch (err) {
    console.log(err);
    throw Error("something went wrong");
  }
};

const getQuiz = async (quizId: string | undefined) => {
  try {
    const quizRef = collection(db, `quizzes/${quizId}/questions`);
    const res = await getDocs(quizRef);
    const quiz: DocumentData | undefined = res.docs.map((ele) => {
      return { ...ele.data(), id: ele.id };
    });
    return quiz;
  } catch (err) {
    console.log(err);
    throw Error("something went wrong");
  }
};

export { createUser, getUser, getCategories, getQuizzes, getQuiz };
