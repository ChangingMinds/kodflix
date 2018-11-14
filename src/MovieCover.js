import React from 'react';
import { Link } from 'react-router-dom'

const MovieCover = (props) => {
    return (
        <Link to='/details' className="col">
            <img src={props.image} className="App-image" alt={props.title} />
            <div className="overlay"> 
                <div className="text"> {props.title}</div>
            </div>
            
        </Link>
    )
}

export{ MovieCover};