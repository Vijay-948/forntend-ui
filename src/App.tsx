// import React, { useEffect, useState } from "react";
import {  Outlet, useNavigate} from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// import { RotatingLines } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";

function App() {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();


  // useEffect(() => {
    
  //   if(token){
  //     setLoading(true);
  //     navigate('.')
  //   }
  // })

  if(!token){
    navigate('/signup')
  }


  return (
    <>
    <ToastContainer/>
    {token && (
      <>
        <div id="detail">
          <Outlet />
        </div>
      </>

    )}
    {!token && (
      navigate('/login')
    )}
    </>  
  );
}

export default App;

