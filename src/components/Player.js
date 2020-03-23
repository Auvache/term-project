import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {

    render () {
        const {name, score} = this.props.player;
        return (
            <li onLoad={this.props.keepScore.bind(this, this.props.player)} >{name}: {score}</li>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}

export default Player;