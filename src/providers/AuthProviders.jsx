import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
  } from "firebase/auth";
  import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
          setUser(loggedUser);
          console.log("logged user:", loggedUser);
        });
    
        return unsubscribe;
      }, []);


    const createUser = async (email, password, displayName, photoURL) => {
        await createUserWithEmailAndPassword(auth, email, password);
    
        await updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        });
    
        const updatedUser = auth.currentUser;
        setUser({
          ...updatedUser,
        });
        // console.log(updatedUser);
      };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
      };

      const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };


      const logOut = () => {
        return signOut(auth);
      };


      const authInfo = {
        user,
        createUser,
        logIn,
        signInWithGoogle,
        logOut
      };


    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProviders;