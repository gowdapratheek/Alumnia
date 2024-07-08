import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgetPassword() {
  const { sendForgetPasswordOTP, changePassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [stage, setStage] = useState("sendOTP");
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      const response = await sendForgetPasswordOTP(email);
      if (response.success) {
        toast.success("OTP sent to your email.");
        setStage("verifyOTP");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error sending OTP. Please try again.");
    }
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      const response = await changePassword(email, otp, newPassword);
      if (response.success) {
        toast.success("Password changed successfully!");
        navigate("/login");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error changing password. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white border-2 border-black rounded-[15px] flex flex-col items-center p-6 w-full max-w-md mx-4">
          {stage === "sendOTP" && (
            <>
              <h1 className="text-[#308e50] font-poppins font-semibold text-[1.25rem] lg:text-[2rem] mb-5">
                Forget Password
              </h1>
              <input
                className="bg-transparent border-2 border-[#434343] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="bg-[#308e50] hover:bg-[#1f6237] text-white p-3 rounded-lg mt-2 transition duration-200 w-[60%] lg:w-[50%] text-center"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
            </>
          )}

          {stage === "verifyOTP" && (
            <>
              <h1 className="text-[#308e50] font-poppins font-semibold text-[1.25rem] lg:text-[2rem] mb-5">
                Reset Password
              </h1>
              <input
                className="bg-transparent border-2 border-[#434343] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%]"
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <input
                className="bg-transparent border-2 border-[#434343] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%]"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <input
                className="bg-transparent border-2 border-[#434343] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%]"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                className="bg-[#308e50] hover:bg-[#1f6237] text-white p-3 rounded-lg mt-2 transition duration-200 w-[60%] lg:w-[50%] text-center"
                onClick={handleChangePassword}
              >
                Change Password
              </button>
            </>
          )}

          {stage === "done" && <p>Password changed successfully!</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForgetPassword;
