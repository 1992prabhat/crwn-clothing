import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGooogleUser = async () => {
    const user = await signInWithGooglePopup();
    console.log(user);
    const userRefDoc = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In page.</h1>
      <button onClick={logGooogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
