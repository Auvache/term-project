import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BoardTile extends Component {

    render () {
        const {id, content} = this.props.tile;
        return (
            <div className={"tile" + id}>
                <a href="javascript:void(0)" onClick={this.props.flipTile.bind(this, id)}>{content}</a>
            </div>
        )
    }
}

BoardTile.propTypes = {
    tile: PropTypes.object.isRequired
}

export default BoardTile;