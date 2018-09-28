import React, { Component } from 'react';

import apiKey from './config';
import axios from 'axios';

// components
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			photos: []
		};

	}

	componentDidMount() {
		this.submitSearch("cats");
	}

	submitSearch = (val) => {
		axios.get('https://api.flickr.com/services/rest', {
			params: {
				api_key: apiKey,
				method: "flickr.photos.search",
				page: 1,
				per_page: 24,
				format: "json",
				nojsoncallback: 1,
				tags: val
			}
		})
		.then(response => {
			this.setState({ photos: response.data.photos.photo });
		})
		.catch(error => {
			console.log(error);
		});
	}

	render() {
		return (
			<div className="container">
				<SearchForm />
				<MainNav />
				<PhotoContainer 
					photos={this.state.photos}
				/>
			</div>
		);
	}

}

export default App;
