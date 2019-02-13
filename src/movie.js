import React, { Component } from 'react';
import './App.css'
import Cast from './cast'
class Movie extends Component {

    state = { liked: true, hideActors: true };

    render() {
        let likedOrNot = '';

        if (this.state.liked === true) {
            likedOrNot = 'Unlike';
        } else {
            likedOrNot = 'Like'
        }
        //-----------------------------------

        // let shownOrNot = '';
        // if (this.state1.show === true) {
        //     shownOrNot = '{Actors}'
        // } else {
        //     shownOrNot = 'click here'
        // }



        const Actor = this.props.movie.cast;
        const Actors = Actor.map(A => {
            return <Cast castOfMovie={A} />
        })
        return (

            < div >
                <h2>Title :{this.props.movie.title}</h2>
                <img src={this.props.movie.poster} /> <br />
                <i>---------------------------</i>
                <h3>Rating : {this.props.movie.rating}</h3>
                <i>---------------------------</i>
                <p><strong>Description : </strong>{this.props.movie.description}</p>
                <i>---------------------------</i>
                <h2>Director : {this.props.movie.director}</h2>
                <i>---------------------------</i> <br />
                {Actors}

                {/* <button onClick={this.toggleActors}>
                    Actors
                </button> <br /> */}

                <button onClick={this.toggleLike}>
                    {likedOrNot}
                </button> <br />

                <i>####################################################################</i>

            </div >
        );
    }
    toggleLike = () => {
        if (this.state.liked === true) {
            this.setState({ liked: false });
        } else {
            this.setState({ liked: true });
        }
    }

    toggleActors = () => {

        if (this.state.show === true) {
            this.setState({ show: false });
        } else {
            this.setState({ show: true });
        }
    }
}

export default Movie;