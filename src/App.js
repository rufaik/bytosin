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
import Home from './Pages/Home'
import Content from './Pages/Content'
import Portraits from './Pages/Portraits'
import Family from './Pages/Family'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
// import ThankYou from './ThankYou'
// import Work from './Work'
import {
  Route,
  Switch,
  BrowserRouter,
  HashRouter,
  Redirect
} from "react-router-dom"
// import {Animated} from "react-animated-css"





const App = () => {
  return(
    <HashRouter>
  <Switch>
  
      <Route path ={"/Home"} component={Home} />
      <Route exact path ={"/"} component={Home} />
      <Route exact path ={"/Content"} component={Content} />
      <Route exact path ={"/Portraits"} component={Portraits} />
      <Route exact path ={"/Family"} component={Family} />
      <Route exact path ={"/Products"} component={Products} />
      <Route exact path ={"/Contact"} component={Contact} />
     

    

    
     </Switch>
    
 
   

</HashRouter>
     )      
          
      
     
} 



export default App;
