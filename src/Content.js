import React from 'react';
// import Card from './Card'
// import './App.css';
// import './Me.css'
import './Content.css'
// import './Complete.css'
// import CardList from './CardList'
// import { main } from './main'
// import LogoHeader from './Logo header'
// import Navigation from './Navigation'
import 'tachyons';
import {Link} from 'react-router-dom';
// import Gold from './Gold'
// import { Fade } from 'react-slideshow-image';
import Nav from './Components/Nav'
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

const Content = () => {
  return (
    <div>
    <Nav />
      <div className="containertosin">
        <div className='headerbox'>
            <div className='header'>CONTENT</div>
        </div>
        <div className='conimgbox'>
            <img className = '' alt='beauty' src="./7-min.jpg"/>
            <img className = 'space' alt='beauty' src="./chair.jpg"/>
            <img className = 'space' alt='beauty' src="./4-min.jpg"/>
        </div>
        <a className="arrow" href="/Portraits">
          <div className='subheader'>PORTRAITS</div>
            <img className='arrowspace' alt='beauty' src="./right.png"/></a>
    </div>
    </div>
  )
}











export default Content;
