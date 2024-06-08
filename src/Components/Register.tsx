import { FaRegUserCircle, FaLock } from "react-icons/fa";
import { ChangeEvent, useState } from "react";
import { SignUp } from "../Service/user";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import img from "../Assests/Login/wood.avif";

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

  const submitForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    localStorage.setItem("email", data.email);
    localStorage.setItem("name", `${data.firstName} ${data.lastName}`);
    setLoading(true);
    SignUp(data)
      .then((response: any) => {
        console.log(response);
        console.log("success log");
        setLoading(false);
        toast.success("User Registered Successfully");
        setRedirectToNextPage(true);
        localStorage.setItem("token", response.token);
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
  };

  if (redirectToNextPage) {
    navigate("/pin");
    return null;
  }

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-gray-900"
      // style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-96 bg-transparent border-2 border-white border-opacity-20 backdrop-blur-md shadow-lg text-white rounded-lg p-8 ">
        <form>
          <h1 className="text-3xl text-center font-bold mb-6">Register</h1>
          <div className="relative w-full h-12 mb-8">
            <input
              type="text"
              placeholder="First Name"
              onChange={(event) => handleChange(event, "firstName")}
              value={data.firstName}
              className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
            />
            <span className="text-red-500 text-sm">{errors.firstName}</span>
          </div>
          <div className="relative w-full h-12 mb-8">
            <input
              type="text"
              placeholder="Last Name"
              onChange={(event) => handleChange(event, "lastName")}
              value={data.lastName}
              className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
            />
            <span className="text-red-500 text-sm">{errors.lastName}</span>
          </div>
          <div className="relative w-full h-12 mb-8">
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => handleChange(event, "email")}
              value={data.email}
              className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
            />
            <FaRegUserCircle className="absolute right-4 top-3.5" />
            <span className="text-red-500 text-sm">{errors.email}</span>
          </div>
          <div className="relative w-full h-12 mb-8">
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => handleChange(event, "password")}
              value={data.password}
              className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
            />
            <FaLock className="absolute right-4 top-3.5" />
            <span className="text-red-500 text-sm">{errors.password}</span>
          </div>
          <button
            type="submit"
            onClick={submitForm}
            className="w-1/2 h-12 flex justify-center items-center mx-auto bg-white text-gray-800 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            Register
          </button>
          <div className="text-center mt-6">
            <p className="text-lg">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-white font-semibold hover:text-red-500"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      {loading && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
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
