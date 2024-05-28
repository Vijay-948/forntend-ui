import { FaRegUserCircle, FaLock } from "react-icons/fa";
import "../Styles/Login.css";
import { login } from "../Service/user";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import Register from "./Register";
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
    console.log(userLoginDetails);
    setLoader(true);

    if (
      userLoginDetails.email.trim() === "" ||
      userLoginDetails.password.trim() === ""
    ) {
      toast.error("Please Enter Details Correctly !");
      return;
    }

    login(userLoginDetails)
      .then((jwtTokenData) => {
        console.log(jwtTokenData);
        console.log("success log");
        toast.success("user login sucessfully");
        localStorage.setItem("token", jwtTokenData.token);
        localStorage.setItem("user", userLoginDetails.email);
        setRedirectToNextPage(true)
        setLoader(false);

      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
        if (error.response.status === 400) {
          if (error.response.data === "Invalid username or password") {
            toast.error("Invalid Username or Password");
          } else {
            toast.info("Something went wrong. Please try again later.");
          }
        }
      });
  };

  if(redirectToNextPage){
    navigate('/home');
  }

  return (
    <>
      <div className="login">
        <div className="container">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="email"
                placeholder="Username"
                value={userLoginDetails.email}
                onChange={(e) => handleChange(e, "email")}
                required
              />
              <FaRegUserCircle className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={userLoginDetails.password}
                onChange={(e) => handleChange(e, "password")}
                required
              />
              <FaLock className="icon" />
            </div>

            <div className="remember-me">
              <label>
                <p><Link to='/resetPassword'  style={{color: 'white', textDecoration: 'none'}}>Forgot Password ?</Link></p>
              </label>
            </div>

            <button type="submit" onClick={submitForm}>
              Login
            </button>

            <div className="register-link">
              <p>
                Don't have an account? <Link to="/signup">Register</Link>
              </p>
            </div>
          </form>
        </div>
        {loader && (
        <div className="fixed inset-0 bg-white-700 bg-opacity-50 flex items-center justify-center z-50">
          <RotatingLines
            strokeColor="gray"
            strokeWidth="6"
            animationDuration="0.67"
            width="96"
          />
        </div>
      )}
      </div>
    </>
  );
};

export default Login;
