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

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google method
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
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
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
