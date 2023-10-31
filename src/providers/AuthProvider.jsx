import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = name => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, currentUser => {
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  //   return () => unSubscribe();
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log('current user', currentUser);
      setLoading(false);
      // if user exists then issue a token
      if (currentUser) {
        axios
          .post('http://localhost:5000/jwt', loggedUser, {
            withCredentials: true,
          })
          .then(res => {
            console.log('token response: ', res.data);
          });
      } else {
        axios
          .post('http://localhost:5000/logout', loggedUser, {
            withCredentials: true,
          })
          .then(res => {
            console.log('token deleted response', res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user?.email]);

  const authentications = {
    user,
    loading,
    createUser,
    updateUser,
    loginUser,
    signoutUser,
  };
  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
