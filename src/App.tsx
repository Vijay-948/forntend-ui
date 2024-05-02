import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  redirect,
  unstable_HistoryRouter,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
// import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ResetPassword from "./Components/ResetPassword";
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import ProductList from "./Components/ProductList";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  return localStorage.getItem("isLoggedIn") === "true";

  // if (token) {
  //   return localStorage.getItem("isLoggedIn") === "true";
  // } else {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const history = useHistory();
  //   history.push('/signup');
  //   return false;
  // }
};

interface AuthRouteProps {
  element: JSX.Element;
  path: string;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ element, path }) => {
  if (!isAuthenticated() && path !== "/signup") {
    // If user is not authenticated and the path is not signup, redirect to signup
    return <Navigate to="/signup" />;
  } else if (isAuthenticated() && (path === "/signup" || path === "/login")) {
    // If user is authenticated and trying to access signup or login, redirect to home
    return <Navigate to="/" />;
  } else {
    // If user is authenticated and path is not signup or login, or user is not authenticated
    return <>{element}</>;
  }
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* <Route path="/home" element={<AuthRoute element={<Home />} path="/home" />} /> */}
          <Route path="/navbar"  element={<Navbar />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="footer" element={<Footer/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/productList' element={<ProductList/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
