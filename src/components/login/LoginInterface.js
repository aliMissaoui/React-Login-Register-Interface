import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../login/LoginInterface.css";
import { useLocation } from "react-router-dom";

const LoginInterface = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setCheck] = useState(false);

  const handleCheckChange = () => {
    setCheck(!checked);
  };
  const submitValues = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please add your informations to log in!");
    } else {
      console.log(`Email: ${email} , Password: ${password}`);
      alert(`Email: ${email} , Password: ${password}, Remember me: ${checked}`);
    }
    // !email && !password && alert("Please add your informations to log in!");
  };
  //   const location = useLocation();
  return (
    <div className="log-cont">
      {/* {location.pathname === "/" && ( */}
      <form onSubmit={submitValues}>
        <div className="login-txt">
          <h1>Login</h1>
        </div>
        <div>
          <label>Email </label>
          <input
            className="input-field"
            type="text"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckChange}
          />

          <label className="sm-txt">Remember me! </label>
        </div>

        <button className="submit-btn" type="submit">
          Log In
        </button>
        <div className="bottom-txt">
          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              <strong className="signup-txt">Create Account</strong>
            </Link>
          </p>
        </div>
        <div className="final-bot-txt">
          <p>
            By logging in, you accept our <strong>Terms & Conditions</strong>
          </p>
        </div>
      </form>
      {/* )} */}
    </div>
  );
};

export default LoginInterface;
