import React from "react";
// react router import
import { Link, BrowserRouter as Router } from "react-router-dom";
import './App.css'
// navbar import
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
        <div>
            <Navbar />
        </div>
    </Router>
  );
}

export default App;
