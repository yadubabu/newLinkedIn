import { auth } from "../../firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const setUser = (payload) => {
  return {
    type: "SET_USER",
    payload: payload,
  };
};

export const signIn = () => {
  const googleAuthProvider = new GoogleAuthProvider();

  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider)
      .then((payload) => dispatch(setUser(payload.user)))
      .catch((err) => console.log(err));
  };
};

export const signOutApi = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => dispatch(setUser(null)))
      .catch((err) => console.log(err.message));
  };
};
