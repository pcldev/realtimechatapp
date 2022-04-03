import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { auth } from "../firebase";
import { Button } from "@mui/material";
function SignIn(props) {
  const sigInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <Button onClick={sigInWithGoogle}>Sign In With Google</Button>
    </div>
  );
}

export default SignIn;
