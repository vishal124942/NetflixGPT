import React from "react";
import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
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
      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-90 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 "
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-800 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800"
        />
        <button className="my-4 p-4 bg-red-700 w-full rounded-md cursor-pointer">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleToSignUp}>
          {isSignIn ? (
            <p>
              New To Netflix{" "}
              <span className="cursor-pointer hover:underline">
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already a member?{" "}
              <span className="cursor-pointer hover:underline">
                Sign In Now
              </span>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
