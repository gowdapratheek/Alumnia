import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Wave from "../components/Wave";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const data = { username, usermail, password };
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      data
    );
    if (response) {
      console.log(data);
      navigate("/");
    }
  };
  return (
    <>
      <Header />
      <div className="h-[90vh] w-[100vw] absolute top-[8vh] lg:top-[7vh] flex justify-center items-center">
        <div className="h-[80vh] lg:h-[75vh] w-[80vw] lg:w-[40vw] border-2 border-[#98F2F5] rounded-[15px] flex flex-col  items-center">
          <h1 className=" text-[2.25rem] font-extrabold tracking-widest uppercase my-2">
            Alumnia
          </h1>

          <div className="bg-white h-[8vh] w-[40vw] lg:w-[20vw] rounded-[10px] flex text-black justify-center items-center text-[1rem] ">
            <div className="p-1 w-[20vw] lg:w-[10vw] flex justify-center items-center">
              <a href="/signup" className="font-medium cursor-pointer">
                Sign Up
              </a>
            </div>

            <div className="bg-[#027AFF] rounded-[6px] text-white w-[18vw] lg:w-[8vw]   font-medium p-2">
              <div className="text-center cursor-pointer">
                <a href="/login">Login</a>
              </div>
            </div>
          </div>

          <form
            className="h-[2vh] w-[60vw] lg:w-[30vw] flex flex-col justify-evenly mt-2 lg:mt-3"
            action="POST"
          >
            <input
              className="bg-black w-[60vw] lg:w-[30vw] h-[7vh] bg-transparent border-2 my-4 lg:my-3 border-[#434343] p-2 rounded-[10px]"
              id="Name"
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              className="bg-black w-[60vw] lg:w-[30vw] h-[7vh] bg-transparent border-2 my-4 lg:my-3 border-[#434343] p-2 rounded-[10px]"
              id="Mail address"
              type="email"
              placeholder="Mail address"
              value={usermail}
              onChange={(e) => setUsermail(e.target.value)}
              required
            />

            <input
              className="bg-black w-[60vw] lg:w-[30vw] h-[7vh] bg-transparent border-2 my-4 lg:my-3 border-[#434343] p-2 rounded-[10px]"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="w-[60vw] lg:w-[30vw] flex justify-center">
              <button
                className="w-[30vw] lg:w-[15vw] h-[7vh] bg-[#027AFF] my-2 lg:my-3 rounded-[10px] justify-self-center cursor-pointer"
                type="button"
                onClick={login}
              >
                Send Code
              </button>
            </div>
            <div className="flex items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-2 text-gray-400">OR</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="w-[60vw] lg:w-[30vw] flex justify-center mt-4">
              <div className="bg-white rounded-md h-[7vh] w-[60vw] flex text-black justify-center items-center">
                <img src="/google-logo.png" />
                <p className="text-black ml-5">Continue with google</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Wave />
    </>
  );
}

export default Login;
