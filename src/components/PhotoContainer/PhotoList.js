import React from 'react';

// components
import PhotoItem from './PhotoItem';

const PhotoList = props => { 
    return (
        <ul>
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
        </ul>
    );
}

export default PhotoList;