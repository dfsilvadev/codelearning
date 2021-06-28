import Router from 'next/router';
import { createContext, useEffect, useState } from 'react';
import { setCookie, destroyCookie } from 'nookies';

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

  function setSession(session) {
    if (session) {
      setCookie(undefined, 'codelearning.auth', session, {
        maxAge: 60 * 60 * 24 * 30, // 30 dias
        path: '/',
      });
    } else {
      destroyCookie(undefined, 'codelearning.auth');
    }
  }

  async function handleUser(currentUser) {
    if (currentUser) {
      const formattedUser = await formatUser(currentUser);
      setUser(formattedUser);
      setSession(true);
      return formattedUser.email;
    }

    setUser(false);
    setSession(false);
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
      await firebase.auth().signOut();
      await handleUser(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);

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
