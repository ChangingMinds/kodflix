import React, { Component } from 'react';
import Gladiator from './Gladiator.jpg';
import bmirror from './bmirror.jpg';
import breakingbad from './breakingbad.jpg';
import deathnote from './deathnote.jpg';
import got from './got.jpg';
import fotwd from './fotwd.jpg';
import thewire from './thewire.jpg';

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
        <div class="col"><h2>Black Mirror</h2></div>
        <div class="col"><h2>Breaking Bad</h2></div>
        <div class="col"><h2>Death Note</h2></div>
      </div>
      
      <div class="flex-grid">
        <div class="col"><img src={bmirror} className="App-logo" alt="logo" /></div>
        <div class="col"><img src={breakingbad} className="App-logo" alt="logo" /></div>
        <div class="col"><img src={deathnote} className="App-logo" alt="logo" /></div>
      </div>

      <div class="flex-grid">
        <div class="col"><h2>Game of Thrones</h2></div>
        <div class="col"><h2>Fear the Walking Dead</h2></div>
        <div class="col"><h2>The Wire</h2></div>
      </div>

      <div class="flex-grid">
        <div class="col"><img src={got} className="App-logo" alt="logo" /></div>
        <div class="col"><img src={fotwd} className="App-logo" alt="logo" /></div>
        <div class="col"><img src={thewire} className="App-logo" alt="logo" /></div>
      </div>
      
        </div>
      </div>
    );
  }
}

export default App;
