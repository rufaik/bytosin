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

  return (
    <div className="rela">
      <div className="slide-container">
            <div className="splashFade"> </div>
            
            <a href="/Home">
           <div className="splashTitle">
      by tosin
      </div>
          </a>

        <Fade>

          <div className="each-fade">
            <div>
              <img className="slide-image" src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className="slide-image" src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className="slide-image" src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};



export default Splash;
