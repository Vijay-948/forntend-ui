// import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// import { RotatingLines } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";

const getLoginUrl = () => {
  return `/signup?form=${window.location.pathname + window.location.search}`;
};

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
      <ToastContainer />
      {token ? (
        <div id="detail">
          <Outlet />
        </div>
      ) : (
        <Navigate to={getLoginUrl()} />
      )}
    </>
  );
}

export default App;
