import React from 'react';
import gif from '../resources/images/gif/loading-gear.gif';

const Loading = () => {
    return (
        <div className="loading">
            <h6>Rooms Data Loading...</h6>
            <img src={gif} alt="loading"/>
        </div>
    )
}

export default Loading
