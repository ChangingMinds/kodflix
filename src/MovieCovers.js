import React from 'react';
import bmirror from './Media/blackmirror.jpg';
import breakingbad from './Media/kingdomofheaven.jpg';
import deathnote from './Media/graveofthefireflies.jpg';
import got from './Media/gameofthrones.jpg';
import fotwd from './Media/walkingdead.jpg';
import thewire from './Media/thewire2.jpg';

import './App.css';
import {MovieCover} from './MovieCover';

const MovieCovers = () => {

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

export {MovieCovers};