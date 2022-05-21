import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//Screens
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

import AboutUs from "./screens/AboutUs";
import { useState } from "react";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import SearchScreen from "./screens/SearchScreen";
import AppointmentScreen from "./screens/AppointmentScreen";
import SuccessScreen from "./screens/SuccessScreen";
import AdminLoginScreen from "./screens/AdminLoginScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <div className="App">
        <NavBar click={() => setSideToggle(true)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Routes>
          <Route path="/path/adminlogin" exact element={<AdminLoginScreen />} />
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/search/" element={<SearchScreen />} />
          <Route path="/doctor/:id" element={<AppointmentScreen />} />
          <Route path="/appointment/:id" element={<SuccessScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
