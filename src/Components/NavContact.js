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
import 'tachyons';
import {Link} from 'react-router-dom';
// import Logo from './Logo'
// import './Logo.css';
// import Gold from './Gold'
// import {Animated} from "react-animated-css"
// import { Slide } from 'react-slideshow-image';
// import { Fade } from 'react-slideshow-image';
import PartnersContact from './PartnersContact'

const Nav = () => {



  return (
  	<div class="navvy">
      <a className="brand2" href="/Home"> by tosin </a> 
  		

  		<input type="checkbox" id="op"></input>
<div class="lower1">
  <label for="op">
  <div className='wg1'></div>
  			<div className='wg1'></div>
  			</label>
</div>
<div class="overlay overlay-hugeinc">
      <label for="op"></label>
      <nav>
        <PartnersContact />
      </nav>
</div>


</div>

)}

export default Nav;


