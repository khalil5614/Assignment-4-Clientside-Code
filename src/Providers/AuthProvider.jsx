import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import React, { Children, createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleAuthProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState();
  const logIn = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const stateDataChanged = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      //  console.log("Auth State Data=", user);
    });

    return stateDataChanged;
  }, []);

  const authInfo = { currentUser, logIn, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
