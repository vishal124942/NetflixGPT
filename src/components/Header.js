import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changelanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changelanguage(e.target.value));
  };
  const RouteToAboutProject = () => {
    navigate("/aboutProject");
  };
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className=" Header absolute w-screen px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <Link to="/browse">
        <img className="w-32 md:w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      </Link>

      {user && (
        <div className=" header-btns flex p-2 ">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={() => RouteToAboutProject()}
            className=" first-btn py-2  rounded-md px-4 mx-4 my-2 bg-purple-800 text-white"
          >
            About Project
          </button>
          <button
            onClick={handleGptSearchClick}
            className="second-btn py-2  rounded-md px-4 mx-4 my-2 bg-purple-800 text-white"
          >
            {showGptSearch ? "Home Page" : " Search"}
          </button>
          <img className="w-12 h-12 mr-3" src={user?.photoURL} alt="userlogo" />
          <button
            onClick={handleSignOut}
            className="third-btn font-bold text-white"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
