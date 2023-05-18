import { createContext } from "react";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup
  } from "firebase/auth";
  import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProviders = ({children}) => {

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
      };

      const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };


      const authInfo = {
        logIn,
        signInWithGoogle
      };


    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProviders;