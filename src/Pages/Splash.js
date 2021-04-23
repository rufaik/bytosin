import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Splash.css'


const Splash = () => {
  const fadeImages = [
  './pix/A9.jpg',
  './pix/A1.jpg',
  './pix/A2.jpg'
  ];

  setTimeout(function(){
        window.location.href = '/Home';
    }, 15000);

// const Change = () => {
//   setTimeout(() => {
//     window.location.href = '/Home';
//     }, 5000);
//   }


  return (
    <div className="rela">
      <div className="slide-container">
            <div className="splashFade"> </div>
            
           

        <Fade>

          <div className="each-fade">
            <div className="slide1">
              <img className="slide-image" src='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="slide2">
              <img className="slide-image" src='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="slide3">
               <a href="/Home">
           <div className="splashTitle">
      by Tosin
      </div>
          </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};



export default Splash;
