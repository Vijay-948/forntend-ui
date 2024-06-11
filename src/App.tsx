// import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// import { RotatingLines } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import { getUserInfo } from "./Service/user";
import { useEffect, useState } from "react";
import globalobject from "./Common/global-variable";
// import { Box } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

const getLoginUrl = () => {
  return `/signup?form=${window.location.pathname + window.location.search}`;
};

function App() {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  // const navigate = useNavigate();

  // useEffect(() => {

  //   if(token){
  //     setLoading(true);
  //     navigate('.')
  //   }
  // })

  useEffect(() => {
    getUserInfo(token)
      .then((response) => {
        globalobject.userObject = response.data;
        setLoading(false);
        // setUserData(response.data);
      })
      .catch(() => {
        console.error("user not found");
        setLoading(false);
      });
  }, [token]);

  return (
    <>
      <ToastContainer />
      {token ? (
        <div id="detail">
          {!loading && globalobject.userObject && (
            <div>
              <Navbar />
              <Outlet />
            </div>
          )}
          {loading && (
            <div className="fixed inset-0 bg-white-700 bg-opacity-50 flex items-center justify-center z-50">
              <RotatingLines
                strokeColor="gray"
                strokeWidth="6"
                animationDuration="0.67"
                width="96"
              />
            </div>
          )}
        </div>
      ) : (
        <Navigate to={getLoginUrl()} />
      )}
    </>
  );
}

export default App;
