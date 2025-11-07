

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Img1 from '../samratImg.jpg'
import Img2 from '../PMimg.jpg'
import Img3 from '../Saudamini.img.jpg'
import Img4 from '../sandeepimg.jpg'
import Img5 from '../Amimg.jpg'

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const cards = aboutRef.current.querySelectorAll('.Mycard');

    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scale:0.8,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 70%',
          end: 'top 60%',
          scrub: 2,
        
        },
      }
    );
  }, []);

  return (
    <div
      id="aboutUs"
      ref={aboutRef}
      className="container my-5 text-center relative"
      style={{ zIndex: 10 }}
    >
      <h4 style={{ marginBottom: '20px', fontSize: '40px' }}>About Us</h4>
      <div className="row g-4 justify-content-center">
        {/* Card 1 */}
        <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
          <div className="Mycard card border-0">
            <img
              src={Img1}
              className="card-img-top rounded"
              alt="Card 1"
            />
            <div className="overlay">
              <h4>Samrat</h4>
              <p > <a href="https://www.linkedin.com/in/samrat-kamthe-a62545246/" style={{ textDecoration: "none", color: "white" }} target="_blank" rel="noopener noreferrer">
    Connect Samrat on LinkedIn
  </a></p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
          <div className="Mycard card border-0">
            <img
              src={Img2}
              alt="Card 2"
            />
            <div className="overlay">
              <h4>Pabasara</h4>
               <p> <a href="https://www.linkedin.com/in/pabasara-palihena-91a618211/" style={{ textDecoration: "none", color: "white" }} target="_blank" rel="noopener noreferrer">
    Connect Pabasara on LinkedIn
  </a></p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
          <div className="Mycard card border-0">
            <img
              src={Img3}
              alt="Card 3"
            />
            <div className="overlay">
              <h4>Saudamini</h4>
               <p> <a href="https://www.linkedin.com/in/saudamini-tergaonkar/" style={{ textDecoration: "none", color: "white" }} target="_blank" rel="noopener noreferrer">
    Connect Saudamini on LinkedIn
  </a></p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
          <div className="Mycard card border-0">
            <img
              src={Img4}
              alt="Card 4"
            />
            <div className="overlay">
              <h4>Sandeep</h4>
              <p> <a href="https://www.linkedin.com/in/sandeep-shankar-dhange/" style={{ textDecoration: "none", color: "white" }} target="_blank" rel="noopener noreferrer">
    Connect Sandeep on LinkedIn
  </a></p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
          <div className="Mycard card border-0">
            <img
              src={Img5}
              className="card-img-top rounded"
              alt="Card 5"
            />
            <div className="overlay">
              <h4>Amami</h4>
               <p> <a href="https://www.linkedin.com/in/amami-uduwana-3b3b46172/" style={{ textDecoration: "none", color: "white" }} target="_blank" rel="noopener noreferrer">
    Connect Amami on LinkedIn
  </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

