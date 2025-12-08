import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ErrorPage from "./Components/error-page";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import ProductList from "./Components/ProductList";
import Testimonials from "./Components/Testimonials";
import Faq from "./Components/Faq";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import EmailVerificationCode from "./Authentication/EmailVerificationCode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./Components/ResetPassword";
import OTPVerify from "./Authentication/OTPVerify";
import UpdatePassword from "./Authentication/updatePassword";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/pin",
    element: <EmailVerificationCode />,
  },
  {
    path: "/sent",
    element: <ResetPassword />,
  },
  {
    path: "/otpverify",
    element: <OTPVerify />,
  },
  {
    path: "resetpassword",
    element: <UpdatePassword />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/aboutUs",
    element: <About />,
  },
  {
    path: "/productList",
    element: <ProductList />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
