import React from 'react';

// components 
import PhotoList from './PhotoList';

const PhotoContainer = props => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <PhotoList photos={props.photos} />
        </div>
    );
}

export default PhotoContainer;