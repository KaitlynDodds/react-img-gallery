import React from 'react';

const PhotoItem = props => { 

    return (
        <li>
            <img src={props.url} alt={props.alt} />
        </li>
    );
}

export default PhotoItem;