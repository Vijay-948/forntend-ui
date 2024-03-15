import { FaRegUserCircle, FaLock } from "react-icons/fa";
import "../Styles/Login.css";
import { login } from "../Service/user";
import { ChangeEvent, useState } from "react";

const Login = () => {

  const [userLoginDetails, setUserLoginDetails] = useState<{ username: string; password: string;}>({
    username:"",
    password:"",
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>, fields: string) => {
    setUserLoginDetails({ ...userLoginDetails, [fields]: event.target.value})
  }

  const submitForm = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    
    login(userLoginDetails)
      .then((response) => {
        console.log(response);
        console.log("success log");
      })
      .catch((error) => {
        console.log(error);
        console.log("error log")
      })
  }

  return (
    <>
      <div className="login">
        <div className="container">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="email"
                placeholder="Username"
                value={userLoginDetails.username}
                onChange={(e) => handleChange(e, "username")}
               required
              />
              <FaRegUserCircle className="icon" />
            </div>
            <div className="input-box">
              <input type="password" 
                placeholder="Password"
                value={userLoginDetails.password}
                onChange={(e) => handleChange(e, "password")}
                required
              />
              <FaLock className="icon" />
            </div>

            <div className="remember-me">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
            </div>

            <button type="submit" onClick={submitForm}>Login</button>

            <div className="register-link">
              <p>
                Don't have an account? <a href="#register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
