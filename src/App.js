import React, { Component } from 'react';


import './App.css';
import MovieCovers from './MovieCovers';

class App extends Component {
  render() {
    return (
      <div className="App">

        <MovieCovers />
        {/* <div>

          <div class="flex-grid">
            <div class="col"><img src={bmirror} className="App-logo" alt="logo" /><div class="overlay"><div class="text">Black Mirror</div></div></div>
            <div class="col"><img src={breakingbad} className="App-logo" alt="logo" /><div class="overlay"><div class="text">Kingdom of Heaven</div></div></div>
            <div class="col"><img src={deathnote} className="App-logo" alt="logo" /><div class="overlay"><div class="text">Grave of the Fireflies</div></div></div>
            <div class="col"><img src={fotwd} className="App-logo" alt="logo" /><div class="overlay"><div class="text">Walking Dead</div></div></div>
            <div class="col"><img src={thewire} className="App-logo" alt="logo" /><div class="overlay"><div class="text">The Wire</div></div></div>
          </div>

          <div class="flex-grid">
            <div class="col"><img src={got} className="App-logo" alt="logo" /></div>
          </div>

        </div> */}
      </div>   
    );
  }
}
        
export default App;
