import React, { Component } from 'react'
import Board from './components/Board'

class MemoryGame extends Component {
    state = {
        tiles: [
          {id: 1, content: 'do your homework', faceup: false},
          {id: 2, content: 'do your homework', faceup: false},
          {id: 3, content: 'do your homework', faceup: false},
          {id: 4, content: 'do your homework', faceup: false},
          {id: 5, content: 'do your homework', faceup: false},
          {id: 6, content: 'do your homework', faceup: false},
          {id: 7, content: 'do your homework', faceup: false},
          {id: 8, content: 'do your homework', faceup: false},
          {id: 9, content: 'do your homework', faceup: false},
          {id: 10, content: 'do your homework', faceup: false},
          {id: 11, content: 'do your homework', faceup: false},
          {id: 12, content: 'do your homework', faceup: false},
          {id: 13, content: 'do your homework', faceup: false},
          {id: 14, content: 'do your homework', faceup: false},
          {id: 15, content: 'do your homework', faceup: false},
          {id: 16, content: 'do your homework', faceup: false},
          {id: 17, content: 'do your homework', faceup: false},
          {id: 18, content: 'do your homework', faceup: false},
          {id: 19, content: 'do your homework', faceup: false},
          {id: 20, content: 'do your homework', faceup: false}          
        ]
    }

    flipTile = (id) => {
        this.setState({tiles: this.state.tiles.map(tile => {
            return tile;
          })})
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Board tiles={this.state.tiles} flipTile={this.flipTile}/>
                </div>
            </React.Fragment>
        )
    }
}

export default MemoryGame;