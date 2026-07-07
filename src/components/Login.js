import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute h-full w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f42605e-e786-4a06-8612-ebc67c55ba6c/web/IN-en-20260629-TRIFECTA-perspective_76b17e8c-cff9-4c65-9938-08ca5029be6b_large.jpg"
          alt="bg"
          className="h-full w-full"
        ></img>
      </div>
      <form className="absolute w-1/4 my-36 mx-auto right-0 left-0 p-12 bg-black text-white">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-2 m-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 m-2"
        />
        <button className="w-full p-2 mx-2 my-4 bg-red-700">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
