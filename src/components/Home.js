import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Video } from './Video'
import { Page1 } from './Page1'

import Page2 from './Page2';
gsap.registerPlugin(ScrollTrigger); 


export default function Home() {


    useEffect(() => {
      gsap.to("#main", {
        backgroundColor: "black",
    
       
        scrollTrigger:{
          trigger:"#main",
          scroller:"body",
       
         start:"top -40%",
         end:"top -80%",
         scrub:2
        }
      });

    
 

  }, []);
  

  return (
   
       <div >
      <Video/>
      <div id='main'>
        <Page1/>
        <Page2/>

      </div>

    </div>
  )
}

