import React, { Component } from 'react';

import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// components
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';

import API_KEY from './config';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			photos: [],
			cats: [],
			starwars: [],
			crayons: [],
			loading: true,
			loadingCats: true,
			loadingStarWars: true,
			loadingCrayons: true
		};

	}

	componentDidMount() {
		
		this.searchFlickr('cats')
			.then(response => response.data.photos.photo)
			.then(photos => {
				this.setState({
					cats: photos,
					loadingCats: false
				});
			});

		this.searchFlickr('star wars')
			.then(response => response.data.photos.photo)
			.then(photos => {
				this.setState({
					starwars: photos,
					loadingStarWars: false
				});
			});

		this.searchFlickr('crayons')
			.then(response => response.data.photos.photo)
			.then(photos => {
				this.setState({
					crayons: photos,
					loadingCrayons: false
				});
			});
	}

	// reach out to flickr api, return promise
	searchFlickr = (search) => {
		console.log(API_KEY);
		return axios.get('https://api.flickr.com/services/rest', {
			params: {
				api_key: API_KEY,
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

	// should be called to update photos in state with search results
	submitSearch = (value) => {
		// new search beginning, reset loading state
		this.setState({loading: true});

		return this.searchFlickr(value)
			.then(response => response.data.photos.photo)
			.then(photos => {
				this.setState({
					photos: photos,
					currentTopic: value,
					loading: false
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
							render={ (props) => <PhotoContainer 
													{...props} 
													topic="cats" 
													photos={this.state.cats} 
													submitSearch={this.submitSearch}
													loading={this.state.loadingCats}/>}
						/>
						<Route 
							path="/crayons"
							render={ (props) => <PhotoContainer 
													{...props} 
													topic="crayons" 
													photos={this.state.crayons} 
													submitSearch={this.submitSearch}
													loading={this.state.loadingCrayons}/>}
						/>
						<Route 
							path="/starwars"
							render={ (props) => <PhotoContainer 
													{...props} 
													topic="star wars" 
													photos={this.state.starwars} 
													submitSearch={this.submitSearch}
													loading={this.state.loadingStarWars}/>}
						/>
						<Route 
							path="/search/:value"
							render={(props) => <PhotoContainer 
													{...props}
													topic={this.state.currentTopic}
													photos={this.state.photos} 
													submitSearch={this.submitSearch}
													loading={this.state.loading}/>}
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
