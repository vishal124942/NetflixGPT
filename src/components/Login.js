import React, { useRef } from "react";
import { useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setisSignIn] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef("");
  const HandleValidation = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      username.current?.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current?.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/88899058?s=96&v=4",
          });
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };
  const toggleToSignUp = () => {
    setisSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg"
          alt="Bg-logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-90 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            ref={username}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-md"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-800 rounded-md"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-md"
        />
        <p className="text-red-600 ">{ErrorMessage}</p>
        <button
          onClick={HandleValidation}
          className="my-4 p-4 bg-red-700 w-full rounded-md cursor-pointer"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div onClick={toggleToSignUp}>
          {isSignIn ? (
            <div>
              New To Netflix?
              <span className="cursor-pointer hover:underline">
                Sign Up Now
              </span>
            </div>
          ) : (
            <div>
              Already a member?{" "}
              <span className="cursor-pointer hover:underline">
                Sign In Now
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
