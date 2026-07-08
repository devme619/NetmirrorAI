import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-8 my-28 mx-auto right-0 left-0 rounded-lg bg-opacity-80 bg-black text-white"
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
  );
};

export default Login;
