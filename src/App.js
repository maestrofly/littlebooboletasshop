import React from 'react';
import{BrowserRouter as Router,Route,Link} from "react-router-dom"
import './App.css';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>WELCOME TO OUR BABY WORLD</h1>
    </div>

    <div className="App">
    <Link to = "/Contact">Contact</Link>

    <Route exact={true}path="/Contact" component = {Contact} />
    </div>
    </Router> 
  );
}

export default App;
