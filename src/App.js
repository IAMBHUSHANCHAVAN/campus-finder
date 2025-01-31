import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import College from "./Pages/College/College";
import Navbar from "./Pages/Navbar/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import School from "./Pages/School/School";
import SingleCollege from "./Pages/College/SingleCollege";
import Login from "./Pages/Login/Login";
import Singup from "./Pages/Signup/Signup";

import Institute from "./Pages/Institute/Institute";
import SingleSchool from "./Pages/Singleschool/SingleSchool";


function App() {
  return (
    <Router>
      <div>
        <div style={{ position: "sticky", top: "0", zIndex: "1" }}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/college" element={<College />} />
          <Route path="/school" element={<School />} />

          <Route path="/colleges/:collegeName" element={<Institute />} /> // Add
          the new route for the single college page
          <Route path="/institute" element={<Institute />} />

          <Route path="/colleges/:collegeName" element={<SingleCollege />} /> //
          Add the new route for the single college page

          <Route path="/colleges/:collegeName" element={<SingleCollege />} /> 
          Add the new route for the single college page
          <Route path="/institute" element={<Institute/>} />
          <Route path="/singleschool" element={<SingleSchool/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Singup/>} />


          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
