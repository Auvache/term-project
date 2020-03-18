import React, { Component } from 'react'
import Board from './components/Board'

export class MemoryGame extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Board />
                </div>

            </React.Fragment>
        )
    }
}

export default MemoryGame
