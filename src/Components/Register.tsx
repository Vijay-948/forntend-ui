import { FaRegUserCircle, FaLock } from "react-icons/fa";
import "../Styles/Register.css";
import { ChangeEvent, useState } from "react";
import { SignUp } from "../Service/user";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [redirectToNextPage, setRedirectToNextPage] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
    setData({ ...data, [property]: event.target.value });
    setErrors({ ...errors, [property]: "" });
  };

  // const handleBackendErrors = (backendErrors: { [key: string]: string }) => {
  //   const newErrors = { ...errors };
  //   Object.keys(backendErrors).forEach((key) => {
  //     if (key in newErrors) {
  //       newErrors[key] = backendErrors[key];
  //     }
  //   });
  //   setErrors(newErrors);
  // };

  // const validateForm = () => {
  //   let formValid = true;
  //   let newErrors = { ...errors };

  //   if (data.firstName.trim() === "") {
  //     newErrors.firstName = "First name is required";
  //     formValid = false;
  //   }

  //   if (data.lastName.trim() === "") {
  //     newErrors.lastName = "Last name is required";
  //     formValid = false;
  //   }

  //   if (!data.email.trim()) {
  //     newErrors.email = "Email is required";
  //     formValid = false;
  //   } else if (!/\S+@\S+\.\S+/.test(data.email)) {
  //     newErrors.email = "Invalid email format";
  //     formValid = false;
  //   }
  //   if (!data.password.trim()) {
  //     newErrors.password = "Password is required";
  //     formValid = false;
  //   }

  //   setErrors(newErrors);
  //   return formValid;
  //  };

  const submitForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    localStorage.setItem('email',data.email);
    localStorage.setItem('name', `${data.firstName} ${data.lastName}`)
    setLoading(true);
    SignUp(data)
      .then((response: any) => {
        console.log(response);
        console.log("success log");
        setLoading(false);
        toast.success("User Registered Successfully");
        setRedirectToNextPage(true)
        setData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      })
      .catch((error: any) => {
        console.log(error);
        console.log("error log");
        setLoading(false);
        if (error.response.status === 400) {
          if (error.response.data === "Email is Already exists") {
            toast.info(
              "Email is already registered. Please try with a different email."
            );
          } else if (error.response.data === "All fields are required") {
            toast.error("All fields are required");
          } else if (error.response.data === "Invalid email format") {
            toast.error("Invalid email format");
          } else if (error.response.data === "Invalid Password format") {
            toast.error(
              "Invalid Password format. Password must be 8 Characters long"
            );
          }
        } else {
          toast.error("Invalid Credentials");
        }
      });

    // else {
    //toast.error("Please fill out the form correctly");
    //}
  };

  if(redirectToNextPage){
    navigate('/pin');
    return null;
  }

  return (
    <div className="login">
      <div className="container">
        <form>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="First Name"
              onChange={(event) => handleChange(event, "firstName")}
              value={data.firstName}
            />
            <span className="error">{errors.firstName}</span>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Last Name"
              onChange={(event) => handleChange(event, "lastName")}
              value={data.lastName}
            />
            <span className="error">{errors.lastName}</span>
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => handleChange(event, "email")}
              value={data.email}
            />
            <FaRegUserCircle className="icon" />
            <span className="error">{errors.email}</span>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => handleChange(event, "password")}
              value={data.password}
            />
            <FaLock className="icon" />
            <span className="error">{errors.password}</span>
          </div>
          <button type="submit" onClick={submitForm}>
            Register
          </button>
          <div className="register-link">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
      {loading && (
        <div className="fixed inset-0 bg-white-700 bg-opacity-50 flex items-center justify-center z-50">
          <RotatingLines
            strokeColor="gray"
            strokeWidth="6"
            animationDuration="0.47"
            width="96"
          />
        </div>
      )}
    </div>
  );
};

export default Register;
