import { FaRegUserCircle, FaLock } from "react-icons/fa";
import { login } from "../Service/user";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const Login = () => {
  const [redirectToNextPage, setRedirectToNextPage] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    fields: string
  ) => {
    setUserLoginDetails({ ...userLoginDetails, [fields]: event.target.value });
  };

  const submitForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoader(true);

    if (
      userLoginDetails.email.trim() === "" ||
      userLoginDetails.password.trim() === ""
    ) {
      toast.error("Please Enter Details Correctly !");
      setLoader(false);
      return;
    }

    login(userLoginDetails)
      .then((jwtTokenData) => {
        localStorage.setItem("token", jwtTokenData.data.token);
        localStorage.setItem("user", userLoginDetails.email);
        setRedirectToNextPage(true);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        toast.error(error.response.data);
      });
  };

  if (redirectToNextPage) {
    navigate("/home");
  }

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden bg-gray-900">
      {/* <video
        autoPlay
        loop
        muted
        className="absolute w-auto min-w-full min-h-full max-w-none"
      >
        <source src="../Assets/Login/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="relative w-[420px]  bg-opacity-75 border-2 border-white border-opacity-20 backdrop-blur-3xl shadow-lg text-white rounded-lg p-10 z-10">
        <form onSubmit={submitForm}>
          <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
          <div className="relative w-full h-12 mb-8">
            <input
              type="email"
              placeholder="Username"
              value={userLoginDetails.email}
              onChange={(e) => handleChange(e, "email")}
              required
              className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
            />
            <FaRegUserCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
          <div className="relative w-full h-12 mb-8">
            <input
              type="password"
              placeholder="Password"
              value={userLoginDetails.password}
              onChange={(e) => handleChange(e, "password")}
              required
              className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
            />
            <FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
          <div className="flex justify-between text-sm mb-8">
            <label>
              <Link to="/resetPassword" className="text-white no-underline">
                Forgot Password?
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-1/2 h-12 bg-white text-gray-800 rounded-full mx-auto block text-lg font-semibold hover:bg-blue-600 hover:text-white"
          >
            Login
          </button>
          <div className="text-center mt-12 text-lg">
            <p>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-white font-semibold no-underline hover:text-red-600"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
      {loader && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <RotatingLines
            strokeColor="gray"
            strokeWidth="6"
            animationDuration="0.67"
            width="96"
          />
        </div>
      )}
    </div>
  );
};

export default Login;
