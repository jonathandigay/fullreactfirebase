import React, { useContext, createContext, useState, useEffect } from "react";
import { Auth, GoogleProvider, FacebookProvider } from "../firebase.config";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

export const UseAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setCurrentUser] = useState();
  console.log(user);

  const GoogleLogin = async () => {
    await signInWithPopup(Auth, GoogleProvider).then((result) => {
      localStorage.setItem("user", JSON.stringify(result));
    });
  };
  const FacebookLogin = async () => {
    await signInWithPopup(Auth, FacebookProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const SignoutUser = async () => {
    await signOut(Auth).then((res) => {
      console.log("successfuly logout");
    });
  };

  const values = {
    GoogleLogin,
    FacebookLogin,
    SignoutUser,
    user,
    setCurrentUser,
  };

  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      setCurrentUser(user);
    });
  }, [values]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
