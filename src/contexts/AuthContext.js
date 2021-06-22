import Router from "next/router";
import { createContext, useState } from "react";

import firebase from "../services/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);
      return await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then((response) => {
          setUser(response.user);
          Router.push("/dashboard");
        });
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    try {
      setLoading(true);
      Router.push("/");

      return await firebase
        .auth()
        .signOut()
        .then(() => setUser(null));
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumner = AuthContext.Consumer;

export default AuthContext;
