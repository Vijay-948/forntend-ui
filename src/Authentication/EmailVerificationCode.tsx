import { ClassNames } from "@emotion/react";
import { InputHTMLAttributes, ReactNode, useEffect, useState } from "react";
import OtpInput, { AllowedInputTypes } from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";


const EmailVerificationCode = () => {

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');


  useEffect(() => {
    const localEmail = localStorage.getItem('email');
    if(!localEmail){
      window.location.href = '/login'
    }
  })

  return (
    <div className="verification-page py-40">
      <div className="text-center my-5">
        <h4 className="text-2xl font-semibold">Enter Verification Code</h4>
        <p className="text-xl p-10">
          we've sent a code to your {localStorage.getItem('email')}. Please enter the OTP correctly
        </p>
      </div>

      <div className="flex justify-center">
        <OtpInput 
          value={otp}
          inputType="text"
          inputStyle={{width: '8.2vh', height: '10.2vh', margin: '5px', border: 'solid gray 1px'}}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className='mx-3'></span>}
          renderInput={(props) => <input {...props} className="border p-2 text-center w-10 h-12"/>}
        />
      </div>

      <p className="text-center text-sm mt-10">
        Didn't get a code? {'     '} 
        <Link to='/' style={{color: 'red', marginLeft: '8px'}}>Resend OTP</Link>
      </p>

    </div>
    
  );

}

export default EmailVerificationCode;