import { FaRegUserCircle, FaLock } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { SignUp } from "../Service/user";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
// import img from "../Assests/Login/wood.avif";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [redirectToNextPage, setRedirectToNextPage] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    localStorage.setItem("email", values.email);
    localStorage.setItem("name", `${values.firstName} ${values.lastName}`);
    setLoading(true);
    SignUp(values)
      .then((response: any) => {
        // console.log(response);
        // console.log("success log");
        setLoading(false);
        toast.success("User Registered Successfully");
        setRedirectToNextPage(true);
        localStorage.setItem("token", response.token);
      })
      .catch((error: any) => {
        // console.log(error);
        // console.log("error log");

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
        setLoading(false);
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
      <ToastContainer />
      <div className="w-96 bg-transparent border-2 border-white border-opacity-20 backdrop-blur-md shadow-lg text-white rounded-lg p-8 ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <h1 className="text-3xl text-center font-bold mb-6">Register</h1>
              <div className="relative w-full h-12 mb-8">
                <Field
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="relative w-full h-12 mb-8">
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="relative w-full h-12 mb-8">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                <FaRegUserCircle className="absolute right-4 top-3.5" />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="relative w-full h-12 mb-8">
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                <FaLock className="absolute right-4 top-3.5" />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-1/2 h-12 flex justify-center items-center mx-auto bg-white text-gray-800 font-bold rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-200"
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
            </Form>
          )}
        </Formik>
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
