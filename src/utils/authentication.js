import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const handleSignUpAuthentication = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed up
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {
        return;
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });

    console.log(user);
    return;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    //console.log(errorMessage);
    return errorMessage;
  }
};

export const handleSignInAuthentication = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed up
    const user = userCredential.user;
    console.log(user);
    return;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    //console.log(errorMessage);
    return errorMessage;
  }
};
