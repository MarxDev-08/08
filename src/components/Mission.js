import React,{useEffect,useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Mission() { 
    const MissionRef = useRef(null);
    useEffect(() => {
    const imgs1 = MissionRef.current.querySelectorAll('#colon1');
    const imgs2 = MissionRef.current.querySelectorAll('#colon2');


    gsap.fromTo(
      imgs1,
      { y: -70 },
      {
        x: -70,
        opacity: 1,
        duration: 1,
    
        scrollTrigger: {
          trigger: MissionRef.current,
          start: 'top 57%',
          end: 'top 47%',
          scrub: 1,
          
        },
      }
    );

      gsap.fromTo(
      imgs2,
      { y: 70 },
      {
        x: 70,
        opacity: 1,
        duration: 1,
    
        scrollTrigger: {
          trigger: MissionRef.current,
          start: 'top 57%',
          end: 'top 47%',
          scrub: 1,
          
        },
      }
    );
  }, []);

  return (
    <div ref={MissionRef} id='Mission'>
   
    <p><h1 className='gradient-text'>Mission</h1>Empower every organization to design and analyze system architectures effortlessly.</p>
     <img id='colon1' src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg" alt="" />
     <img id = 'colon2'src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg" alt="" />

    </div>
  )
}
