import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hdf" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
