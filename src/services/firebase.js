import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAbp3p5byo_yme1IiTMyVu-6p_F1ec0_xA",
  authDomain: "piper-chat-e3915.firebaseapp.com",
  databaseURL: "https://piper-chat-e3915.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
