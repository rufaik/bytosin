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
import 'tachyons';
import {Link} from 'react-router-dom';
// import Gold from './Gold'
// import { Fade } from 'react-slideshow-image';
import Nav from '../Components/Nav'
// import ReactPlayer from 'react-player'


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

const Portraits = () => {
  return (
    <div>
    <Nav />
      <div className="containertosin">
        <div className='headerbox'>
            <div className='header'>Portraits</div>
        </div>
        <div className='conimgbox'>
            <img className = '' alt='beauty' src="./pix/P1.jpg"/>
            <img className = 'space' alt='beauty' src="./pix/P2.jpg"/>
            <img className = 'space smallpic' alt='beauty' src="./pix/P3.jpg"/>
            <img className = 'space smallpic' alt='beauty' src="./pix/P4.jpg"/>
        </div>
       <div className='arrowbox'>
        <a className="arrowport" href="/Content">
            <img className='arrowspaceport' alt='beauty' src="./left.png"/>
          <div className='subheaderport'>Content</div></a>
        <a className="arrowport" href="/Family">
          <div className='subheaderport'>Family</div>
            <img className='arrowspaceport' alt='beauty' src="./right.png"/></a>
      </div>
    </div>
    </div>
  )
}











export default Portraits;
