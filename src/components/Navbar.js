import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from "react-scroll"

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import marxdev from '../marxdevlogo.png';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {

  useEffect(() => {
    gsap.to("#nav", {
      backgroundColor: "black",
      duration: 0.5,
      height:"130px",
     
      scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
    
       start:"top -20%",
       end:"top 30%",
       scrub:1
      }
    });
  }, []);





  return (
    <div id='nav'>
 <img src={marxdev} alt="MarxDev Logo" width="50" height="50" />
   <Link to="main" smooth={true} >      <h4 >Home</h4>
</Link>
      
       
        <Link to="vision" smooth={true} >      <h4 >Vision</h4>
</Link>
     <Link to="aboutUs" smooth={true} >     <h4 >About</h4>
</Link> 
     
      <Link to="Mission" smooth={true} >     <h4 >Mission</h4>
</Link>  
        <Link to="contact" smooth={true} >     <h4 >Contact</h4>
</Link> 

    </div>
  )
}


























