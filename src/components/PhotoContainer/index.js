import React, { Component } from 'react';

// components 
import PhotoItem from './PhotoItem';
import NotFound from './NotFound';

class PhotoContainer extends Component { 

    componentDidMount = () => {
        // if reloading search results, call search again
        if (this.props.match.params.value) {
            this.props.submitSearch(this.props.match.params.value);
        }
    }
    
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

        if (this.props.loading) {
            return (
                <div className="photo-container">
                    <h3>Loading...</h3>
                </div>
            );
        } else {
            return (
                <div className="photo-container">
                    <h3>{this.props.topic}</h3>
                    <ul>
                        {/* Check that results were returned, otherwise indicate not found */}
                        {this.props.photos && this.props.photos.length > 0 ? photoItemComponents : <NotFound />}
                    </ul>
                </div>
            );
        }
    }
}

export default PhotoContainer;