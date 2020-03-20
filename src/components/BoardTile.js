import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BoardTile extends Component {

    render () {
        const {id, content, cardClass} = this.props.tile;
        return (
            <div className={"tile" + id}>
                <a href="#" onClick={this.props.flipCard.bind(this, this.props.tile)}>
                <img src={content} className={cardClass} />
                </a>
            </div>
        )
    }
}

BoardTile.propTypes = {
    tile: PropTypes.object.isRequired
}

export default BoardTile;