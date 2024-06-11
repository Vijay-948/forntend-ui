import { useState } from "react";
import { toast } from "react-toastify";
import { verifyEmail } from "../Service/resetPin";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import * as Yup from "yup";
// import { verify } from "crypto";

const ResetPassword = () => {
  // const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [redirectToNextPage, setRedirectToNextPage] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const handleSubmit = (values: { email: string }) => {
    setLoader(true);
    localStorage.setItem("email", values.email);

    verifyEmail(values)
      .then(() => {
        localStorage.setItem("user", values.email);
        setRedirectToNextPage(true);
        setLoader(false);
        toast.success("Successfully OTP sent to your email.");
      })
      .catch((error) => {
        setLoader(false);
        toast.error("Failed to verify OTP");
      });
  };

  if (redirectToNextPage) {
    navigate("/otpverify");
  }

  // const handleSubmit = async (values: { email: string }) => {
  //   const email = values.email;
  //   setLoader(true);
  //   localStorage.setItem("email", email);

  //   try {
  //     const response = await verifyEmail({ email });
  //     if (response.data.success) {
  //       navigate("/pin");
  //     }
  //     toast.success("Successfully OTP sent to your email.");
  //   } catch (error) {
  //     toast.error("Failed to send OTP. Please try again.");
  //   } finally {
  //     setLoader(false);
  //   }
  // };

  return (
    <>
      <div className="relative flex justify-center items-center min-h-screen overflow-hidden bg-gray-900">
        <div className="relative w-[420px] bg-opacity-75 border-2 border-white border-opacity-20 backdrop-blur-3xl shadow-lg text-white rounded-lg p-10 z-10">
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <h1 className="text-4xl text-center font-semibold mb-1">
                  Verify Email
                </h1>
                <h5 className="text-gray-50 mb-8">
                  Enter your email address and we'll send you an email with
                  instructions to reset password.
                </h5>
                <div className="relative w-full h-12 mb-8">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-1/2 h-12 bg-white text-gray-800 rounded-full mx-auto block text-lg font-semibold hover:bg-blue-900 hover:text-white"
                >
                  Submit
                </button>
                <div className="text-center mt-12 text-lg">
                  <p>
                    Go back to?{" "}
                    <Link
                      to="/login"
                      className="text-white font-semibold no-underline hover:text-red-600"
                    >
                      Login
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
    </>
  );
};

export default ResetPassword;
