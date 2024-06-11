import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { resetPassword } from "../Service/resetPin";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const [loader, setLoader] = useState(false);
  const [redirectToNextPage, setRedirectToNextPage] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("newPassword")],
        "New password and confirm password must be the same"
      )
      .required("Confirm password is required"),
  });

  const handleSubmit = (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    setLoader(true);
    const email = localStorage.getItem("email");
    if (!email) {
      toast.error("Email not found. Please try again.");
      setLoader(false);
      return;
    }

    resetPassword({ ...values, email })
      .then(() => {
        setRedirectToNextPage(true);
        setLoader(false);
        toast.success("Password Updated Succesfully");
      })
      .catch(() => {
        setLoader(false);
        toast.error("Something went wrong. Please try again later!");
      });
  };

  if (redirectToNextPage) {
    navigate("/login");
  }

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden bg-gray-900">
      <div className="relative w-[420px] bg-opacity-75 border-2 border-white border-opacity-20 backdrop-blur-3xl shadow-lg text-white rounded-lg p-10 z-10">
        <Formik
          initialValues={{ newPassword: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <h1 className="text-2xl text-center font-semibold mb-8">
                Reset Your Password
              </h1>
              <div className="relative w-full h-12 mb-8">
                <Field
                  type="password"
                  name="newPassword"
                  placeholder="Enter new password"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="relative w-full h-12 mb-8">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter confirm password"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                <ErrorMessage
                  name="confirmPassword"
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
  );
};

export default UpdatePassword;
