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

const Family = () => {
  return (
    <div>
    <Nav />
      <div className="containertosin">
        <div className='headerbox'>
            <div className='header'>FAMILY</div>
        </div>
        <div className='conimgbox'>
            <img className = '' alt='beauty' src="./pics/F1.jpg"/>
            <img className = 'space' alt='beauty' src="./pics/F2.jpeg"/>
            <img className = 'space smallpic' alt='beauty' src="./pics/F3.jpg"/>
            <img className = 'space' alt='beauty' src="./pics/F4.jpeg"/>
        </div>
       <div className='arrowbox'>
        <a className="arrowport" href="/Portraits">
            <img className='arrowspaceport' alt='beauty' src="./left1.png"/>
          <div className='subheaderport'>PORTRAITS</div></a>
        <a className="arrowport" href="/Products">
          <div className='subheaderport'>PRODUCTS</div>
            <img className='arrowspaceport rightarrow' alt='beauty' src="./right1.png"/></a>
      </div>
    </div>
    </div>
  )
}











export default Family;
