import React, { Component } from 'react';

// components 
import PhotoItem from './PhotoItem';

class PhotoContainer extends Component { 

    componentDidMount = () => {
        this.props.search(this.props.match.params.value);
    }
    
    render() {
        const photoItemComponents = this.props.photos.map(photo => {
                return (
                <PhotoItem  
                    key={photo.id} 
                    url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} 
                    alt={photo.title}
                />
            );
        });

        return (
            <div className="photo-container">
                <ul>
                    { photoItemComponents  }
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;