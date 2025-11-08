import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Common/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Common/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Imprint from "./components/Imprint";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
