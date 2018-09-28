import React, { Component } from 'react';

// components
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchForm />
        <MainNav />
      </div>
    );
  }
}

export default App;
