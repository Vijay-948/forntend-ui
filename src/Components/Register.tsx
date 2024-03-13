import { FaRegUserCircle, FaLock } from "react-icons/fa";
import "../Styles/Register.css";
import { useEffect, useState } from "react";
import { SignUp } from "../Service/user";
import { error } from "console";
import { toast } from "react-toastify";

const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   console.log(data);
  // }, [data])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
    setData({ ...data, [property]: event.target.value });
  };

  const submitForm = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    console.log(data);

    SignUp(data)
      .then((response) => {
        console.log(response);
        console.log("success log");
        toast.success("User Register Successfully");
        setData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
        toast.error("Invalid Credentials");
      });
  };

  return (
    <>
      <div className="login">
        <div className="container">
          {/* <span>{JSON.stringify(data)}</span> */}
          <form action="">
            <h1>Register</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="FirstName"
                id="firstName"
                onChange={(event) => handleChange(event, "firstName")}
                value={data.firstName}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="LastName"
                onChange={(event) => handleChange(event, "lastName")}
                value={data.lastName}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Username"
                onChange={(event) => handleChange(event, "email")}
                value={data.email}
                required
              />
              <FaRegUserCircle className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => handleChange(event, "password")}
                value={data.password}
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

            <button type="submit" onClick={submitForm}>
              Register
            </button>

            <div className="register-link">
              <p>
                Already have a Account? <a href="#register">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
