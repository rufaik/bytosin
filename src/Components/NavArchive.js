import React from 'react';
// import Card from './Card'
// import './App.css';
// import './Me.css'
// import './Home.css'
// import './Complete.css'
import './Navigation.css'
// import '../../public/Navigation.css'
// import CardList from './CardList'
// import { main } from './main'
// import LogoHeader from './Logo header'
// import Navigation from './Navigation'
// import 'tachyons';
import {Link} from 'react-router-dom';
// import Logo from './Logo'
// import './Logo.css';
// import Gold from './Gold'
// import {Animated} from "react-animated-css"
// import { Slide } from 'react-slideshow-image';
// import { Fade } from 'react-slideshow-image';
import PartnersArchive from './PartnersArchive'

const Nav = () => {



  return (
  	<div class="relative largeMargin10" >
         <a href="/" className="black" ><p className="brand1 middleAbsolute pt-8"> by tosin </p></a>
      <div className=" middleAbsolute1 pt-2">
        <a className="menuIconsArchive " href="/Humans">humans</a>
        <a className="menuIconsArchive " href="/Archive">archive</a>
        <a className="menuIconsArchive " href="/Contact">contact</a>
      </div>  


    </div>

)}

export default Nav;


