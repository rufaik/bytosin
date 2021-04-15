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
             <p><b> tosin.</b> </p>


                <p>creative photographer</p>

                <p>the fro is real</p>

                <p>you will find her in the gallery, theatre or charity shop</p>

                <p>she has a thing for glitter socks</p>

                <p>dance breaks in her room or on the streets</p>

                <p>her fave colour is black but if black is the absence of colour then it's forest green</p>

                <p>the moon is one of her fave thing to gaze at</p>

                <p>streets call her quirky or bougie but you can decide when you meet her</p>

              <p><b> enquires/bookings:</b> tosinalabi@me.com</p>

              <p><b> please note:</b> All photos are taken on a Google Pixel 4.</p>
        </div>
        <a href="https://instagram.com/tosinalabi?igshid=zz626ehwo1lz">
             <p className='instatext'> @tosinalabi</p>
          </a>

    </div>
    </div>
  )
}











export default Contact;
