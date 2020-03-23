import React, { Component } from 'react';
import Player from './Player'
import PropTypes from 'prop-types';

class PlayerScores extends Component {

    render () {
        return this.props.players.map((player) => (
            <Player key={player.id} player={player} keepScore={this.props.keepScore} />
        ));
    }
}

PlayerScores.propTypes = {
    players: PropTypes.array.isRequired
}

export default PlayerScores;