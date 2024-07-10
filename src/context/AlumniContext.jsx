// src/context/AlumniContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AlumniContext = createContext();

export const AlumniProvider = ({ children }) => {
  const [alumniDetails, setAlumniDetails] = useState({
    photo: "",
    dob: "",
    gender: "",
    contact: {
      phoneNumber: "",
      github: "",
      linkedin: "",
    },
    companyName: "",
    role: "",
    locationOfCompany: {
      address: "",
      state: "",
      country: "",
      pinCode: "",
    },
  });

  const [user, setUser] = useState({
    email: "",
    name: "",
  });

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    // Fetch existing alumni details if any
    const fetchAlumniDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5454/api/get-alumni-details?email=${userEmail}`
        );
        if (response.data.success) {
          setAlumniDetails(response.data.data.alumniDetails);
          setUser(response.data.data.user);
        }
      } catch (error) {
        console.error("Error fetching alumni details:", error);
      }
    };

    if (userEmail) {
      fetchAlumniDetails();
    }
  }, [userEmail]);

  return (
    <AlumniContext.Provider value={{ alumniDetails, setAlumniDetails, user }}>
      {children}
    </AlumniContext.Provider>
  );
};

AlumniProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlumniContext;
