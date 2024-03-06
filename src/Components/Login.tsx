import { FaRegUserCircle, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="email" required />
            <FaRegUserCircle className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-me">
            <label>
              <input type="checkbox" />
            </label>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account? <a href="#register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
