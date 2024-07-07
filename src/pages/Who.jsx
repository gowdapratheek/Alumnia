import React, { useContext, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { AuthContext } from "../AuthContext/AuthContext";

function Who() {
  const { usermail } = useContext(AuthContext); // Destructure usermail from AuthContext
  const [userType, setUserType] = useState(""); // State to store selected user type
  console.log("email", usermail);

  const handleUserType = async () => {
    if (!userType) {
      console.error("User type not selected.");
      return;
    }

    try {
      // Make a PUT request to update user type
      const response = await axios.put(
        "http://localhost:5454/user/update-usertype",
        {
          email: usermail,
          userType: userType,
        }
      );

      if (response.data.success) {
        console.log("User type updated successfully.");
        // Optionally, handle success behavior here (e.g., show a message)
      } else {
        console.error("Failed to update user type:", response.data.message);
        // Handle error if needed
      }
    } catch (error) {
      console.error("Error updating user type:", error);
      // Handle error if needed
    }
  };

  const handleSelectUserType = (type) => {
    setUserType(type);
  };

  return (
    <div>
      <Header />
      <div className="h-[90vh] w-[100vw] absolute top-[9vh] flex justify-center items-center">
        <div className="h-[45vh] w-[80vw] lg:w-[40vw] border-2 border-black rounded-[15px] flex flex-col items-center">
          <h1 className="text-[2.25rem] font-extrabold tracking-widest uppercase my-2">
            Alumnia
          </h1>
          <p className="font-bold">You are</p>
          <div
            className="bg-[#000000] hover:opacity-70 h-[6vh] w-[60vw] lg:w-[30vw] flex flex-col justify-evenly mt-4 border-[1px] rounded"
            onClick={() => handleSelectUserType("Alumni")}
          >
            <p className="text-center font-semibold tracking-wide text-white">
              Alumni
            </p>
          </div>
          <div
            className="bg-[#000000] hover:opacity-70 h-[6vh] w-[60vw] lg:w-[30vw] flex flex-col justify-evenly mt-4 border-[1px] rounded"
            onClick={() => handleSelectUserType("Student")}
          >
            <p className="text-center font-semibold tracking-wide text-white">
              Student
            </p>
          </div>
          <div
            className="bg-[#000000] hover:opacity-70 h-[6vh] w-[60vw] lg:w-[30vw] flex flex-col justify-evenly mt-4 border-[1px] rounded"
            onClick={() => handleSelectUserType("Others")}
          >
            <p className="text-center font-semibold tracking-wide text-white">
              Others
            </p>
          </div>
          <div
            className="bg-[#000000] hover:opacity-70 h-[6vh] w-[60vw] lg:w-[30vw] flex flex-col justify-evenly mt-4 border-[1px] rounded"
            onClick={handleUserType}
          >
            <p className="text-center font-semibold tracking-wide text-white">
              Update User Type
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Who;
