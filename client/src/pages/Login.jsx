import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Login() {
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const data = { username: username, usermail: usermail, password: password };
    axios
      .post("http://localhost:3000/api/v1/auth/login", data)
      .then((response) => {
         console.log("Response from backend:", response.data);
      })
      .catch((error) => {
        console.error("Error occurred during login:", error);
      });
  };

  return (
    <>
      <Header />
      <div className="h-[90vh] w-[100vw] absolute top-[9vh] flex justify-center items-center">
        <div className="h-[70vh] w-[80vw] border-2 border-[#98F2F5] rounded-[15px] flex flex-col  items-center">
          <h1 className=" text-[2.25rem] font-extrabold tracking-widest uppercase my-2">
            Alumnia
          </h1>

          <div className="bg-white h-[8vh] w-[40vw] rounded-[10px] flex text-black justify-center items-center text-[1rem]">
            <div className="p-1">
              <a href="/signup" className="font-medium cursor-pointer">
                Sign Up
              </a>
            </div>

            <div className="bg-[#027AFF] rounded-[6px] text-white w-[20vw] h-[vh] font-medium p-2">
              <div className="text-center cursor-pointer">
                <a href="/login">Login</a>
              </div>
            </div>
          </div>

          <form className="h-[15vh] w-[60vw] flex flex-col justify-evenly mt-4">
            <div>
              <input
                className="w-[60vw] h-[7vh] bg-transparent border-2 my-4 border-[#434343] p-2 rounded-[10px]"
                id="Name"
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                className="w-[60vw] h-[7vh] bg-transparent border-2 my-4 border-[#434343] p-2 rounded-[10px]"
                id="Mail address"
                type="email"
                placeholder="Mail address"
                value={usermail}
                onChange={(e) => setUsermail(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <input
                className="w-[60vw] h-[7vh] bg-transparent border-2 my-4 border-[#434343] p-2 rounded-[10px]"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="w-[60vw] flex justify-center">
              <button
                className="w-[30vw] h-[7vh] bg-[#027AFF] border-2 my-4 border-[#434343] p-2 rounded-[10px] justify-self-center cursor-pointer"
                type="button"
                onClick={login}
              >
                Send Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
