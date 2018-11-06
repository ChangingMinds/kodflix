import React, { Component } from 'react';
import bmirror from './blackmirror.jpg';
import breakingbad from './kingdomofheaven.jpg';
import deathnote from './graveofthefireflies.jpg';
import got from './gameofthrones.jpg';
import fotwd from './walkingdead.jpg';
import thewire from './thewire2.jpg';

import './App.css';
import MovieCover from './MovieCover';

const MovieCovers = (props) => {

    return (
        <div>
        <div className="flex-grid">
            <MovieCover title="Black Mirror" image={ bmirror }/>
            <MovieCover title="Kingdom of Heaven" image={ breakingbad }/>
            <MovieCover title="Grave of the Fireflies" image={ deathnote }/>
            <MovieCover title="Walking Dead" image={ fotwd }/>
            <MovieCover title="The Wire" image={ thewire }/>
        </div>
        <div className="flex-grid">
            <MovieCover title="Game of Throne" image={ got }/>
        </div>
        </div>


    )
}

export default MovieCovers;