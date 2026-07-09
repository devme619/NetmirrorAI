import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
    );
    setErrorMessage(message);
    if (!message) {
      if (!isSignInform) {
        createUserWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value,
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value,
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  return (
    <div className="relative h-screen w-full">
      <Header />
      <div className="absolute h-full w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f42605e-e786-4a06-8612-ebc67c55ba6c/web/IN-en-20260629-TRIFECTA-perspective_76b17e8c-cff9-4c65-9938-08ca5029be6b_large.jpg"
          alt="bg"
          className="absolute inset-0 h-full w-full object-cover"
        ></img>
      </div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-11/12 p-8 max-w-md rounded-lg bg-black bg-opacity-60  text-white"
        >
          <h1 className="py-4 font-bold text-3xl ">
            {isSignInform ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInform && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 my-4 bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-2 my-4 bg-gray-700"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-2 my-4 bg-gray-700"
          />
          <p className="p-2 font-bold text-red-500">{errorMessage}</p>
          <button
            className="w-full p-4 my-4 bg-red-700 rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInform ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInform
              ? "New to Netmirror? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
