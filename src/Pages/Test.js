import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Splash.css'


const Test = () => {
  const fadeImages = [
  './pix/A9.jpg',
  './pix/A1.jpg',
  './pix/A2.jpg'
  ];

  return (
    <div style={{display: "flex", padding: "20px", textAlign: "center"}}>
      <div style={{paddingLeft: "50px", paddingRight: "50px"}} >
        <h2>Topic
        </h2>This text can be used to share information about your brand with customers.
      </div>
      <div style={{paddingLeft: "50px", paddingRight: "50px"}} >
        <h2>Topic
        </h2>This text can be used to share information about your brand with customers.
      </div>
      <div style={{paddingLeft: "50px", paddingRight: "50px"}} >
        <h2>Topic
        </h2>This text can be used to share information about your brand with customers.
      </div>
    </div>

  );
};



export default Test;
