import { auth } from "../services/firebase";

export const signup = (email, password) =>
  auth().createUserWithEmailAndPassword(email, password);

export const signInWithGoogle = () => {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
};
