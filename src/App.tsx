// import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// import { RotatingLines } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";

function App() {
  const token = localStorage.getItem("token");
  // const navigate = useNavigate();

  // useEffect(() => {

  //   if(token){
  //     setLoading(true);
  //     navigate('.')
  //   }
  // })

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      {token ? (
        <div id="detail">
          <Outlet />
        </div>
      ) : (
        <Navigate to={"/signup"} />
      )}
    </>
  );
}

export default App;
