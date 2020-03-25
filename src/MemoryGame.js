import React, { Component } from 'react'
import Board from './components/Board'
import PlayerScores from './components/PlayerScores'
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
    // set up the game
    ids = [8, 17, 11, 13, 14, 24, 22, 10, 1, 20, 4, 9, 23, 3, 16, 18, 19, 5, 7, 2, 12, 15, 6, 21];
    state = {
        pageTitle: 'Memory Game',
        titleText: 'Ready to play memory?',
        startButtonText: 'Shuffle and Start Game',
        addPlayerText: '',
        activePlayer: 0,
        faceupTiles: [],
        matchedTiles: [],
        players: [],
        tiles: [
          {id: this.ids[0], content: Img1, cardClass: 'faceup', faceup: false},
          {id: this.ids[1], content: Img2, cardClass: 'faceup', faceup: false},
          {id: this.ids[2], content: Img3, cardClass: 'faceup', faceup: false},
          {id: this.ids[3], content: Img4, cardClass: 'faceup', faceup: false},
          {id: this.ids[4], content: Img5, cardClass: 'faceup', faceup: false},
          {id: this.ids[5], content: Img6, cardClass: 'faceup', faceup: false},
          {id: this.ids[6], content: Img7, cardClass: 'faceup', faceup: false},
          {id: this.ids[7], content: Img8, cardClass: 'faceup', faceup: false},
          {id: this.ids[8], content: Img9, cardClass: 'faceup', faceup: false},
          {id: this.ids[9], content: Img10, cardClass: 'faceup', faceup: false},
          {id: this.ids[10], content: Img11, cardClass: 'faceup', faceup: false},
          {id: this.ids[11], content: Img12, cardClass: 'faceup', faceup: false},
          {id: this.ids[12], content: Img1, cardClass: 'faceup', faceup: false},
          {id: this.ids[13], content: Img2, cardClass: 'faceup', faceup: false},
          {id: this.ids[14], content: Img3, cardClass: 'faceup', faceup: false},
          {id: this.ids[15], content: Img4, cardClass: 'faceup', faceup: false},
          {id: this.ids[16], content: Img5, cardClass: 'faceup', faceup: false},
          {id: this.ids[17], content: Img6, cardClass: 'faceup', faceup: false},
          {id: this.ids[18], content: Img7, cardClass: 'faceup', faceup: false},
          {id: this.ids[19], content: Img8, cardClass: 'faceup', faceup: false},
          {id: this.ids[20], content: Img9, cardClass: 'faceup', faceup: false},
          {id: this.ids[21], content: Img10, cardClass: 'faceup', faceup: false},
          {id: this.ids[22], content: Img11, cardClass: 'faceup', faceup: false},
          {id: this.ids[23], content: Img12, cardClass: 'faceup', faceup: false}
        ] 
    }

    // methods
    addPlayer = () => {
        let l = this.state.players.length;
        if (l < 10) {
            let l2 = l + 1;
            let n = 'Player' + l2;
            this.state.players.push({id: l, name: n, score: 0, hasTurn: false})
            console.log(this.state.players)
            this.setState({players: this.state.players})
            if (l === 9) {
                this.setState({addPlayerText: ''})
            }
        } 
    }

    compareTiles = () => {
        let t1 = this.state.faceupTiles[0];
        let t2 = this.state.faceupTiles[1];
        if (t1.content === t2.content) {
            console.log('match');
            this.state.matchedTiles.push(t1,t2);
            this.keepScore();
        } else {
            console.log('not a match');
            setTimeout(this.flipBack(t1,t2), 500)
            this.switchPlayers();
        }
        this.setState({faceupTiles: []})
    }

    flipBack = (t1,t2) => {
        t1.faceup = false;
        t1.cardClass = 'facedown';
        t2.faceup = false;
        t2.cardClass = 'facedown';
    }

    // TODO: animate the card flip
    flipCard = (tile) => {
        if (this.state.faceupTiles.length < 3) {
            if (tile.faceup !== true) {
                tile.faceup = true;
                tile.cardClass = 'faceup';
                this.state.faceupTiles.push(tile)
                if (this.state.faceupTiles.length === 2) {
                    setTimeout(this.compareTiles, 1000)
                }
            } 
        }
    }

    keepScore = () => {
        this.state.players[this.state.activePlayer].score += 1;
    }

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
        this.startGame();
    }

    startGame = () => {
        this.setState({
            titleText: '',
            startButtonText: 'Shuffle and Start over',
            addPlayerText: 'Add Player',
            faceupTiles: [],
            matchedTiles: [],
            players: [
                {id: 0, name: 'Player 1', score: 0, hasTurn: true}
            ],
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
        })
    }

    switchPlayers = () => {
        console.log('players just played');
        console.log(this.state.players[this.state.activePlayer]);
        this.state.players[this.state.activePlayer].hasTurn = false;
        let i = this.state.activePlayer;
        let l = this.state.players.length - 1;
        if (i < l) {
            i += 1; 
        } else {
            i = 0;
        }
        this.setState({activePlayer: i})

        console.log('players turn');
        this.state.players[this.state.activePlayer].hasTurn = true;
        console.log(this.state.players[this.state.activePlayer]);
    }

    render() {
        return (
            <React.Fragment>
                <div className="grid-container">
                    <div className="head">
                        <ul className="scores-list">
                            <PlayerScores players={this.state.players} keepScore={this.keepScore} />
                            <li><button onClick={this.addPlayer}>{this.state.addPlayerText}</button></li>
                        </ul>
                        <h2>{this.state.titleText}</h2>
                        <a href="#" className="start-button" onClick={this.shuffle}>{this.state.startButtonText}</a>
                    </div>
                    <Board tiles={this.state.tiles} flipCard={this.flipCard} />
                </div>
            </React.Fragment>
        )
    }
}

export default MemoryGame;