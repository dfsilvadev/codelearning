import Router from 'next/router';
import { createContext, useState } from 'react';

import firebase from '../services/firebase';

const AuthContext = createContext();

const formatUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.za,
  provider: user.providerData[0].providerId,
  photoUrl: user.photoURL,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleUser(currentUser) {
    if (currentUser) {
      const formattedUser = await formatUser(currentUser);
      setUser(formattedUser);
      console.log(currentUser);
      console.log(formattedUser);

      return formattedUser.email;
    }

    setUser(false);
    return false;
  }

  async function signInWithGithub() {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider());

      handleUser(response.user);
    } finally {
      setLoading(false);
    }
  }

  async function signInWithGoogle() {
    try {
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      handleUser(response.user);
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    try {
      setLoading(true);
      Router.push('/');

      return await firebase
        .auth()
        .signOut()
        .then(() => setUser(null));
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, signInWithGithub, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumner = AuthContext.Consumer;

export default AuthContext;
