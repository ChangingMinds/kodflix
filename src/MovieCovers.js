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
                <MovieCover id='Black Mirror' title="Black Mirror" image={ bmirror }/>
                <MovieCover id='Kingdom of heaven' title="Kingdom of Heaven" image={ breakingbad }/>
                <MovieCover id='Grave of the Fireflies' title="Grave of the Fireflies" image={ deathnote }/>
                <MovieCover id='Walking Dead' title="Walking Dead" image={ fotwd }/>
                <MovieCover id='the Wire' title="The Wire" image={ thewire }/>
            </div>
            <div className="flex-grid">
                <MovieCover id='Game of Thrones' title="Game of Throne" image={ got }/>
            </div>
        </div>


    )
}

export {MovieCovers};