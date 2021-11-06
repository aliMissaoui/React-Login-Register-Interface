import React from "react";
import LeftContent from "./components/login/LeftContent";
import LoginInterface from "./components/login/LoginInterface";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpInterface from "./components/signup/SignUpInterface";
const App = () => {
  return (
    <div className="main-stl">
      <div className="column-left">
        <LeftContent />
      </div>
      <div className="column-right">
        <Router>
          <Routes>
            <Route path="/" element={<LoginInterface />} />
            <Route path="/signup" element={<SignUpInterface />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
