import React, {Component} from 'react';
import '../../App.css';
import Cell from "../Cell/Cell";
// import PopUp from "../PopUp/PopUp";
import Field from "./Field";

class FieldContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [
                {id: 1, value: null}, {id: 2, value: null}, {id: 3, value: null},
                {id: 4, value: null}, {id: 5, value: null}, {id: 6, value: null},
                {id: 7, value: null}, {id: 8, value: null}, {id: 9, value: null},
            ],
            xIsNext: true,
            winner: null,
            isStartGame: false,
            gamer1: 'Gamer 1',
            gamer2: 'Gamer 2',
            isPopUpActive: false,
        };
    }

    calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
                return squares[a].value;
            }
        }
        return null;
    };


    onClickCell = (id) => {
        if (this.calculateWinner(this.state.squares) || this.state.squares[this.state.squares.id]) {
            return;
        }
        this.setState({
            ...this.state,
            squares: this.state.squares.map(square => (square.id === id)
                ? {...square, value: this.state.xIsNext ? 'X' : 'O'} : square),
            xIsNext: !this.state.xIsNext,
        });
        this.calculateWinner(this.state.squares);
    };

    startGame = () => {
        this.setState({
            isStartGame: !this.state.isStartGame,
            isPopUpActive: !this.state.isPopUpActive
        })
    };

    closePopUp = () => {
        this.setState({isPopUpActive: !this.state.isPopUpActive})
    };

    getName1 = (e) => {
        this.setState({gamer1: e.currentTarget.value})
    };
    getName2 = (e) => {
        this.setState({gamer2: e.currentTarget.value})
    };

    startGameAgain = () => {
        this.setState({
            squares: [
                {id: 1, value: null}, {id: 2, value: null}, {id: 3, value: null},
                {id: 4, value: null}, {id: 5, value: null}, {id: 6, value: null},
                {id: 7, value: null}, {id: 8, value: null}, {id: 9, value: null},
            ],
            xIsNext: true,
            winner: null,
            isStartGame: false,
            isPopUpActive: false,
        })
    };

    continueGame = () => {
        this.setState({

        })
    };

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner : ' + ((winner === 'X') ? this.state.gamer1 : this.state.gamer2);
        } else {
            status = 'Next move : ' + (this.state.xIsNext ? this.state.gamer1
                : this.state.gamer2);
        }

        let cells = this.state.squares.map((square, i) => {
            return <Cell key={i} value={square.value} id={square.id} isStartGame={this.state.isStartGame}
                         xIsNext={this.state.xIsNext} onClickCell={this.onClickCell}/>
        });


        return <Field {...this.state} cells={cells} status={status} winner={winner} closePopUp={this.closePopUp}
                      getName1={this.getName1} getName2={this.getName2} continueGame={this.continueGame}
                      startGame={this.startGame} startGameAgain={this.startGameAgain}/>
    }
}

export default FieldContainer;