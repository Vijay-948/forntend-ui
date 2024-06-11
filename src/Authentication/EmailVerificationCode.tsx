// import { ClassNames } from "@emotion/react";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { sendOTP, verifyOtp } from "../Service/user";

const EmailVerificationCode = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  // const [redirectToNextPage, setRedirectToNextPage] = useState(false);

  useEffect(() => {
    const localEmail = localStorage.getItem("email");
    if (!localEmail) {
      window.location.href = "/signup";
    }
  });

  const verifyOtpAuth = () => {
    setLoading(true);
    const obj = {
      email: localStorage.getItem("email"),
      verificationCode: otp,
    };
    verifyOtp(obj)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          navigate("/login");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setErrMsg("Invalid OTP");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleResendOTP = () => {
    const obj = {
      email: localStorage.getItem("email"),
    };

    setOtp("");
    setErrMsg("");
    sendOTP(obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="verification-page py-40">
      <div className="text-center my-5">
        <h4 className="text-2xl font-semibold">Enter Verification Code</h4>
        <p className="text-xl p-5">
          we've sent a code to your {localStorage.getItem("email")}. Please
          enter the OTP correctly
        </p>
      </div>

      <div className="flex justify-center">
        <OtpInput
          value={otp}
          inputType="text"
          inputStyle={{
            width: "5.2vh",
            height: "6.2vh",
            margin: "5px",
            border: "solid gray 1px",
          }}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="mx-1"></span>}
          renderInput={(props) => (
            <input {...props} className="border p-2 text-center w-10 h-12" />
          )}
        />
      </div>

      <p className="text-center text-sm mt-10">
        Didn't get a code? {"     "}
        <button
          onClick={handleResendOTP}
          style={{ color: "red", marginLeft: "8px", cursor: "pointer" }}
        >
          Resend OTP
        </button>
      </p>

      {errMsg && (
        <div className="text-center text-red-500 text-lg mt-2">{errMsg}</div>
      )}

      <div className="flex justify-center mt-10">
        <button
          onClick={verifyOtpAuth}
          className="px-5 py-2 bg-red-500 text-white rounded-full"
        >
          Verify OTP
        </button>
      </div>

      {loading && (
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

export default EmailVerificationCode;
