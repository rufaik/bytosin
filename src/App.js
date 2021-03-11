import React, { Component } from 'react';
import './App.css';
// import Navigation from './Navigation'
// import Contact from './Contact'
// import Curriculum from './Curriculum'
// import Partners from './Partners'
// import Blan from './Blan'
// import Snips from './Snips'
// import Olympia from './Olympia'
// import Adidas from './Adidas'
// import Gold from './Gold'
import Home from './Home'
import Content from './Content'
import Portraits from './Portraits'
import Family from './Family'
import Products from './Products'
import Contact from './Contact'
// import ThankYou from './ThankYou'
// import Work from './Work'
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from "react-router-dom"
// import {Animated} from "react-animated-css"





const App = () => {
  return(
    <BrowserRouter>
  <Switch>
  
      <Route path ={"/Home"} component={Home} />
      <Route exact path ={"/"} component={Home} />
      <Route exact path ={"/Content"} component={Content} />
      <Route exact path ={"/Portraits"} component={Portraits} />
      <Route exact path ={"/Family"} component={Family} />
      <Route exact path ={"/Products"} component={Products} />
      <Route exact path ={"/Contact"} component={Contact} />
     

    

    
     </Switch>
    
 
   

</BrowserRouter>
     )      
          
      
     
} 



export default App;
