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
import { AuthProvider } from "./AuthContext/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/*" element={<Err />} />
          <Route path="/who" element={<Who />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/events" element={<EventOptions />} />
          <Route path="/uploadEvent" element={<UploadEvent />} />
          <Route path="/previousEvents" element={<PreviousEvents />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
