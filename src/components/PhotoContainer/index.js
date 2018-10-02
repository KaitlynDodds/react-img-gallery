import React, { Component } from 'react';

// components 
import PhotoItem from './PhotoItem';
import NotFound from './NotFound';

class PhotoContainer extends Component { 
    
    render() {
        let photoItemComponents;
        if (this.props.photos) {
            photoItemComponents = this.props.photos.map(photo => {
                    return (
                    <PhotoItem  
                        key={photo.id} 
                        url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} 
                        alt={photo.title}
                    />
                );
            });
        }

        return (
            <div className="photo-container">
                <h3>{this.props.topic || this.props.match.params.value}</h3>
                <ul>
                    {this.props.photos.length > 0 ? photoItemComponents : <NotFound />}
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;