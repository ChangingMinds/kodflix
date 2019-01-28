import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
    return (
        <div><h1>Hello, this will be the details page for each Movie and TV show :)</h1>
        </div>
        <Link to='/'>Back to home page</Link>
    )
}

export {Details};