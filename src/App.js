import React, { Component } from 'react';
import Gladiator from './Gladiator.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={Gladiator} className="App-logo" alt="logo" />
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
