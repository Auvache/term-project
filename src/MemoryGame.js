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
    state = {
        tiles: [
          {id: this.ids[0], content: Img1, cardClass: 'facedown', faceup: false},
          {id: this.ids[1], content: Img2, cardClass: 'facedown', faceup: false},
          {id: this.ids[2], content: Img3, cardClass: 'facedown', faceup: false},
          {id: this.ids[3], content: Img4, cardClass: 'facedown', faceup: false},
          {id: this.ids[4], content: Img5, cardClass: 'facedown', faceup: false},
          {id: this.ids[5], content: Img6, cardClass: 'facedown', faceup: false},
          {id: this.ids[6], content: Img7, cardClass: 'facedown', faceup: false},
          {id: this.ids[7], content: Img8, cardClass: 'facedown', faceup: false},
          {id: this.ids[8], content: Img9, cardClass: 'facedown', faceup: false},
          {id: this.ids[9], content: Img10, cardClass: 'facedown', faceup: false},
          {id: this.ids[10], content: Img11, cardClass: 'facedown', faceup: false},
          {id: this.ids[11], content: Img12, cardClass: 'facedown', faceup: false},
          {id: this.ids[12], content: Img1, cardClass: 'facedown', faceup: false},
          {id: this.ids[13], content: Img2, cardClass: 'facedown', faceup: false},
          {id: this.ids[14], content: Img3, cardClass: 'facedown', faceup: false},
          {id: this.ids[15], content: Img4, cardClass: 'facedown', faceup: false},
          {id: this.ids[16], content: Img5, cardClass: 'facedown', faceup: false},
          {id: this.ids[17], content: Img6, cardClass: 'facedown', faceup: false},
          {id: this.ids[18], content: Img7, cardClass: 'facedown', faceup: false},
          {id: this.ids[19], content: Img8, cardClass: 'facedown', faceup: false},
          {id: this.ids[20], content: Img9, cardClass: 'facedown', faceup: false},
          {id: this.ids[21], content: Img10, cardClass: 'facedown', faceup: false},
          {id: this.ids[22], content: Img11, cardClass: 'facedown', faceup: false},
          {id: this.ids[23], content: Img12, cardClass: 'facedown', faceup: false}
        ]
    }

    // TODO: animate the card flip
    flipCard = (tile) => {
        if (tile.faceup !== true) {
            tile.faceup = true;
            tile.cardClass = 'faceup';
        } else {
            tile.faceup = false;
            tile.cardClass = 'facedown';
        }
    }

    // TODO: change state to newly shuffled cards
    shuffle = () => {
        let ids = this.ids;
        let len = ids.length, temp, rand;
        while (0 !== len) {
            rand = Math.floor(Math.random() * len);
          len -= 1;
          temp = ids[len];
          ids[len] = ids[rand];
          ids[rand] = temp;
        }
        this.ids = ids;
        console.log(this.ids);
        // this.setState(this.ids, ids);
      }
    
    // TODO: compare two tiles content and remove card if they match. Add a point if the cards are removed

    // TODO: add a second player

    render() {
        return (
            <React.Fragment>
                <div className="grid-container">
                    <div className="head">
                        <h2>Play memory</h2>
                        <a href="#" onClick={this.shuffle}>Shuffle the cards</a>
                    </div>
                    <Board tiles={this.state.tiles}  flipCard={this.flipCard} />
                </div>
            </React.Fragment>
        )
    }

}

export default MemoryGame;