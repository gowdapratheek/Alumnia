// Signup.jsx

import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Signup() {
  const {
    username,
    usermail,
    password,
    otp,
    setUsername,
    setUsermail,
    setPassword,
    setOtp,
    otpSent,
    signup,
    sendRegisterOTP,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSendOTP = () => {
    sendRegisterOTP();
  };

  const handleSignup = async () => {
    await signup();
    navigate("/who");
  };

  return (
    <>
      <Header />
      <div className="h-[90vh] w-[100vw] absolute top-[8vh] lg:top-[7vh] flex justify-center items-center">
        <div className="h-[65vh] lg:h-[60vh] w-[80vw] lg:w-[40vw] border-2 border-[#98F2F5] rounded-[15px] flex flex-col items-center">
          <h1 className="text-[2.25rem] font-extrabold tracking-widest uppercase my-2">
            Alumnia
          </h1>
          <div className="bg-white h-[8vh] w-[40vw] lg:w-[20vw] rounded-[10px] flex text-black justify-center items-center text-[1rem]">
            <div className="bg-[#027AFF] rounded-[6px] text-white w-[25vw] lg:w-[8vw] font-medium p-2">
              <div className="text-center cursor-pointer">
                <a href="/signup">Sign Up</a>
              </div>
            </div>
            <div className="p-1 w-[20vw] lg:w-[10vw] flex justify-center items-center">
              <a href="/login" className="font-medium cursor-pointer">
                Login
              </a>
            </div>
          </div>
          {!otpSent && (
            <form
              className="w-[60vw] lg:w-[30vw] flex flex-col justify-evenly mt-3"
              action="POST"
            >
              <input
                className="bg-black w-full h-[7vh] bg-transparent border-2 my-3 border-[#434343] p-2 rounded-[10px]"
                id="Mail address"
                type="email"
                placeholder="Mail address"
                value={usermail}
                onChange={(e) => setUsermail(e.target.value)}
                required
              />
              <input
                className="bg-black w-full h-[7vh] bg-transparent border-2 my-3 border-[#434343] p-2 rounded-[10px]"
                id="Name"
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className="bg-black w-full h-[7vh] bg-transparent border-2 my-3 border-[#434343] p-2 rounded-[10px]"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="w-[60vw] lg:w-[30vw] flex justify-center">
                <button
                  className="w-[30vw] lg:w-[15vw] h-[7vh] bg-[#027AFF] my-3 rounded-[10px] justify-self-center cursor-pointer"
                  type="button"
                  onClick={sendRegisterOTP}
                >
                  Send OTP
                </button>
              </div>
            </form>
          )}
          {otpSent && (
            <form
              className="w-[60vw] lg:w-[30vw] flex flex-col justify-evenly mt-3"
              action="POST"
            >
              <input
                className="bg-black w-full h-[7vh] bg-transparent border-2 my-3 border-[#434343] p-2 rounded-[10px]"
                id="otp"
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <div className="w-[60vw] lg:w-[30vw] flex justify-center">
                <button
                  className="w-[30vw] lg:w-[15vw] h-[7vh] bg-[#027AFF] my-3 rounded-[10px] justify-self-center cursor-pointer"
                  type="button"
                  onClick={signup}
                >
                  Sign Up
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Signup;
