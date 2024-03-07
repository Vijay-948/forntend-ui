import { FaRegUserCircle, FaLock } from "react-icons/fa";
import '../Styles/Register.css';

const Register = () => {
  return (
    <>
      <div className="login">
        <div className="container">
          <form action="">
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder="FirstName" required />
            </div>
            <div className="input-box">
              <input type="text" placeholder="LastName" required />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Username" required />
              <FaRegUserCircle className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>

            <div className="remember-me">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
            </div>

            <button type="submit">Register</button>

            <div className="register-link">
              <p>
                Already have a Account? <a href="#register">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
