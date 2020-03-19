import React, { Component } from 'react'
import Board from './components/Board'
import ReactCardFlip from 'react-card-flip';
import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.jpg';
import Img5 from './img/img5.jpg';
import Img6 from './img/img6.jpg';
import Img7 from './img/img7.jpg';
import Img8 from './img/img8.jpg';
import Img9 from './img/img9.jpg';
import Img10 from './img/img10.jpg';
import Img11 from './img/img11.jpg';
import Img12 from './img/img12.jpg';

class MemoryGame extends Component {
    ids = [8, 17, 11, 13, 14, 24, 22, 10, 1, 20, 4, 9, 23, 3, 16, 18, 19, 5, 7, 2, 12, 15, 6, 21];
    // TODO: randomize the order of the ideas

    state = {
        tiles: [
          {id: this.ids[0], content: <img src={Img1} />, faceup: false},
          {id: this.ids[1], content: <img src={Img2} />, faceup: false},
          {id: this.ids[2], content: <img src={Img3} />, faceup: false},
          {id: this.ids[3], content: <img src={Img4} />, faceup: false},
          {id: this.ids[4], content: <img src={Img5} />, faceup: false},
          {id: this.ids[5], content: <img src={Img6} />, faceup: false},
          {id: this.ids[6], content: <img src={Img7} />, faceup: false},
          {id: this.ids[7], content: <img src={Img8} />, faceup: false},
          {id: this.ids[8], content: <img src={Img9} />, faceup: false},
          {id: this.ids[9], content: <img src={Img10} />, faceup: false},
          {id: this.ids[10], content: <img src={Img11} />, faceup: false},
          {id: this.ids[11], content: <img src={Img12} />, faceup: false},
          {id: this.ids[12], content: <img src={Img1} />, faceup: false},
          {id: this.ids[13], content: <img src={Img2} />, faceup: false},
          {id: this.ids[14], content: <img src={Img3} />, faceup: false},
          {id: this.ids[15], content: <img src={Img4} />, faceup: false},
          {id: this.ids[16], content: <img src={Img5} />, faceup: false},
          {id: this.ids[17], content: <img src={Img6} />, faceup: false},
          {id: this.ids[18], content: <img src={Img7} />, faceup: false},
          {id: this.ids[19], content: <img src={Img8} />, faceup: false},
          {id: this.ids[20], content: <img src={Img9} />, faceup: false},
          {id: this.ids[21], content: <img src={Img10} />, faceup: false},
          {id: this.ids[22], content: <img src={Img11} />, faceup: false},
          {id: this.ids[23], content: <img src={Img12} />, faceup: false}       
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
                <div className="grid-container">
                    <div className="head">
                        <h2>Play memory</h2>
                        <a href="javascript:void(0)">Shuffle the cards</a>
                    </div>
                    <Board tiles={this.state.tiles} flipTile={this.flipTile}/>
                </div>
            </React.Fragment>
        )
    }
}

export default MemoryGame;