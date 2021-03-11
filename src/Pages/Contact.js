import React from 'react';
// import Card from './Card'
// import './App.css';
// import './Me.css'
import './Content.css'
import './Portraits.css'
import './Contact.css'
// import './Complete.css'
// import CardList from './CardList'
// import { main } from './main'
// import LogoHeader from './Logo header'
// import Navigation from './Navigation'
import 'tachyons';
import {Link} from 'react-router-dom';
// import Gold from './Gold'
// import { Fade } from 'react-slideshow-image';
import NavContact from '../Components/NavContact'
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

const Contact = () => {
  return (
    <div>
    <NavContact />
      <div className="containertosin">
        <div className='contactbox'>
            <img className='contactimage' alt='beauty' src="./0x-min.jpg"/>

        </div>
        <div className='contacttext'>
             <p><b> Tosin.</b> </p>

              <p>Creative Photographer.</p>

              <p>A soul who enjoys taking pictures of everything and anything, capturing moments that last forever.</p>

              <p><b> Enquires/Bookings:</b> tosinalabi@me.com</p>

              <p><b> Please note:</b> All photos are taken on a Google Pixel 4.</p>
        </div>
        <a href="https://instagram.com/tosinalabi?igshid=zz626ehwo1lz">
             <p className='instatext'> @tosinalabi</p>
          </a>

    </div>
    </div>
  )
}











export default Contact;
