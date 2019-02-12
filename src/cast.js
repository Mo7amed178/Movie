import React, { Component } from 'react';

class Cast extends Component {
    render() {
        const castOfMovie = this.props.castOfMovie;
        return (
            <div>
                <h3>Real Name : {castOfMovie.name}</h3>
                <h3>Role Name : {castOfMovie.role}</h3>
            </div>
        );
    }
}

export default Cast;