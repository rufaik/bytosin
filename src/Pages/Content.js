import React from 'react';
// import Card from './Card'
// import './App.css';
// import './Me.css'
import './Content.css'
import './Portraits.css'
// import './Complete.css'
// import CardList from './CardList'
// import { main } from './main'
// import LogoHeader from './Logo header'
// import Navigation from './Navigation'
// import 'tachyons';
import {Link} from 'react-router-dom';
// import Gold from './Gold'
// import { Fade } from 'react-slideshow-image';
import Nav from '../Components/Nav'
// import ReactPlayer from 'react-player'
import { IconContext } from "react-icons";
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

//   const fadeImages = [
//   './Images/1.jpeg',
//   './Images/2.jpeg',
//   './Images/3.jpeg'
// ];
 
// const fadeProperties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: false,
//   arrows: false,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`fade transition from ${oldIndex} to ${newIndex}`);
//   }
// }

const Content = () => {
  return (
    <div>
    <Nav />
      <div className="containertosin">
        <div className='headerbox'>
            <div className='header'>content</div>
        </div>
        <div className='conimgbox'>
            <img className = '' alt='beauty' src="./pix/C1.jpg"/>
            <img className = 'space' alt='beauty' src="./pix/C3.jpg"/>
            <img className = 'space' alt='beauty' src="./pix/C4.jpg"/>
            <img className = 'space' alt='beauty' src="./pix/C2.jpg"/>
        </div>


        <a className="arrowport" href="/Portraits">
          <div className='subheaderport'>portraits</div>
            <IconContext.Provider value={{ color: "black", size:"1.8em", className: "arrowspaceport" }}>
                <div>
                  <AiOutlineRight />
                </div>
              </IconContext.Provider></a>
    </div>
    </div>
  )
}











export default Content;
