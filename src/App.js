import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import About from './pages/About';
import Signup from './pages/Signup';



 
function App () {
    return (
    <BrowserRouter>
    <Navbar />
    <Switch>
        <Route  path='/'  exact component={Home} />
        <Route path='/catalog' component={Catalog} /> 
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} /> 


    </Switch>
  
    </BrowserRouter>
    );
  }

export default App;
