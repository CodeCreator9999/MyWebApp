import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h3>sample app</h3>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Help</a></li>
          <li><Link to="/signup">Sign up</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;