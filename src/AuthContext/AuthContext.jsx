// AuthContext.jsx

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUsermail(storedEmail);
      setLoggedIn(true);
    }
  }, []);

  const login = async () => {
    const data = { email: usermail, password };
    try {
      const response = await axios.put(
        "http://localhost:5454/user/login",
        data
      );

      console.log("Backend response:", response.data);

      if (response.data.success) {
        const { email } = response.data.result;
        setUsermail(email);
        setLoggedIn(true);
        localStorage.setItem("userEmail", email);
      } else {
        alert("Login failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  const signup = async () => {
    const data = { name: username, email: usermail, password, otp };
    try {
      const response = await axios.post(
        "http://localhost:5454/user/register",
        data
      );

      console.log("Backend response:", response.data);

      if (response.data.success) {
        const { email } = response.data.result;
        setUsermail(email);
        setLoggedIn(true);
        localStorage.setItem("userEmail", email);
      } else {
        alert("Signup failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  const sendRegisterOTP = async () => {
    const data = { email: usermail };
    try {
      const response = await axios.post(
        "http://localhost:5454/user/send-register-otp",
        data
      );

      console.log("Backend response:", response.data);

      if (response.data.success) {
        setOtpSent(true);
        alert("OTP sent successfully to your email.");
      } else {
        alert("Failed to send OTP: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during OTP sending:", error);
      alert("An error occurred while sending OTP. Please try again.");
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setUsername("");
    setUsermail("");
    setPassword("");
    setOtp("");
    setOtpSent(false);
    localStorage.removeItem("userEmail");
  };

  const authContextValue = {
    loggedIn,
    username,
    usermail,
    password,
    otp,
    otpSent,
    setUsername,
    setUsermail,
    setPassword,
    setOtp,
    login,
    signup,
    sendRegisterOTP,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
