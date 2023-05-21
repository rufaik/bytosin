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
// import 'tachyons';
import {Link} from 'react-router-dom';
// import Gold from './Gold'
// import { Fade } from 'react-slideshow-image';
import NavContact from '../Components/NavContact'
// import ReactPlayer from 'react-player'
import { BsInstagram } from "react-icons/bs";


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
//     console.log(`f ade transition from ${oldIndex} to ${newIndex}`);
//   }
// }

const Contact = () => {
  return (
    <div>
    <NavContact />
      <div className="containertosin">
        <div className='contactbox'>
            <img className='contactimage' alt='beauty' src="./con.jpg"/>

        </div>
        <div className='contacttext'>
             <p className="font-semibold">tosin.</p>

                <p>the fro is real.</p>

                <p>you can catch me at the gallery, theatre or charity shop.</p>

                <p>have a thing for glitter socks.</p>

                <p>the moon is an absolute fave.</p>

            


              <p className="font-semibold">contact</p>

              <p style={{textDecoration:"none"}}>e: <span style={{textDecoration:"underline"}} ><a href="mailto:info@bytosin.com">tosinalabi@me.com</a></span></p>

              <p>please note: all photos are taken on a</p>
              <p>google pixel </p>
        </div>
        <a href="https://instagram.com/tosinalabi?igshid=zz626ehwo1lz" className="flex justify-center mb-16">
             <BsInstagram size="1.5rem"/>
          </a>

    </div>
    </div>
  )
}











export default Contact;
