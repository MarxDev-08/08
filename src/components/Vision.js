import React from 'react'
import manualFlow from '../ManualFlow.jpg'
import AIIntegration from '../AIIntegration.jpg'




export default function Product() {


  return (
    <div>
      <div id='vision'>
        <img src={manualFlow} alt="" />
        <div id="our-vision">
          <h3>Our Vision</h3>
          <p>To redefine digital experiences by engineering innovative, future ready web solutions that empower people and businesses worldwide

</p>
        </div>
        <img src={AIIntegration} alt="" />
      </div>
    </div>
  )
}
