import { User } from "firebase/auth";
import {
  getDoc,
  doc,
  setDoc,
  getDocs,
  DocumentData,
  collection,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { categoriesRef, db, quizzesRef } from "../firebaseConfig";
import { addQuestionHelperType, addQuizHelperType } from "../types";

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
        quizzesAttempted: 0,
        totalScore: 0,
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
    const categories: DocumentData = res.docs.map((ele) => {
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
    const quizzes: DocumentData = res.docs.map((ele) => {
      return { ...ele.data(), id: ele.id };
    });
    return quizzes;
  } catch (err) {
    console.log(err);
    throw Error("something went wrong");
  }
};

const getQuiz = async (quizId: string) => {
  try {
    const quizRef = collection(db, `quizzes/${quizId}/questions`);
    const res = await getDocs(quizRef);
    const quiz: DocumentData = res.docs.map((ele) => {
      return { ...ele.data(), id: ele.id };
    });
    return quiz;
  } catch (err) {
    console.log(err);
    throw Error("something went wrong");
  }
};

const updateScore = async (uid: string, currentScore: number) => {
  try {
    const userRef = doc(db, `users/${uid}`);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const { quizzesAttempted, totalScore } = userSnapshot.data();

      await updateDoc(userRef, {
        quizzesAttempted: quizzesAttempted + 1,
        totalScore: totalScore + currentScore,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const addQuiz = async (quizData: addQuizHelperType) => {
  try {
    const quizRef = collection(db, "quizzes");
    const res = await addDoc(quizRef, quizData);
    return res.id;
  } catch (err) {
    console.log(err);
    return "something went wrong";
  }
};

const addQuestion = async ({ quizId, questionData }: addQuestionHelperType) => {
  try {
    const quizRef = collection(db, `quizzes/${quizId}/questions`);
    const res = await addDoc(quizRef, questionData);
    return res;
  } catch (err) {
    console.log(err);
    return "Something went wrong";
  }
};

export {
  createUser,
  getUser,
  getCategories,
  getQuizzes,
  getQuiz,
  updateScore,
  addQuiz,
  addQuestion,
};
