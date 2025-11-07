import React from 'react'
import FooterImg from "../marxdevlogo.png"

export default function contact() {
  return (
    <>
   
       <div id="contact" className="container my-5 text-center">
      <h2 className="mb-4">Impressum</h2>

      <div className="contact-info">
        <h4>Address</h4>
        <p>Str. der Nationen 62,</p>
        <p>09111 Chemnitz</p>
        <p>Saxony, Germany</p>

        <h4 className="mt-4">Contact Information</h4>
        <p>Email: <a style={{textDecoration:"none", color:"white"}} href="mailto:marxdev09111@gmail.com">marxdev09111@gmail.com</a></p>
        <p>+49 15754846422/ +49 17674147389</p>

        <h4 className="mt-4">Legal Details</h4>
        <p className="small text-muted">
          This website does not belong to a real company. It is a "Planspiel Web Engineering" project at the University of Technology Chemnitz.
        </p>
      </div>
    </div>

  
     <footer id='footer'>
      <img src={FooterImg} alt="" />
    <p>Contact us: <a href="mailto:Marxdev0911@.com">Marxdev0911@.com</a></p>
    <p>© Copyright 2025, All Rights Reserved By <strong>Marx.dev</strong></p>
  </footer>
  </>
  )
}
