import React from 'react';
// import Card from './Card'
// import './App.css';
// import './Me.css'
import './Home.css'
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

const Home = () => {
  return (
    <div>
    <Nav />
      <div className="pt3  containertosin">

        <div className='row1'>
          <div className='box1 box'><a href="/Content">
            <img className = 'content imagebox' alt='friends' src="./1-min.jpg"/>
            <div className='contenttext'>Content</div></a>
          </div>
          <div className='box2 box'><a href="/Portraits">
            <img className = 'portraits imagebox' alt='beauty' src="./6-min.jpg"/>
            <div className='portraitstext'>Portraits</div></a>
          </div>
        </div>


        <div className='row2'>
        
          <div className='box3 box'><a href="/Family">
            <img className = 'family imagebox' alt='mama' src="./11-min.jpg"/>
            <div className='familytext'>Family</div></a>
          </div> 
          <div className='box4 box'><a href="/Products">
            <img className = 'products imagebox' alt='towels' src="./image.jpg.png"/>
            <div className='productstext'>Products</div></a>
          </div>
        </div>
      </div>
    </div>
  )
}











export default Home;
