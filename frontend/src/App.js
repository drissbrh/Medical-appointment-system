import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//Screens
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

import AboutUs from "./screens/AboutUs";
import { useState } from "react";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <div>
        <NavBar click={() => setSideToggle(true)} />
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
