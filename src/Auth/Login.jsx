import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const { usermail, password, setUsermail, setPassword, login } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Regular expression for validating an email address
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(usermail)) {
      setEmailError("Please enter a valid email.");
      return;
    }
    setEmailError(""); // Clear previous error if any

    try {
      await login();
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <Header />
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white border-2 border-black rounded-[15px] flex flex-col items-center p-6 w-full max-w-md mx-4">
          <h1 className="text-[#308e50] font-conthrax font-semibold text-[1.25rem] lg:text-[2rem] mb-5">
            ALUMNIA
          </h1>

          <div className="flex justify-between w-[60%] mb-6">
            <div className="p-2 w-1/2 text-center cursor-pointer">
              <Link to="/signup" className="font-medium">
                Sign Up
              </Link>
            </div>
            <div className="bg-[#308e50] hover:bg-[#1f6237] rounded-[6px] text-white font-medium p-2 w-1/2 text-center cursor-pointer">
              <a href="/login">Login</a>
            </div>
          </div>

          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleLogin}
          >
            <input
              className={`bg-transparent border-2 border-[#434343] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%] ${
                emailError ? "border-red-500" : ""
              }`}
              id="Mail address"
              type="email"
              placeholder="Mail address"
              value={usermail}
              onChange={(e) => {
                setUsermail(e.target.value);
                setEmailError("");
              }}
              required
            />
            {emailError && <p className="text-red-500 text-sm mt-[-15px] mb-[10px] ml-[-40%]">{emailError}</p>}

            <input
              className="bg-transparent border-2 border-[#434343] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%]"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="bg-[#308e50] hover:bg-[#1f6237] text-white p-3 rounded-lg mt-2 transition duration-200 w-[60%] lg:w-[50%] text-center"
              type="submit"
            >
              Login
            </button>
            <div className="mt-4">
              <Link
                to="/forget-password"
                className="text-[#308e50] hover:text-[#1f6237]"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
}

export default Login;
