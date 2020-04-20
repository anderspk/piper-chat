import { auth } from "../services/firebase";

export const signup = (email, password) =>
  auth().createUserWithEmailAndPassword(email, password);

export const signin = (email, password) =>
  auth().signInWithEmailAndPassword(email, password);

export const signInWithGoogle = async () => {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
};

export const signInWithGithub = async () => {
  const provider = new auth.GithubAuthProvider();
  return auth().signInWithPopup(provider);
};
