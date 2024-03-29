import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Online from './components/Online';
import Offline from './components/Offline';
import Contact from './components/Contact';

import Navbarmenu from './components/menu/Navbarmenu';
import Govt from './components/Govt';
import Private from './components/Private';

function App() {
  return (
    <div>
      <Router basename="/">

        {/* Add Menu Component */}
        <Navbarmenu />
        
        
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route exact path="/Govt.Jobs" component={Govt}/>
          <Route exact path="/Private" component={Private}/>
          <Route path="/About" component={About}/>
          <Route path="/Online" component={Online}/>
          <Route path="/Offline" component={Offline}/>
          <Route path="/Contact" component={Contact}/>

          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
