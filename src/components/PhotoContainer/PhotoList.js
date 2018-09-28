import React from 'react';

// components
import PhotoItem from './PhotoItem';

const PhotoList = props => { 

    const photoItemComponents = props.photos.map(photo => {
         return (
            <PhotoItem 
                key={photo.id} 
                url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} 
                alt={photo.title}
            />
        );
    });

    return (
        <ul>
            { photoItemComponents }
        </ul>
    );
}

export default PhotoList;