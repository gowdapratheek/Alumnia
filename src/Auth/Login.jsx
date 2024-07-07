import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Login() {
  const { usermail, password, setUsermail, setPassword, login } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login();
    navigate("/");
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
            <div className="  text-black w-[25vw] lg:w-[8vw] font-medium p-2">
              <div className="text-center cursor-pointer">
                <a href="/signup">Sign Up</a>
              </div>
            </div>
            <div className=" bg-[#027AFF] text-white rounded-[6px] w-[25vw] lg:w-[8vw] font-medium p-2 flex justify-center items-center">
              <a href="/login" className="font-medium cursor-pointer">
                Login
              </a>
            </div>
          </div>
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
                onClick={handleLogin} // Use handleLogin instead of login directly
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
