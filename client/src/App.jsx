// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
import Home from "./pages/Home";
import Err from "./pages/Err";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<Err />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
    </div>
  );
}

export default App;
