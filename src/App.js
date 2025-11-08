import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Common/Navbar";
import About from "./components/About";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
