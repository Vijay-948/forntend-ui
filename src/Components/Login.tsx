import { FaRegUserCircle, FaLock } from "react-icons/fa";
import { login } from "../Service/user";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema for form validation using Yup

const Login = () => {
  const [redirectToNextPage, setRedirectToNextPage] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    setLoader(true);

    login(values)
      .then((jwtTokenData) => {
        localStorage.setItem("token", jwtTokenData.data.token);
        localStorage.setItem("user", values.email);
        setRedirectToNextPage(true);
        setLoader(false);
        toast.success("Logged in successfully!");
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
      <div className="relative w-[420px] bg-opacity-75 border-2 border-white border-opacity-20 backdrop-blur-3xl shadow-lg text-white rounded-lg p-10 z-10">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
              <div className="relative w-full h-12 mb-8">
                <Field
                  type="email"
                  name="email"
                  placeholder="Username"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                <FaRegUserCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="relative w-full h-12 mb-8">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                <FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
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
                className="w-1/2 h-12 bg-white text-gray-800 rounded-full mx-auto block text-lg font-semibold hover:bg-blue-900 hover:text-white"
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
            </Form>
          )}
        </Formik>
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
