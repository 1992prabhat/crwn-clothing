import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Button from "../../components/button/button.component";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    doSomething();
  }, []);

  const doSomething = async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
    // const userRefDoc = await createUserDocumentFromAuth(user);
  };

  const logGoooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userRefDoc = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page.</h1>
      <Button onClick={logGoooglePopupUser} buttonType="google">
        Sign in with Google Popup
      </Button>
      <SignUpForm />
      <Button onClick={signInWithGoogleRedirect} buttonType="google">
        Sign in with Google Redirect
      </Button>
    </div>
  );
};

export default SignIn;
