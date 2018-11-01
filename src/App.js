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

        <div>

          <div class="flex-grid-third flex-grid">
            <div class="col"><img src={bmirror} className="App-logo" alt="logo" /></div>
            <div class="col"><img src={breakingbad} className="App-logo" alt="logo" /></div>
            <div class="col"><img src={deathnote} className="App-logo" alt="logo" /></div>
          </div>

          <div class="flex-grid-third flex-grid">
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
