// src/pages/Student.jsx
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../../components/Header.jsx";
import StudentContext from "../../context/StudentContext";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const { studentDetails, setStudentDetails, user } =
    useContext(StudentContext);
  const navigate = useNavigate();
  const [tempPhoto, setTempPhoto] = useState(
    studentDetails.photo || "/default-profile.png"
  );

  useEffect(() => {
    setTempPhoto(studentDetails.photo || "/default-profile.png");
  }, [studentDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [section, field] = name.split(".");
      setStudentDetails((prevDetails) => ({
        ...prevDetails,
        [section]: {
          ...prevDetails[section],
          [field]: value,
        },
      }));
    } else {
      setStudentDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setTempPhoto("/default-profile.png"); // Set to the default photo path
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      photo: tempPhoto,
    }));
    try {
      const response = await axios.put(
        "http://localhost:5454/api/update-student-details",
        {
          email: user.email,
          studentDetails: {
            ...studentDetails,
            photo: tempPhoto,
          },
        }
      );

      if (response.data.success) {
        toast.success("Student details updated successfully");
        navigate("/student-details");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating student details:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-[#edf3f1] shadow-md rounded-md mt-[10vh]">
        <h1 className="text-2xl font-bold mb-6 text-[#008E50] ">
          Enter Your Details
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mb-6 relative">
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
            <label htmlFor="photo-upload" className="relative cursor-pointer">
              <img
                src={tempPhoto || "/default-profile.png"}
                alt="Student"
                className="w-36 h-36 rounded-full object-cover border-4 border-[#008E50]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-sm">Change Photo</span>
              </div>
            </label>
            {tempPhoto !== "/default-profile.png" && (
              <button
                type="button"
                onClick={handleRemovePhoto}
                className="mt-2 text-sm text-red-500"
              >
                Remove Photo
              </button>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="dob" className="block mb-1 font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={studentDetails.dob}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008E50]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="block mb-1 font-medium">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={studentDetails.gender}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008E50]"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="contact.phoneNumber"
              className="block mb-1 font-medium"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="contact.phoneNumber"
              name="contact.phoneNumber"
              value={studentDetails.contact.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008E50]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact.github" className="block mb-1 font-medium">
              GitHub
            </label>
            <input
              type="url"
              id="contact.github"
              name="contact.github"
              value={studentDetails.contact.github}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008E50]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="contact.linkedin"
              className="block mb-1 font-medium"
            >
              LinkedIn
            </label>
            <input
              type="url"
              id="contact.linkedin"
              name="contact.linkedin"
              value={studentDetails.contact.linkedin}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008E50]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="schoolName" className="block mb-1 font-medium">
              School Name
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={studentDetails.schoolName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008E50]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="grade" className="block mb-1 font-medium">
              Grade
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={studentDetails.grade}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008E50]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="locationOfSchool.address"
              className="block mb-1 font-medium"
            >
              Address
            </label>
            <input
              type="text"
              id="locationOfSchool.address"
              name="locationOfSchool.address"
              value={studentDetails.locationOfSchool.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008E50]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="locationOfSchool.state"
              className="block mb-1 font-medium"
            >
              State
            </label>
            <input
              type="text"
              id="locationOfSchool.state"
              name="locationOfSchool.state"
              value={studentDetails.locationOfSchool.state}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008E50]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="locationOfSchool.country"
              className="block mb-1 font-medium"
            >
              Country
            </label>
            <input
              type="text"
              id="locationOfSchool.country"
              name="locationOfSchool.country"
              value={studentDetails.locationOfSchool.country}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008E50]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="locationOfSchool.pinCode"
              className="block mb-1 font-medium"
            >
              Pin Code
            </label>
            <input
              type="text"
              id="locationOfSchool.pinCode"
              name="locationOfSchool.pinCode"
              value={studentDetails.locationOfSchool.pinCode}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008E50]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#008E50] text-white rounded-md hover:bg-[#00703e] focus:outline-none focus:ring-2 focus:ring-[#008E50] focus:ring-opacity-50"
          >
            Save Details
          </button>
        </form>
      </div>
    </>
  );
};

export default Student;
