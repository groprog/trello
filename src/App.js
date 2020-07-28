import React from "react";
// react router import
import { Link, BrowserRouter as Router } from "react-router-dom";

// navbar import
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
