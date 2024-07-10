import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import Home from "./pages/Home";
import Err from "./pages/Err";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Who from "./pages/Who";
import Footer from "./components/Footer";
import EventOptions from "./pages/EventOptions";
import PreviousEvents from "./pages/PreviousEvents";
import UploadEvent from "./pages/UploadEvent";
import Faqs from "./pages/Faqs";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import ForgetPassword from "./pages/ForgetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alumni from "./pages/Alumni";
import Student from "./pages/Student";
import About from "./pages/About";
import Alumnidetails from "./pages/Alumnidetails";
import { AlumniProvider } from "./context/AlumniContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AlumniProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            showProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/header" element={<Header />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/*" element={<Err />} />
            <Route path="/who" element={<Who />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/student" element={<Student />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/events" element={<EventOptions />} />
            <Route path="/uploadEvent" element={<UploadEvent />} />
            <Route path="/previousEvents" element={<PreviousEvents />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/alumni-details" element={<Alumnidetails />} />
          </Routes>
        </AlumniProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
