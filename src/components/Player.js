import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {

    render () {
        const {id, name, score, hasTurn} = this.props.player;
        return (
            <li className={'player'+ ' ' + hasTurn}>
                <p onLoad={this.props.keepScore.bind(this, this.props.player)} >{name}</p>
                <div className={'scores'}>{score}</div>
            </li>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}

export default Player;