import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateSignForm } from "../utils/validateForm";
import { handleSignInAuthentication, handleSignUpAuthentication } from "../utils/authentication";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignForm = () => {
    SetIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handelSubmitButton = async () => {
    //validate the form
    const message = validateSignForm(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    //Sign Up form first time
    if (!isSignInForm) {
      const authMessage = await handleSignUpAuthentication(
        email.current.value,
        password.current.value,
        name.current.value
      );
      if (authMessage === "Firebase: Error (auth/email-already-in-use).") {
        setErrorMessage("Email already in use.Please Sign In");
        return;
      }
      if (!authMessage) {
        //if there is no error, redirect user to browser page.
        //navigate("/browse");
      }
    }else{
      // Sign In existing user.
      const authMessage = await handleSignInAuthentication(
        email.current.value,
        password.current.value
      );
      if(authMessage === "Firebase: Error (auth/invalid-credential)."){
        setErrorMessage("Invalid login Credentials.");
        return;
      }
      if (!authMessage) {
        //if there is no error, redirect user to browser page.
        //navigate("/browse");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix-background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-60"
      >
        <h1 className="font-bold text-3xl py-4 px-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 mb-3 w-full rounded text-white bg-black bg-opacity-60 border-white	"
          ></input>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 mb-3 w-full rounded text-white bg-black bg-opacity-60 border-white	"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 mb-3 w-full rounded text-white bg-black bg-opacity-60 border-white	"
        ></input>

        <p className="text-red-500 py-2 font-medium">{errorMessage}</p>

        <button
          className="w-100 px-4 py-2 mb-3 bg-red-600 text-white w-full rounded"
          onClick={handelSubmitButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="font-thin p-2 cursor-pointer">
          {isSignInForm ? "New to Netflix? " : "Already a user? "}
          <span className="font-normal" onClick={toggleSignForm}>
            {isSignInForm ? "Sign Up." : "Sign In."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
