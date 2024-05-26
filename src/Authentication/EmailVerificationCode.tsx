import React, { useRef, useEffect, useState } from 'react';

const correctOTP = "123456" // validate from your server

function OtpInputWithValidation() {
//   const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
//   const [otpError, setOtpError] = useState(null);
//   const otpBoxReference = useRef([]);

//   function handleChange(value, index) {
//     let newArr = [...otp];
//     newArr[index] = value;
//     setOtp(newArr);

//     if(value && index < numberOfDigits-1){
//       otpBoxReference.current[index + 1].focus()
//     }
//   }

//   function handleBackspaceAndEnter(e, index) {
//     if(e.key === "Backspace" && !e.target.value && index > 0){
//       otpBoxReference.current[index - 1].focus()
//     }
//     if(e.key === "Enter" && e.target.value && index < numberOfDigits-1){
//       otpBoxReference.current[index + 1].focus()
//     }
//   }

//   useEffect(() => { 
//     if(otp.join("") !== "" && otp.join("") !== correctOTP){
//       setOtpError("❌ Wrong OTP Please Check Again")
//     }else{
//       setOtpError(null)
//     } 
//    }, [otp]);

  return (
    <article className="w-full">
      <p className="text-2xl font-medium text-black-500 mt-12 text-center">OTP Input With Validation</p>
      <p className="text-base text-white mt-4 bg-[#323232] p-4 rounded-md text-center">A special type of input box where as user types, it checks if the otp is correct else it shows an error message below with a shake animation.</p>
      
      <p className="text-base text-white mt-6 mb-4">One Time Password (OTP)</p>
     
     <div className='flex items-center gap-4'>
      {/* {otp.map((digit, index)=>(
        <input key={index} value={digit} maxLength={1}  
        onChange={(e)=> handleChange(e.target.value, index)}
        onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
        ref={(reference) => (otpBoxReference.current[index] = reference)}
        className={`border w-20 h-auto text-white p-3 rounded-md block bg-black focus:border-2 focus:outline-none appearance-none`}
        />
      ))} */}

     </div>


      {/* <p className={`text-lg text-white mt-4 ${otpError ? 'error-show' : ''}`}>{otpError}</p> */}
    </article>
  );
}

export default OtpInputWithValidation;