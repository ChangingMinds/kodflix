import React, { Component } from 'react';
import {Details} from './Details';
import './App.css';
import {MovieCovers} from './MovieCovers';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' component={ MovieCovers } exact />
          <Route path='/details' component={ Details } exact />
        </div>
      </Router>
    );
  }
}

 export default App;