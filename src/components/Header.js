import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute flex justify-between px-2 py-2 w-screen bg-gradient-to-b from-black z-30">
      <img
        src="https://netmirrors.org/wp-content/uploads/2024/10/net-mirror-logo.webp"
        alt="logo"
        className="w-12"
      ></img>
      {user && (
        <div className="flex">
          <img
            src={user?.photoURL || "https://net77.cc/img/user-account2.png"}
            alt="userIcon"
            className="w-12 h-12"
          ></img>
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
