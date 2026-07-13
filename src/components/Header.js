import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch {
      navigate("/error");
    }
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="relative z-30 flex flex-col gap-3 bg-gradient-to-b from-black px-3 py-3 md:flex-row md:items-center md:justify-between md:px-4 lg:px-6">
      <img src={LOGO} alt="logo" className="mx-auto h-12 w-12 md:mx-0"></img>
      {user && (
        <div className="flex flex-wrap items-center justify-center gap-2 px-1 md:justify-end md:gap-3">
          {showGptSearch && (
            <select
              className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white md:w-auto"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES?.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="w-auto rounded-lg bg-purple-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home Page" : "GPTSearch"}
          </button>
          <div className="flex items-center gap-2">
            <img
              src={user?.photoURL || USER_AVATAR}
              alt="userIcon"
              className="h-10 w-10 rounded-full object-cover"
            ></img>
            <button
              className="text-sm font-bold text-white"
              onClick={handleSignOut}
            >
              (Sign Out)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
