import { useState } from "react";
import "../Styles/ResetPassword.css";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email.trim() !== "") {
      setEmailCorrect(true);
    }

    if (otp.length > 5) {
      toast.error("Invalid OTP");
    }
  };

  return (
    <>
      <div className="resetPassword">
        <div className="container">
          {!emailCorrect ? (
            <form onSubmit={handleSubmit}>
              <h1>Reset Password</h1>
              <h5 style={{ textAlign: "center" }}>
                Enter your email address and we'll send you an email with
                instructions to reset your password.
              </h5>
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Enter Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit">Send OTP</button>
            </form>
          ) : (
            <div>
              <form onSubmit={handleSubmit}>
                <h1>Reset Password</h1>
                <h5 style={{ textAlign: "center" }}>
                  We have already sent otp to your email
                </h5>
                <div className="input-box">
                  <input
                    type="number"
                    placeholder="Enter OTP"
                    required
                    // value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit">Verify OTP</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
