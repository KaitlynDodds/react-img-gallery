import React, { Component } from 'react';

import apiKey from './config';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

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

	submitSearch = (value) => {
		return this.searchFlickr(value)
			.then(response => response.data.photos.photo)
			.then(photos => {
				this.setState({
					photos: photos
				});
			});
	}

	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<SearchForm submitSearch={this.submitSearch} />
					<MainNav />
					<Switch>
						<Route 
							exact
							path="/"
							component={ () => <Redirect to="/cats" /> }
						/>
						<Route 
							path="/cats"
							render={ (props) => <PhotoContainer {...props} topic="cats" photos={this.state.cats} />}
						/>
						<Route 
							path="/crayons"
							render={ (props) => <PhotoContainer {...props} topic="crayons" photos={this.state.crayons} />}
						/>
						<Route 
							path="/starwars"
							render={ (props) => <PhotoContainer {...props} topic="star wars" photos={this.state.starwars} />}
						/>
						<Route 
							path="/search/:value"
							render={(props) => <PhotoContainer {...props} photos={this.state.photos} />}
						/> 
						<Route
							render={ (props) => <PhotoContainer {...props} />}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}

}

export default App;
