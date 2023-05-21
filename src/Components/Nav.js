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
import Partners from './Partners'

const Nav = () => {



  return (
  	<div class="">
         <a href="/" className="white" ><p className="brand1 middleAbsolute pt-8"> by tosin </p></a>
      <div className=" middleAbsolute1 pt-2">
        <a className="menuIcons" href="/Humans">humans</a>
        <a className="menuIcons" href="/Archive">archive</a>
        <a className="menuIcons" href="/Contact">contact</a>
      </div> 	


    </div>

)}

export default Nav;


