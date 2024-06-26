import React from "react";
import logo from "../resources/Netflix_Logo.png";
import { auth } from "../utils/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";
import { clearSuggestedSearchResult, toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { addUserLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign out user");
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    //we are checking auth everytime the page loads
    //this function checks for auth , and redirects accordingly. no need to write separate navigation after this.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        //i have put this user inside my store as user sign in or sign up.
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // now when user sign up/sign in , I will make him to navigate to browser page.
        navigate("/browse"); // error was coming , see below.
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribes when component unmounts
    return () => unsubscribe(); //onAuthStateChange returns this fun
  }, []);

  const handelGptSearchClick = () => {
    //get value of GptSearchActive from store
    dispatch(toggleGptSearchView());
    dispatch(clearSuggestedSearchResult()); //clear the suggestions on gpt page
    dispatch(addUserLanguage("en")); // to have default english language always.
  };

  const handelLanguageChangeClick = (e) => {
    dispatch(addUserLanguage(e.target.value));
  }

  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  return (
    <div className="absolute w-screen z-50 px-12 py-2 bg-gradient-to-b from-black flex justify-between">
      <img src={logo} alt="Netflix-logo" className="w-40" />

      <div className="flex">
        {showGptSearch && (
          <select className=" w-30 h-7 mt-6 px-2 mr-3 rounded-md" onChange={handelLanguageChangeClick}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="text-white border border-white w-30 h-7 mt-6 px-2 bg-slate-600 rounded-md bg-opacity-60"
          onClick={handelGptSearchClick}
        >
          {!showGptSearch ? "GPT Search" : "HomePage"}
        </button>
        <img alt="userIcon" className="w-12 h-12 m-3" src={USER_AVATAR} />
        <button
          className="text-white bg-red-500 w-30 h-7 mt-6 px-2"
          onClick={handelSignOut}
        >
          (Sign out)
        </button>
      </div>
    </div>
  );
};

export default Header;
/* 
 error : useNavigate() may be used only in the context of a <Router> component.
 i was getting this because i used navigate outside my router provider.
 navigate should be used in child components of body.
 ideally it router should be in app.js 
 for now i removed it and i will navigate from my login.js
 pehle useEffect was in body component, now its in header because header will always be there.
*/
