import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,

} from "firebase/auth";
import initializeAuth from "../firebase/firebase.init";

const useFirebase = () => {
  initializeAuth();
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");
  // handlegoogle sign in

  const handleGoogleSignIn = () => {
    setIsloading(true);
    return signInWithPopup(auth, googleProvider)
      .then((res) => setUser(res.user))
      .finally(() => setIsloading(false));
  };
  // track auth change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
  }, [auth]);
  // signup

  // signin

  const logOut = () => {
    signOut(auth)
      .then((res) => setUser({}))
      .catch((err) => setError(err));
  };

  return {
    setUser,
    user,
    handleGoogleSignIn,
    logOut,
    auth,
    error,
    setError,
    isLoading,

    setIsloading
  };
};

export default useFirebase;
