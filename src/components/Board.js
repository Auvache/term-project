import React, { Component } from 'react';
import BoardTile from './BoardTile'
import PropTypes from 'prop-types';

class Board extends Component {

    render () {
        return this.props.tiles.map((tile) => (
            <BoardTile key={tile.id} tile={tile} flipCard={this.props.flipCard} />
        ));
    }
}

Board.propTypes = {
    tiles: PropTypes.array.isRequired
}

export default Board;
