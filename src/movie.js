import React, { Component } from 'react';
import './App.css'
class Movie extends Component {
    render() {
        return (

            <div>
                <h2>{this.props.movie.title}</h2>
                <img src={this.props.movie.poster} />
                <h3> {this.props.movie.rating}</h3>
                <p>{this.props.movie.description}</p>

            </div>
        );
    }
}

export default Movie;