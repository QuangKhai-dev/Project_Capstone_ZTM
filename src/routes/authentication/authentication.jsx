import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFormAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.util";
import "./authentication.styles.scss";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";

export default function Authentication() {
  useEffect(() => {
    const getValueGoogleRedirect = async () => {
      const reponse = await getRedirectResult(auth);
      if (reponse) {
        const userDocRef = await createUserDocumentFormAuth(reponse.user);
      }
    };
    getValueGoogleRedirect();
  }, []);

  return (
    <>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
}
