import React, { Component } from 'react';
import './App.css'
import Cast from './cast'
class Movie extends Component {
    render() {
        const Actor = this.props.movie.cast;
        const Actors = Actor.map(A => {
            return <Cast castOfMovie={A} />
        })
        return (

            <div>
                <h2>Title :{this.props.movie.title}</h2>
                <img src={this.props.movie.poster} /> <br />
                <i>---------------------------</i>
                <h3>Rating : {this.props.movie.rating}</h3>
                <i>---------------------------</i>
                <p><strong>Description : </strong>{this.props.movie.description}</p>
                <i>---------------------------</i>
                <h2>Director : {this.props.movie.director}</h2>
                <i>---------------------------</i>
                <h3>{Actors}</h3>
                <i>####################################################################</i>

            </div>
        );
    }
}

export default Movie;