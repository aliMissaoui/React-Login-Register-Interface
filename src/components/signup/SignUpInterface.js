import React from "react";
import "../signup/SignUpInterface.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpInterface = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("none");
  const submitValues = (e) => {
    e.preventDefault();

    if (
      !email ||
      !password ||
      !confPassword ||
      !username ||
      gender === "none"
    ) {
      alert("Please add your informations to create an account!");
    } else if (password !== confPassword) {
      alert("Passwords doesn't match!!");
    } else {
      console.log(`Email: ${email} , Password: ${password}`);
      alert(
        `Email: ${email} , Password: ${password}, Gender: ${gender}, Username: ${username}`
      );
    }
  };
  return (
    <div className="sign-cont">
      <form onSubmit={submitValues}>
        <div className="register-txt">
          <h1>Create Account</h1>
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Enter your password again"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Select your gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="none">---</option>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
            <option value="other">None of these</option>
          </select>
        </div>

        <button className="submit-btn" type="submit">
          Register
        </button>

        <div className="bottom-txt">
          <p>
            Already have an account?{" "}
            <Link to="/">
              <strong className="login-txt">Log In</strong>
            </Link>
          </p>
        </div>
        <div className="final-bot-txt">
          <p>
            By creating an account, you accept our{" "}
            <strong>Terms & Conditions</strong>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpInterface;
