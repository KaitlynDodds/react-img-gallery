import React, { Component } from 'react';

import apiKey from './config';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			photos: [],
			cats: [],
			starwars: [],
			crayons: []
		};

	}

	componentDidMount() {
		this.searchFlickr('cats')
			.then(response => response.data.photos.photo)
			.then(photos => {
				this.setState({
					cats: photos
				});
			});

		this.searchFlickr('star wars')
			.then(response => response.data.photos.photo)
			.then(photos => {
				this.setState({
					starwars: photos
				});
			});

		this.searchFlickr('crayons')
			.then(response => response.data.photos.photo)
			.then(photos => {
				this.setState({
					crayons: photos
				});
			});
	}

	onSubmitSearch = (val) => {
		this.searchFlickr(val)
			.then(response => response.data.photos.photo)
			.then(photos => {
				this.setState({ photos });
			});
	}

	searchFlickr = (search) => {
		return axios.get('https://api.flickr.com/services/rest', {
			params: {
				api_key: apiKey,
				method: "flickr.photos.search",
				page: 1,
				per_page: 24,
				format: "json",
				nojsoncallback: 1,
				tags: search
			}
		})
		.catch(error => {
			console.log(error);
		});
	}

	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<SearchForm 
						onSubmitSearch={this.onSubmitSearch}
					/>
					<MainNav />
					<Switch>
						<Route 
							exact
							path="/"
							render={() => <PhotoContainer  photos={this.state.photos} /> }
						/>
						<Route 
							path={`/cats`}
							render={ () => <PhotoContainer photos={this.state.cats} />  }
						/>
						<Route 
							path={`/starwars`}
							render={ () => <PhotoContainer photos={this.state.starwars} />  }
						/>
						<Route 
							path={`/crayons`}
							render={ () => <PhotoContainer photos={this.state.crayons} />  }
						/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}

}

export default App;
