import React, { useState, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";  // ✅ import useNavigate
import { CSSTransition } from "react-transition-group";
import "../assets/css/form.css";
import login from '../assets/img/login.png';

// Define the Login component
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const nodeRef = useRef(null);

  const navigate = useNavigate();  // ✅ initialize navigation hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // ✅ Check for admin credentials
    if (email === "admin001@gmail.com" && password === "11111") {
      alert("Welcome, Admin!");
      navigate("/messages"); // ✅ Redirect to messages page
    } else {
      alert("Access denied! Only admin can enter this page.");
    }
  };

  return (
    <div className="form-container">
      {/* Left side image */}
      <div className="image-container">
        <img src={login} alt="A stylized person logging in" />
      </div>

      {/* Right side form */}
      <CSSTransition
        nodeRef={nodeRef}
        in={true}
        timeout={500}
        classNames="fade"
        appear
      >
        <div ref={nodeRef} className="form-content">
          <h2>Login</h2>
          {message && <p className="message">{message}</p>}

          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
             <button type="submit">Login</button>
           
          </form>

          <div className="footer">&copy; 2025 All Rights Reserved.</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Login;
