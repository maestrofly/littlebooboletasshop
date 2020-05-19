import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import Catalog from './Components/Catalog'
import Contact from './Components/Contact'
import About from './Components/About'
import './App.css'

 
class App extends Component {
  render(){
    return (
    <BrowserRouter>
    
      <div className="App">
        <Navbar />
        <Route path='/home' component={Home} />
        <Route path='/catalog' component={Catalog} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />

      </div>
      </BrowserRouter>
    );
  }

}



export default App;
