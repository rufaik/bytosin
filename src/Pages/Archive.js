import React from 'react'
import Lightbox from 'react-image-lightbox';
// import Card from './Card'
// import './App.css';
// import './Me.css'
import './Content.css'
import './Archive.css'
// import './Complete.css'
// import CardList from './CardList'
// import { main } from './main'
// import LogoHeader from './Logo header'
// import Navigation from './Navigation'
import 'tachyons';
import {Link} from 'react-router-dom';
// import Gold from './Gold'
// import { Fade } from 'react-slideshow-image';
import Nav from '../Components/NavArchive'
import 'react-image-lightbox/style.css';
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



const images = [
    './pics/R2.jpg',
    './pics/R3.jpg',
    './pics/R3.jpg',
    './pics/R2.jpg',
    './pics/R3.jpg',
    './pics/R3.jpg',
    './pics/R2.jpg',
    './pics/R3.jpg',
    './pics/R3.jpg',
    './pics/R2.jpg',
    './pics/R3.jpg',
    './pics/R3.jpg',
    './pics/R2.jpg',
    './pics/R3.jpg',
    './pics/R3.jpg'

 ];

export default class Archive extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

   render() {
    const { photoIndex, isOpen } = this.state;

    return(
     <div className="container1">
    <Nav />
      <div className="containertosin">
        <div className='headerbox'>
            <div className='header'>archive</div>
        </div>
        <div className='arcrow'>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R2.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:0 })} /></div>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R3.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:1 })} /></div>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R3.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:2 })} /></div>
        </div>
        <div className='arcrow'>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R2.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:3 })} /></div>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R3.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:4 })} /></div>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R3.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:5 })} /></div>
        </div>
        <div className='arcrow'>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R2.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:6 })}/></div>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R3.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:7 })}/></div>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R3.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:8 })}/></div>
        </div>
        <div className='arcrow'>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R2.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:9 })}/></div>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R3.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:10 })}/></div>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R3.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:11 })}/></div>
        </div>
        <div className='arcrow'>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R2.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:12 })}/></div>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R3.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:13 })}/></div>
            <div className = 'image'><img className = 'basic' alt='beauty' src="./pics/R3.jpg" onClick={() => this.setState({ isOpen: true, photoIndex:14 })}/></div>
        </div>
       <div className='arrowbox'>
    
      </div>
    </div>

    {isOpen && (
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => this.setState({ isOpen: false })}
        onMovePrevRequest={() =>
          this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length,
          })
        }
        onMoveNextRequest={() =>
          this.setState({
            photoIndex: (photoIndex + 1) % images.length,
          })
        }
      />
    )}

    </div>
    )
   }
  }













