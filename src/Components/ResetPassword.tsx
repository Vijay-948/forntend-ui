import '../Styles/ResetPassword.css'

const ResetPassword = () => {
    return(
        <>
        <div className="resetPassword">
        <div className="container">
          <form action="">
            <h1>Reset Password</h1>
            <h5 style={{textAlign:'center'}}>Enter your email address and we'll send you an email with instructions to reset your password.</h5>
            <div className="input-box">
              <input
                type="email"
                placeholder="Enter Email"
                required
              />
              
            </div>
            <button type="submit">
              Send
            </button>

          </form>
        </div>
      </div>
        </>
    )

}

export default ResetPassword;