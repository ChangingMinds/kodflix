import React, { Component } from 'react';

const MovieCover = (props) => {
    return (
        <div className="col">
            <img src={props.image} className="App-image" alt={props.title} />
            <div className="overlay"> 
                <div className="text"> {props.title}</div>
            </div>
            
        </div>
    )
}

export default MovieCover;