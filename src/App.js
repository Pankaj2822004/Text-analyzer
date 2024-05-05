import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import lightBackground from "../src/components/light.webp";
import darkBackground from "../src/components/dark.jpg";
// import Typed from "typed.js";
function App() {
  // Initialize the mode state
  const [mode, setMode] = useState("dark");

  const [backgroundImage, setBackgroundImage] = useState(
    mode === "light" ? lightBackground : darkBackground
  );

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    // Toggle the mode state
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Update the background image when mode changes
  useEffect(() => {
    setBackgroundImage(mode === "light" ? lightBackground : darkBackground);
  }, [mode]);

  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Navbar title="MYWEBS" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path="/About" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <Textform
                heading={
                "MYWEBS - character count , wordcount , cleartext, copytext , remove Extra spaces"
                }
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
                          <Route
              path="/Text-analyzer"
              element={
                <Textform
                heading={
                "MYWEBS - character count , wordcount , cleartext, copytext , remove Extra spaces"
                }
                  mode={mode}
                  showAlert={showAlert}
                />
              
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



