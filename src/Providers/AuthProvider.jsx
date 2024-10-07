import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
} from "firebase/auth";

import React, { Children, createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();
  //githubAuthProvider.addScope("repo");

  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState();

  const signup = ({ email, password }) => {
    console.log("Email= ", email);
    console.log("Pass= ", password);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = ({ email, password }) => {
    console.log("Email= ", email);
    console.log("Pass= ", password);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
  const logInWithGithub = () => {
    return signInWithPopup(auth, githubAuthProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const stateDataChanged = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log("Auth State Data=", user);
    });

    return stateDataChanged;
  }, []);

  const authInfo = {
    currentUser,
    signup,
    logIn,
    logInWithGoogle,
    logInWithGithub,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
