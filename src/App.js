
import './App.css';
import React,{useEffect} from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Vision from './components/Vision';
import About from './components/AboutUs';
import SignUp from './components/SignUp';
import Mission from './components/Mission';
import Cursor from './components/Cursor';
import Contact from './components/ContactUs';

function App() {
   useEffect(() => {
 const crsr = document.querySelector("#cursor");
  const blur = document.querySelector("#cursor-blur");
    const moveCursor = (e) => {
      if (crsr) {
        crsr.style.left = e.clientX + "px";
        crsr.style.top = e.clientY + "px";
         blur.style.left = e.clientX-150 + "px";
        blur.style.top = e.clientY-150 + "px";
      }
    };
    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

useEffect(() => {
  const crsr = document.querySelector("#cursor");
  const navHeadings = document.querySelectorAll("#nav h4");

  if (!crsr || navHeadings.length === 0) return;

  navHeadings.forEach((heading) => {
    heading.addEventListener("mouseenter", () => {
      crsr.style.transform = "scale(3)";
      crsr.style.border = "1px solid #fff";
      crsr.style.backgroundColor = "transparent";
    });

    heading.addEventListener("mouseleave", () => {
      crsr.style.transform = "scale(1)";
      crsr.style.border = "0px solid #95C11E";
      crsr.style.backgroundColor = "#95C11E";
    });
  });


  return () => {
    navHeadings.forEach((heading) => {
      heading.removeEventListener("mouseenter", () => {});
      heading.removeEventListener("mouseleave", () => {});
    });
  };
}, []);


  return (
    <><Navbar/>
   <Cursor/>
    <Home />
    <Vision />
    <About/>
    <SignUp/>
    <Mission/>
    <Contact/>
     </>
  );
}

export default App;
