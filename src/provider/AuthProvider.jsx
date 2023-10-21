import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google method
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(result);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed to log in",
          showConfirmButton: false,
          timer: 1500,
        });
        console.error(error);
      });
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        location.reload();
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (displayName, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log("user on onAuthStateChanged", createUser);
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    logOut,
    updateUser,
    logIn,
    googleSignIn,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
