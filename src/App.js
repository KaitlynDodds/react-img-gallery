import React, { Component } from 'react';

// components
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchForm />
        <MainNav />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
