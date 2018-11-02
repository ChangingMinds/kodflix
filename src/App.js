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
            <div class="col">
              <img src={bmirror} className="App-logo" alt="logo" />
              <div class="overlay">
                <div class="text">Black Mirror</div>
              </div>
            </div>
            <div class="col">
              <img src={breakingbad} className="App-logo" alt="logo" />
              <div class="overlay">
                <div class="text">Breaking Bad</div>
              </div>
            </div>
            <div class="col">
              <img src={deathnote} className="App-logo" alt="logo" />
              <div class="overlay">
                <div class="text">Death Note</div>
              </div>
            </div>
          </div>

          <div class="flex-grid-third flex-grid">
            <div class="col">
              <img src={got} className="App-logo" alt="logo" />
              <div class="overlay">
                <div class="text">Game of Thrones</div>
              </div>
            </div>
            <div class="col">
              <img src={fotwd} className="App-logo" alt="logo" />
              <div class="overlay">
                <div class="text">Fear the Walking Dead</div>
              </div>
            </div>
            <div class="col">
              <img src={thewire} className="App-logo" alt="logo" /><div class="overlay">
                <div class="text">The Wire</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
