import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import Faq from "./Faqs";
import Footer from "../components/Footer";

function Home() {
  const { loggedIn, logout } = useContext(AuthContext);

  console.log(loggedIn);

  return (
    <>
      <div className="flex mt-[1%]">
        <div className="fixed w-[73vw] left-[1%] bg-[#292929] border-[#98F2F5] border-[1px] h-[10vh] flex items-center justify-around z-50 rounded-[10px] ">
          <a href="/" className="cursor-pointer ">
            <img src="/alum-logo.png" alt="" className="h-[2rem] flex" />
          </a>
          <ul>
            <a
              href="/"
              className="hover:text-[#DEE6EF] text-[#98F2F5] cursor-pointer"
            >
              <li>Home</li>
            </a>
          </ul>
        </div>

        <div className="w-[23vw] h-[12vh] absolute right-[1%] border-[1px] flex justify-center items-center cursor-pointer">
          {loggedIn ? (
            <p
              className="hover:text-[#DEE6EF] hover:border-[#DEE6EF] border-2 border-[#65bfe1] rounded-[10PX] p-2 lg:p-2 text-[0.8rem] lg:text-[1rem] cursor-pointer"
              onClick={logout}
            >
              Logout
            </p>
          ) : (
            <Link to="/login" className="cursor-pointer">
              <p className="hover:text-[#DEE6EF] hover:border-[#DEE6EF] border-2 border-[#65bfe1] rounded-[10PX] p-2 lg:p-2 text-[0.8rem] lg:text-[1rem] cursor-pointer">
                Login/Signup
              </p>
            </Link>
          )}
        </div>
      </div>

      <div className="h-[90vh] w-[97vw] mx-[1%] bg-gradient-to-b from-white-5 to-blue-027aff opacity-30 relative top-[12vh] rounded-[16px] rounded-tr-[0px]"></div>

      <div className="absolute top-[12vh] h-[90vh] w-[98vw] flex flex-col justify-evenly lg:flex-row lg:items-center ">
        <div className="lg:w-[40vw] mx-4">
          <h1 className="text-[#027AFF] font-bold text-[5rem] ">Alumnia</h1>
          <p className="w-[70vw] lg:w-[30vw]">
            Welcome to our alumnisphere website Reconnect, network, and thrive
            with us as we celebrate our institution&apos;s legacy together.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 w-[90vw] lg:w-[40vw] h-[50vh] lg:h-[60vh] self-center">
          <div className="bg-black rounded-lg"></div>
          <div className="bg-black rounded-lg row-span-2"></div>
          <div className="bg-black rounded-lg "></div>
        </div>
      </div>

      <div className="absolute top-[105vh]">
        <Faq />
      </div>
      <Footer />
    </>
  );
}

export default Home;
