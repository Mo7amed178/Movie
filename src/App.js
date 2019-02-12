import React, { Component } from 'react';
import './App.css';
import Movie from './movie';
import Review from './review';
import MoviesList from './movielist'

class App extends Component {
  render() {
    return (
      <div>
        <MoviesList />
      </div>
    );
  }
}

export default App;