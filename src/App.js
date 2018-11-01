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
        <div>
      <div class="flex-grid">
        <div class="col">Black Mirror</div>
        <div class="col">Breaking Bad</div>
        <div class="col">Death Note</div>
      </div>
      
      <div class="flex-grid">
        <div class="col">Game of Thrones</div>
        <div class="col">Fear the Walking Dead</div>
        <div class="col">The Wire</div>
      </div>
      
        </div>
      </div>
    );
  }
}

export default App;
